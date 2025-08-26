import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../api";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const Assessment = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewMode, setReviewMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const res = await fetchQuestions(userId);
        setQuestions(res.data.questions);
        setLoading(false);
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Error loading questions");
      }
    };
    loadQuestions();
  }, [userId]);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option) => {
    const updatedAnswers = { ...answers, [currentQuestion._id]: option };
    setAnswers(updatedAnswers);

    // Automatically move to the next question
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300); // short delay for UX
    } else {
      // If last question, go to review
      setTimeout(() => setReviewMode(true), 300);
    }
  };

  const handleSubmit = async () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q._id] === q.answer) correct++;
    });

    const sectionScores = [
      { key: "overall", label: "Overall Score", score: correct, max: questions.length },
    ];

    try {
      await axios.post(`${API_BASE}/api/results`, {
        userId,
        transactionId: "TXN-DEMO",
        ageGroup: "18-25",
        sectionScores,
      });
      navigate(`/report/${userId}`);
    } catch (err) {
      console.error("Error submitting results:", err);
      alert("Failed to submit results");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        Loading questions...
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-600">
        No questions found.
      </div>
    );
  }

  // -------------------- Review Mode UI --------------------
  if (reviewMode) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Review Your Answers</h2>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div
              key={q._id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <p className="font-semibold">
                Q{idx + 1}: {q.question}
              </p>
              <p className="mt-1">
                <span className="text-gray-600">Your answer:</span>{" "}
                <span className="font-medium text-blue-700">
                  {answers[q._id] || "Not answered"}
                </span>
              </p>
              <button
                className="mt-2 text-sm text-blue-500 underline hover:text-blue-700"
                onClick={() => {
                  setCurrentIndex(idx);
                  setReviewMode(false);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
        <button
          className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          onClick={handleSubmit}
        >
          Submit Final Answers
        </button>
      </div>
    );
  }

  // -------------------- Main Assessment UI --------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Question Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-blue-800">
            Question {currentIndex + 1} of {questions.length}
          </h3>
          <p className="mt-2 text-gray-700">{currentQuestion.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => (
            <label
              key={idx}
              className={`flex items-center p-3 rounded-lg border cursor-pointer transition ${
                answers[currentQuestion._id] === opt
                  ? "bg-emerald-100 border-emerald-500"
                  : "bg-gray-50 hover:bg-gray-100 border-gray-300"
              }`}
            >
              <input
                type="radio"
                name={`question-${currentQuestion._id}`}
                value={opt}
                checked={answers[currentQuestion._id] === opt}
                onChange={() => handleSelect(opt)}
                className="mr-3"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
