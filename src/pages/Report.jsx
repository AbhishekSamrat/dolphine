import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export default function Report() {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/results/${userId}`);
        setData(res.data);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load report");
      } finally {
        setLoading(false);
      }
    })();
  }, [userId]);

  const handlePrint = () => window.print();

  if (loading) return <div className="container">Loading report…</div>;
  if (err) return <div className="container text-red-600">{err}</div>;
  if (!data) return null;


  return (
    <div className="max-w-5xl mx-auto p-6 print:p-0">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-1">Table of Contents</h1>
        <p className="text-sm text-gray-600">DEM Scan Report of Master Saksham Parve</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm leading-6">
        {[
          ["1", "Client Details", "3"],
          ["2", "Transformative Power of the SMM", "6"],
          ["3", "Seven Core Principles", "7"],
          ["4", "The Biology of Belief", "8"],
          ["5", "Spiritual and Cognitive Harmony", "9"],
          ["6", "SMI and SAI Energies", "10"],
          ["7", "Cosmic Blueprint", "11"],
          ["8", "The Race of Life", "12"],
          ["9", "Key of Mastery - Exertion", "13"],
          ["10", "Divine Intervention", "14"],
          ["11", "Parental Contribution", "15"],
          ["12", "Chakra Activation Level", "16"],
          ["13", "Aura Illumination Level", "17"],
          ["14", "Positive Karmas", "18"],
          ["15", "Negative Karmas", "19"],
          ["16", "Balanced Karmas", "20"],
          ["17", "Innate Physical Abilities", "21"],
          ["18", "Innate Mental Abilities", "22"],
          ["19", "Innate Emotional Abilities", "23"],
          ["20", "Innate Intellectual Abilities", "24"],
          ["21", "Innate Spiritual Abilities", "25"],
          ["22", "Openness to Experience", "26"],
          ["23", "Conscientiousness", "27"],
          ["24", "Extraversion", "28"],
          ["25", "Agreeableness", "29"],
          ["26", "Neuroticism", "30"],
          ["27", "Verbal Linguistic Intelligence", "31"],
          ["28", "Logical Intelligence", "32"],
          ["29", "Spatial Visual Intelligence", "33"],
          ["30", "Interpersonal Intelligence", "34"],
          ["31", "Intrapersonal Intelligence", "35"],
          ["32", "Bodily Intelligence", "36"],
          ["33", "Musical Intelligence", "37"],
          ["34", "Naturalistic Intelligence", "38"],
          ["35", "Existential Intelligence", "39"],
          ["36", "Cognitive Traits", "40"],
          ["37", "Interpersonal Traits", "41"],
          ["38", "Motivational Traits", "42"],
          ["39", "Behavioral Traits", "43"],
          ["40", "Hard Skills", "44"],
          ["41", "Soft Skills", "45"],
          ["42", "Transferable Skills", "46"],
          ["43", "Personal Development Skills", "47"],
          ["44", "Group One Careers", "49"],
          ["45", "Banking & Money Management Careers", "50"],
          ["46", "Group Two Careers", "52"],
          ["47", "Technical and Scientific Careers", "53"],
          ["48", "Group Three Careers", "55"],
          ["49", "Healthcare and Life Sciences Careers", "56"],
          ["50", "Group Four Careers", "58"],
          ["51", "Creative and Media Careers", "59"],
          ["52", "Group Five Careers", "61"],
          ["53", "Management and Corporate Careers", "62"],
          ["54", "Group Six Careers", "64"],
          ["55", "Public Service & Government Careers", "65"],
          ["56", "Group Seven Careers", "67"],
          ["57", "Practical & Field Work Careers", "68"],
          ["58", "All Careers Comparison", "70"],
        ].map(([sr, title, page], idx) => (
          <div key={idx} className="flex justify-between border-b border-dashed pb-1">
            <span><b>{sr}</b>. {title}</span>
            <span className="tabular-nums">{page}</span>
          </div>
        ))}
      </section>
      <section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Unlocking Your Brain's Full Potential</h2>
  <p className="mb-4">
    For decades, a pervasive myth suggested that humans only use a mere 10% of their brain. Modern neuroscience has unequivocally debunked this: you use virtually 100% of your brain, all the time. Every thought, every emotion, every movement, even sleep, involves widespread neural activity.
  </p>
  <p className="mb-4">
    So, if your brain is already fully engaged, does that mean there's no room for improvement? Absolutely not. The true frontier of cognitive enhancement isn't about activating dormant grey matter; it's about amplifying the efficiency, effectiveness, and strategic utilization of the 100% you already possess.
  </p>
  <p className="mb-4">
    This is precisely where the <strong>Dolphin EdTech Miracles (DEM)</strong> comes in. We don't promise to unlock a mythical "unused" portion of your brain. Instead, we empower you to leverage your existing cognitive capacity with such precision and power that you experience a 10x amplification in your mental performance and life outcomes.
  </p>
  <p className="mb-4">
    Think of it not as turning on more lights in a room, but as optimizing the entire electrical grid: making every circuit more efficient, every bulb brighter, and every energy flow more purposeful. The DEM Program helps you transform diffused mental effort into laser-sharp cognitive mastery, leading to exponentially better results across all facets of your life.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-2">
    How Dolphin EdTech Amplifies Your Cognitive Capacity Utilization 10x:
  </h3>

  {/* Section 1: Focus & Concentration */}
  <div className="mb-6">
    <h4 className="font-bold mb-2">1. 10x Sharper Focus & Concentration:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> In a world of constant digital distractions, maintaining sustained focus is a battle. Students often struggle with low concentration, easily losing track of tasks.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> Our program trains your brain to filter out noise and lock onto tasks with unprecedented intensity. Through scientific neurofeedback and mindfulness techniques, you learn to consciously direct and sustain attention, minimizing mental drift.
    </p>
    <p>
      <strong>iii. Example:</strong> Imagine a student who previously took 2 hours to complete a complex assignment due to constant distractions. With DEM, they can complete the same assignment in 20 minutes of hyper-focused work, achieving the same quality or better. This isn't about working harder, but about utilizing every moment of focus with 10x efficiency.
    </p>
  </div>

  {/* Section 2: Memory & Recall */}
  <div>
    <h4 className="font-bold mb-2">2. 10x Enhanced Memory & Recall:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> Information overload leads to poor retention and difficulty recalling crucial facts during exams or critical moments.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> We don't just teach rote memorization; we teach your brain to encode, store, and retrieve information with superior organization and speed. Techniques rooted in neuroscience enhance neural connections vital for memory formation and rapid recall.
    </p>
    <p>
      <strong>iii. Example:</strong> A student might spend 3 hours cramming for an exam, only to recall 60% of the material. With DEM's memory strategies, they can spend 30 minutes actively engaging with the material and recall 90% or more, demonstrating a 10x improvement in recall efficiency and depth of understanding.
    </p>
  </div>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Unlocking Your Brain's Full Potential – 2</h2>

  {/* Section 3: Problem-Solving & Critical Thinking */}
  <div className="mb-6">
    <h4 className="font-bold mb-2">3. 10x More Effective Problem-Solving & Critical Thinking:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> Complex problems often lead to analysis paralysis, flawed judgments, or reliance on conventional, uninspired solutions.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> The program hones your critical thinking and analytical skills, enabling you to dissect problems into their core components, question assumptions, and synthesize insights with unparalleled clarity. It sparks creative ideation, allowing you to devise novel and effective solutions.
    </p>
    <p>
      <strong>iii. Example:</strong> A professional might spend days grappling with a complex business challenge, leading to a mediocre solution. DEM-trained individuals can identify the root cause and brainstorm 10x more innovative and effective solutions in a fraction of the time, leading to breakthrough results.
    </p>
  </div>

  {/* Section 4: Faster & Deeper Learning */}
  <div className="mb-6">
    <h4 className="font-bold mb-2">4. 10x Faster & Deeper Learning:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> Traditional learning methods are often passive, leading to superficial understanding and slow knowledge acquisition.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> By optimizing information processing and conceptualization, the program accelerates your learning curve. You don't just absorb data; you integrate it deeply, making connections, and understanding underlying principles at an exponential rate.
    </p>
    <p>
      <strong>iii. Example:</strong> Learning a new complex subject might typically take weeks of dedicated study. DEM participant can grasp the core concepts and begin applying them effectively within days, demonstrating a 10x acceleration in their learning process.
    </p>
  </div>

  {/* Section 5: Mental Resilience & Emotional Intelligence */}
  <div className="mb-6">
    <h4 className="font-bold mb-2">5. 10x Greater Mental Resilience & Emotional Intelligence:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> Anxiety, fear of failure, and emotional volatility can hijack cognitive resources, leading to poor performance under pressure.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> We train emotional regulation and stress management, freeing up vast amounts of cognitive energy previously consumed by internal turmoil. This allows your brain to operate at its peak, even in high-stakes situations.
    </p>
    <p>
      <strong>iii. Example:</strong> During a high-pressure competitive exam, anxiety might cause a student to "blank out" or make careless errors, performing at 50% of their potential. DEM-trained student, equipped with emotional mastery, can maintain composure and perform at 90-100% of their actual capacity, effectively amplifying their usable cognitive output by 10x in critical moments.
    </p>
  </div>

  {/* Section 6: Productivity & Output */}
  <div>
    <h4 className="font-bold mb-2">6. 10x Enhanced Productivity & Output:</h4>
    <p className="mb-2">
      <strong>i. The Challenge:</strong> Inefficient workflows, distractions, and lack of self-discipline often lead to wasted time and suboptimal output.
    </p>
    <p className="mb-2">
      <strong>ii. DEM Amplification:</strong> By integrating superior time management, organization, and self-discipline, the program helps you channel your fully active brain towards purposeful action. You eliminate mental friction and optimize every step of your workflow.
    </p>
    <p>
      <strong>iii. Example:</strong> Someone might spend 8 hours at work but only achieve 2 hours of truly productive output due to scattered focus. DEM participant can achieve 20 hours' worth of high-quality output in the same 8-hour day, by maximizing every moment of their brain's active engagement.
    </p>
  </div>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">What is the DEM Program?</h2>

  <p className="mb-4">
    The <strong>DEM Program</strong> is a revolutionary, personalized initiative designed to empower students to achieve academic brilliance and competitive success in today’s high-pressure world. It blends the timeless wisdom of ancient Vedic knowledge with the latest advancements in neuroscience and AI-driven technology to unleash each student’s true potential.
  </p>

  <p className="mb-4">
    Unlike traditional learning support systems, DEM takes a holistic, data-driven approach, ensuring students not only excel in academics but also develop essential emotional and career-ready skills. Through carefully crafted strategies combining mindfulness techniques, scientific neurofeedback, and AI-powered personalization, it addresses the mental, emotional, and intellectual gaps that often hold students back.
  </p>

  <p className="mb-4">
    This is not just a program — it’s a transformational journey. By merging spiritual depth with scientific precision, DEM provides a structured, evidence-backed roadmap for mastering academic challenges, unlocking hidden talents, and creating a life of purpose and success.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3">Key Challenges Addressed by the DEM Program</h3>

  <ul className="list-disc list-inside space-y-2 mb-6">
    <li><strong>Low Concentration:</strong> DEM increases attention span, reduces distractions, and builds the ability to remain fully engaged with tasks.</li>
    <li><strong>Low Focus:</strong> DEM enhances goal prioritization, helping students direct their efforts towards what truly matters.</li>
    <li><strong>Weak Memory Retention:</strong> DEM improves both short-term and long-term recall, ensuring learned material is retained effectively.</li>
    <li><strong>Anxiety and Fear:</strong> DEM reduces exam stress and fear of failure, replacing them with calm confidence and resilience.</li>
    <li><strong>Information Overload:</strong> DEM simplifies complex study material, making learning more organized and efficient.</li>
    <li><strong>Lack of Personalized Guidance:</strong> DEM delivers tailored strategies that align with each student’s unique learning style and strengths.</li>
    <li><strong>No Career Goal Clarity:</strong> DEM helps students identify their aspirations and create a clear academic-to-professional pathway.</li>
  </ul>

  <h3 className="text-xl font-semibold mb-3">Program Benefits: Turning Obstacles into Strengths</h3>

  <ul className="list-disc list-inside space-y-2">
    <li><strong>Enhanced Concentration:</strong> Strengthens focus for higher productivity and consistent learning.</li>
    <li><strong>Sharpened Focus:</strong> Streamlines task mastery, ensuring progress is steady and purposeful.</li>
    <li><strong>Improved Memory:</strong> Boosts retention, making it easier to recall information when it matters most.</li>
    <li><strong>Reduced Anxiety:</strong> Converts stress into a positive driving force through emotional stability techniques.</li>
    <li><strong>Better Information Management:</strong> Equips students with the ability to organize and use study material effectively.</li>
    <li><strong>Personalized Support:</strong> Adapts guidance to match the student’s unique needs and learning patterns.</li>
    <li><strong>Clear Career Vision:</strong> Builds a well-defined roadmap for academic and professional achievements.</li>
  </ul>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Parental Contribution</h2>
  <h3 className="text-lg font-semibold mb-4 text-gray-700">A Sacred Collaboration</h3>

  <p className="mb-4">
    The <strong>Aitareya Upanishad</strong> offers a profound perspective on human birth, portraying it as a tripartite spiritual process rather than a singular physical event. Contrary to the conventional belief that life begins solely in the mother’s womb, the Upanishad reveals that both father and mother are spiritually and biologically involved. The soul's journey begins in the father, where it is first hosted before being transferred to the mother. This cosmic collaboration highlights the sacred interconnectedness of both parents in the creation of life.
  </p>

  <p className="mb-4">
    This process, far more than a biological act, is a deeply karmic and spiritual phenomenon. It involves the union of three souls: the father, the mother, and the incoming soul. The karmic histories, intentions, and spiritual states of the parents influence the soul’s entry into the material world, making each birth a reflection of divine orchestration and human energy alignment.
  </p>

  <p className="mb-4">
    Scientifically, conception is a miracle of precision. From millions of sperm, only one penetrates the oocyte, passing through protective layers that permit no duplicates. <strong>Nilkanth Kesari</strong> terms this intricate union "<em>Fusi-fission</em>," where the fusion of sperm and egg draws in Encoded Electrical Energy (EEE), the soul itself. If this soul-energy is not attracted, fertilization halts, underscoring the indispensable spiritual element in conception.
  </p>

  <p className="mb-4">
    Crucially, this process depends on a precise spiritual resonance. Kesari explains that successful conception requires a combined total of <strong>100 Soul Frequency Points</strong> from both parents. This fusion of energies forms a spiritual threshold necessary for the soul to incarnate, elevating conception from a biological event to a sacred energetic alignment.
  </p>

  <p>
    In essence, the Upanishadic view, supported by Kesari’s teachings, frames human birth as a divine symphony of energy, karma, and consciousness. Recognizing and honoring this process offers a deeper reverence for life and a path toward generational well-being.
  </p>
      </section>
      <section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Chakra Activation Level</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    The seven chakras are energy centers that influence physical, emotional, and spiritual well-being.
    Balancing them fosters harmony and fulfillment.
  </p>

  <ul className="space-y-4 mb-6">
    <li>
      <strong>i. Muladhara (Root Chakra):</strong> Located at the base of the spine. Governs stability.
      Imbalance causes <em>fear</em> (underactive) or <em>greed</em> (overactive).
    </li>
    <li>
      <strong>ii. Swadhisthana (Sacral Chakra):</strong> Located at the lower abdomen. Rules creativity and emotions.
      Imbalance leads to <em>repression</em> (underactive) or <em>emotional chaos</em> (overactive).
    </li>
    <li>
      <strong>iii. Manipura (Solar Plexus Chakra):</strong> Located at the upper abdomen. Drives confidence.
      Imbalance causes <em>self-doubt</em> (underactive) or <em>arrogance</em> (overactive).
    </li>
    <li>
      <strong>iv. Anahata (Heart Chakra):</strong> Located at the chest center. Nurtures love.
      Imbalance results in <em>isolation</em> (underactive) or <em>clinginess</em> (overactive).
    </li>
    <li>
      <strong>v. Vishuddha (Throat Chakra):</strong> Located at the throat. Manifests truth.
      Imbalance brings <em>shyness</em> (underactive) or <em>verbal dominance</em> (overactive).
    </li>
    <li>
      <strong>vi. Ajna (Third Eye Chakra):</strong> Located at the forehead. Enhances intuition.
      Imbalance clouds judgment (<em>underactive</em>) or fuels <em>delusion</em> (overactive).
    </li>
    <li>
      <strong>vii. Sahasrara (Crown Chakra):</strong> Located at the crown of the head. Connects to divinity.
      Imbalance causes <em>disconnection</em> (underactive) or <em>escapism</em> (overactive).
    </li>
  </ul>

  <p>
    <strong>Meditation</strong>, <strong>yoga</strong>, and <strong>energy healing</strong> align chakras, ensuring optimal energy flow.
    A balanced system cultivates vitality, clarity, and spiritual growth, guiding you toward your highest potential.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Aura Illumination Level</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    Your aura is a luminous energy field reflecting your physical, emotional, mental, and spiritual states.
    Composed of seven layers (koshas), it reveals your well-being and potential.
  </p>

  <ul className="space-y-4 mb-6">
    <li>
      <strong>i. Annamaya Kosha (Physical Body):</strong> Reflects health. Brightness indicates vitality;
      dimness suggests fatigue.
    </li>
    <li>
      <strong>ii. Pranamaya Kosha (Energy Body):</strong> Tied to life force (prana). Vibrant hues denote
      emotional balance; stagnation reveals blockages.
    </li>
    <li>
      <strong>iii. Manomaya Kosha (Mental Body):</strong> Mirrors thoughts. Clarity signals focus;
      muddiness shows negativity.
    </li>
    <li>
      <strong>iv. Vijnanamaya Kosha (Wisdom Body):</strong> Connects intuition. Luminosity reflects insight;
      contraction implies disconnection.
    </li>
    <li>
      <strong>v. Anandamaya Kosha (Bliss Body):</strong> Embodies joy. Radiance signifies inner peace;
      dullness hints at sadness.
    </li>
    <li>
      <strong>vi. Amritamaya Kosha (Nectar Body):</strong> Represents resilience. Golden hues mark spiritual
      growth; weakness suggests depletion.
    </li>
    <li>
      <strong>vii. Shivamaya Kosha (Divine Body):</strong> The outermost layer, radiating unity. Pure white or gold
      light signifies enlightenment.
    </li>
  </ul>

  <p>
    <strong>Harmonizing Your Aura:</strong> Meditation, energy healing, and nature immersion cleanse and balance your
    aura. A harmonized aura fosters vitality, emotional clarity, and spiritual connection, helping you
    radiate your highest self.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">The Positive Karmas</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    In the intricate tapestry of life, a myriad of positive aspects intricately weaves together, forming the fabric
    of personal development, well-being, and harmonious coexistence. These facets, ranging from
    interpersonal skills and relationships to cognitive and analytical prowess, are the threads that contribute
    to the rich tapestry of human experience.
  </p>

  <p className="mb-4">
    As we embark on a journey to explore these dimensions, we find ourselves traversing through realms of personal growth,
    economic collaboration, spiritual enrichment, and sustainable practices. Each category unfolds as a chapter,
    revealing the profound significance of these positive aspects in fostering resilience, connection, and wisdom.
  </p>

  <p className="mb-6">
    Join us as we delve into these seven distinct categories, each encapsulating a unique set of virtues and
    qualities that collectively illuminate the path to a more enlightened and fulfilled existence.
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Interpersonal Skills</h4>
      <p className="text-sm text-gray-700">
        Acceptance, Altruism, Communication, Compassion, Conflict Resolution, Cooperation, Empathy,
        Forgiveness, Gratitude, Kindness, Listening, Relationship Building, Respect, Supportiveness, and Team Building.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Personal Development and Well-being</h4>
      <p className="text-sm text-gray-700">
        Balance, Cognitive Flexibility, Contentment, Endurance, Gracefulness, Health Consciousness, Hygiene,
        Imagination, Inner Peace, Joy, Patience, Perseverance, Reflection, Relaxation, Self-awareness,
        Sleep Quality, Strength, Stress Management, and Wellness.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Cognitive and Analytical Skills</h4>
      <p className="text-sm text-gray-700">
        Analytical Skills, Cognitive Flexibility, Critical Thinking, Innovation, Learning, Logical Reasoning,
        Problem Solving, Research, Strategic Planning, and Time Management.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Economic and Business</h4>
      <p className="text-sm text-gray-700">
        Collaboration, Economic Cooperation, Economic Empowerment, Economic Equality, Economic Growth,
        Fair Compensation, Fair Trade, Financial Responsibility, Investment, Job Creation, Philanthropy,
        Positive Influence, Social Entrepreneurship, and Sustainable Practices.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Spiritual and Emotional Well-being</h4>
      <p className="text-sm text-gray-700">
        Divine Light, Divine Love, Divine Plan, Divine Presence, Eternal, Faith, Grace, Gratitude, Holiness, Joy,
        Mindfulness, Purpose in Life, Reflection, Reverence for Life, Self-Reflection, Surrender, and Unity Consciousness.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Environmental and Sustainable Practices</h4>
      <p className="text-sm text-gray-700">
        Ergonomics, Resource Conservation, and Sustainable Practices.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Wisdom and Truth</h4>
      <p className="text-sm text-gray-700">
        Knowledge, Truth, and Wisdom.
      </p>
    </div>
  </div>
      </section>
      <section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">The Negative Karmas</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    In the intricate tapestry of human behaviour, we navigate through a myriad of aspects that shape our
    individual and collective experiences. The dichotomy between positive and negative elements spans
    across various dimensions of our lives, influencing our actions, relationships, and overall well-being.
  </p>

  <p className="mb-6">
    As we delve into this comprehensive exploration, we uncover the facets that define our journey — from
    the uplifting realms of compassion and cooperation to the challenging territories of aggression and deceit.
    This classification seeks to illuminate the diverse landscape of human behaviour, providing insights into
    both the radiant virtues that foster growth and connection, as well as the shadows that cast obstacles
    on our path to understanding, unity, and collective progress.
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Aggression and Hostility</h4>
      <p className="text-sm text-gray-700">
        Aggressiveness, Bullying, and Violence.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Closed-mindedness and Intolerance</h4>
      <p className="text-sm text-gray-700">
        Closed-mindedness, Dogmatism, Holier-than-Thou Attitude, and Religious Intolerance.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Deception and Manipulation</h4>
      <p className="text-sm text-gray-700">
        Betrayal, Condescension, Deception, Exploitative Guru Dynamics, Exploitative Labor Practices,
        Gossip, and Manipulation.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Economic Injustice</h4>
      <p className="text-sm text-gray-700">
        Corporate Greed, Corruption, Economic Discrimination, Economic Inequality, Economic Instability,
        Exploitation, Exploitation of Resources, Exploitation of Vulnerable Populations, Financial Exploitation,
        Financial Manipulation, Insider Trading, Monopoly, Unethical Business Practices, Unfair Competition,
        Unjust Trade Practices, Tax Avoidance, Tax Evasion.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Negativity and Mental Health</h4>
      <p className="text-sm text-gray-700">
        Depression, Fear, Lack of Compassion, Neglect of Inner Harmony, Sadness, and Stress.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Physical Harm and Wellness</h4>
      <p className="text-sm text-gray-700">
        Addiction, Excessive Consumption, Imprisonment, Obesity, Self-Destruction, Substance Abuse,
        Violence, and Weakness.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Spiritual Disconnect</h4>
      <p className="text-sm text-gray-700">
        Inauthenticity, Lack of Spiritual Growth, Spiritual Arrogance, Spiritual Bypassing, Spiritual Disconnection,
        Spiritual Ego, Spiritual Elitism, Spiritual Materialism, and Spiritual Narcissism.
      </p>
    </div>
  </div>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">The Balanced Karmas</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    In the intricate dance of luck and fortune, the concept of destiny is often regarded as an unalterable path.
    However, a profound shift in perspective emerges when one considers that destiny can indeed be influenced and
    transformed through systematic balanced karmas. These karmas are conscious actions that harmonize our inner and
    outer worlds, actively reshaping our fate through awareness, virtue, and intention.
  </p>

  <p className="mb-6">
    Balanced karmas help us transcend limitations by intentionally addressing the karmic patterns and energetic blocks
    that inhibit progress. This framework explores practical dimensions of positive karmic influence — promoting clarity,
    transformation, and alignment with one's highest potential.
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Removing Curses</h4>
      <p className="text-sm text-gray-700">
        Break the chains of negative influences by proactively neutralizing real or perceived curses that cast a shadow
        on one's destiny. This may include rituals, forgiveness, ancestral healing, or energetic cleansing.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Enhancing Blessings</h4>
      <p className="text-sm text-gray-700">
        Initiate a positive energy exchange by seeking heartfelt blessings from parents, elders, women, animals, plants,
        and one’s spouse. These blessings act as catalysts for transformation and divine support.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Negativity of Dwelling Place</h4>
      <p className="text-sm text-gray-700">
        Transform the energy of one’s home by making intentional changes. Incorporate symbols, objects, and practices
        that radiate positivity while eliminating sources of toxicity, clutter, or stagnation.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Negative Influencers</h4>
      <p className="text-sm text-gray-700">
        Distance yourself from people, places, and substances that carry or spread negativity. Surround yourself with
        uplifting influences, cultivate supportive environments, and consciously avoid toxic habits.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Virtues</h4>
      <p className="text-sm text-gray-700">
        Live by seven foundational virtues — such as honesty, kindness, integrity, humility, patience, generosity,
        and perseverance. These virtues serve as a moral compass and spiritual foundation for karmic balance.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Positive Affirmations and Visualization</h4>
      <p className="text-sm text-gray-700">
        Rewire thought patterns and energetic frequency by incorporating daily affirmations and creative visualization.
        Focus the mind on a more favorable future and align internal belief with external reality.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Karmic Corrections</h4>
      <p className="text-sm text-gray-700">
        Acknowledge and correct past actions that have created negative karmic imprints. Make amends, offer service,
        and take conscious steps toward atonement and renewal to pivot the course of destiny.
      </p>
    </div>
  </div>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Unlocking Innate Potential</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    In today's rapidly evolving world, the journey of nurturing a child to their fullest potential can feel like
    navigating a complex maze. Parents often seek clarity on their child’s strengths, learning styles, and most
    promising future paths. Many remain unaware that a profound transformation can stem from assessing their
    child's innate abilities—the core of who they are.
  </p>

  <p className="mb-4">
    The <strong>Dolphin EdTech Miracles (DEM)</strong> Scan Report is a groundbreaking EdTech tool created to illuminate
    this hidden potential. Unlike standard academic tests, it offers a deeply personalized blueprint of a child's
    natural capabilities, empowering informed decision-making and individualized growth.
  </p>

  <p className="mb-4">
    Built on the philosophy that every child is born with unique gifts waiting to be discovered, the DEM Report
    aligns talents with life goals. It maps natural strengths across emotional, physical, intellectual, and spiritual
    dimensions—going far beyond conventional metrics.
  </p>

  <p className="mb-4">
    What makes DEM revolutionary is its <strong>hybrid methodology</strong>: a powerful algorithm that fuses time-tested
    <em>astrological wisdom</em> with modern sciences like <em>cognitive psychology</em>, <em>personality theory</em>, and
    <em>career guidance</em>. The process involves:
  </p>

  <ul className="list-disc ml-6 mb-4 text-sm text-gray-700">
    <li>Precise birth data (date, time, place) for astrological mapping</li>
    <li>A comprehensive questionnaire assessing personality and preferences</li>
    <li>A sophisticated AI-powered algorithm to interpret multidimensional data</li>
  </ul>

  <p className="mb-6">
    The result is a personalized MMM Scan Report that helps parents:
  </p>

  <ul className="list-decimal ml-6 mb-6 text-sm text-gray-700">
    <li><strong>Identify innate talents:</strong> Pinpoint gifts that might remain hidden in traditional systems.</li>
    <li><strong>Guide educational choices:</strong> Select subjects and methods aligned with learning style.</li>
    <li><strong>Facilitate career exploration:</strong> Explore career domains where the child is most likely to succeed.</li>
    <li><strong>Foster holistic development:</strong> Understand emotional and spiritual traits to support balanced growth.</li>
  </ul>

  <p className="mb-6">
    In a world pressuring conformity, the DEM Scan Report is a beacon of individuality. More than a report, it's an
    invitation to self-discovery—helping families sculpt a future based on <strong>authentic potential, confidence, and purpose</strong>.
  </p>

  <hr className="my-8 border-gray-300" />

  <h2 className="text-2xl font-bold mb-4">Innate Physical Abilities</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">The Cornerstone of Vitality</h3>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Strength:</strong> Physical power enables daily tasks and athletic performance. Inner strength supports mental grit to turn challenges into growth.
    </div>
    <div>
      <strong>2. Resistance:</strong> Strong immunity and quick recovery foster wellness. High stress tolerance prevents burnout.
    </div>
    <div>
      <strong>3. Speed:</strong> Physical agility supports emergencies and sports. Mentally, it enables rapid decisions under pressure.
    </div>
    <div>
      <strong>4. Flexibility:</strong> Joint and muscle elasticity prevent injuries. Mentally, it encourages openness to change and reduces stress.
    </div>
    <div>
      <strong>5. Agility:</strong> Enhances coordination and spatial awareness for efficient navigation of dynamic environments.
    </div>
    <div>
      <strong>6. Coordination:</strong> Fine and gross motor skills improve accuracy and rhythm in physical tasks and sports.
    </div>
    <div>
      <strong>7. Balance:</strong> Supports physical posture and stability. Emotionally, it nurtures clarity and composure.
    </div>
  </div>

  <p className="mt-6">
    <strong>Holistic Impact:</strong> Cultivating these physical traits builds resilience, reduces injuries, and improves cognitive performance.
    Strength, flexibility, coordination, and balance form a robust foundation for adaptability, longevity, and thriving
    in high-demand environments.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Innate Mental Abilities</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4 font-semibold">Key Pillars of Cognitive Excellence</p>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Perceptual Skills:</strong>  
      Sensory Interpretation to decode visual, auditory, and tactile stimuli (e.g., reading body language, recognizing patterns).  
      Spatial Awareness enables effective navigation of environments and distance assessment, important for driving or sports.
    </div>
    <div>
      <strong>2. Memory Retention:</strong>  
      Short-Term Recall holds immediate information (e.g., phone numbers) for quick tasks, while Long-Term Storage preserves knowledge and experiences aiding learning and decision-making.
    </div>
    <div>
      <strong>3. Selective Attention:</strong>  
      Focus Management filters distractions to prioritize critical tasks (e.g., studying in noisy settings).  
      Multitasking Efficiency balances competing demands without sacrificing accuracy.
    </div>
    <div>
      <strong>4. Logical Reasoning:</strong>  
      Structured Analysis breaks complex data into coherent steps (e.g., solving equations).  
      Cause-Effect Evaluation predicts outcomes by linking actions to consequences.
    </div>
    <div>
      <strong>5. Creativity:</strong>  
      Divergent Thinking generates novel ideas (e.g., artistic expression, innovative solutions).  
      Adaptive Imagination recombines existing concepts into fresh perspectives.
    </div>
    <div>
      <strong>6. Problem-Solving:</strong>  
      Strategic Planning identifies root causes and creates actionable steps to overcome obstacles.  
      Resource Optimization efficiently uses available tools to achieve goals.
    </div>
    <div>
      <strong>7. Critical Thinking:</strong>  
      Objective Evaluation assesses arguments for validity, biases, and evidence.  
      Informed Decision-Making weighs risks and benefits to make balanced choices.
    </div>
  </div>

  <p className="mt-6">
    <strong>Synergy & Impact:</strong>  
    These abilities form the foundation of human cognition. Perceptual skills and memory build understanding of the world, selective attention sharpens focus, and logical reasoning with critical thinking enables rational analysis. Creativity fuels innovation, while problem-solving integrates these skills to tackle real-world challenges effectively.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Innate Emotional Abilities</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    There are seven different aspects of the foundations of emotional intelligence in human life described as follows:
  </p>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Emotional Awareness:</strong> Recognize and label personal emotions in real-time, understanding their triggers and impact on behavior.
    </div>
    <div>
      <strong>2. Emotional Empathy:</strong> Intuitively sense others’ feelings, fostering compassion and deepening interpersonal connections.
    </div>
    <div>
      <strong>3. Emotional Regulation:</strong> Manage intense emotions (anger, anxiety) through mindfulness or reframing, preventing impulsive reactions.
    </div>
    <div>
      <strong>4. Emotional Social Skills:</strong> Navigate social dynamics effectively to communicate empathetically, resolve conflicts, and build trust.
    </div>
    <div>
      <strong>5. Emotional Resilience:</strong> Recover from setbacks, using adversity as fuel for growth rather than succumbing to negativity.
    </div>
    <div>
      <strong>6. Self-Reflection:</strong> Analyze emotional patterns and experiences to gain insights, fostering self-improvement and maturity.
    </div>
    <div>
      <strong>7. Emotional Expression:</strong> Articulate feelings authentically and constructively, balancing honesty with sensitivity to others.
    </div>
  </div>

  <p className="mt-6">
    <strong>Holistic Impact:</strong> These innate abilities form the core of emotional intelligence. Awareness and empathy create self- and social clarity, while regulation and resilience stabilize mental well-being. Social skills and expression strengthen relationships, and self-reflection drives continuous growth. Together, they empower individuals to navigate life’s emotional complexities with grace, build meaningful connections, and maintain mental equilibrium amid challenges. Cultivating these traits enhances personal fulfillment, professional success, and collective harmony.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Innate Cognitive Abilities</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    There are seven pillars of cognitive mastery described as below:
  </p>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Word Knowledge:</strong> Command of vocabulary and language nuances, enabling precise communication and comprehension of complex texts.
    </div>
    <div>
      <strong>2. Verbal Reasoning:</strong> Analyze and interpret written or spoken ideas, identify logical relationships, and draw conclusions from language-based information.
    </div>
    <div>
      <strong>3. Numerical Aptitude:</strong> Grasp mathematical concepts, perform calculations, and apply quantitative logic to solve problems efficiently.
    </div>
    <div>
      <strong>4. Spatial Intelligence:</strong> Visualize and manipulate 2D/3D objects mentally, crucial for fields like architecture, engineering, or navigation.
    </div>
    <div>
      <strong>5. Inductive Reasoning:</strong> Derive general principles from specific observations, predicting trends or solving novel problems through pattern extrapolation.
    </div>
    <div>
      <strong>6. Analytical Thinking:</strong> Deconstruct complex systems into components, evaluate interactions, and synthesize information to form coherent solutions.
    </div>
    <div>
      <strong>7. Pattern Recognition:</strong> Detect recurring sequences or relationships in data, nature, or behavior, aiding prediction and innovation.
    </div>
  </div>

  <p className="mt-6">
    <strong>Synergy & Impact:</strong> These seven abilities form the backbone of intellectual agility. Word knowledge and verbal reasoning underpin effective communication, while numerical aptitude and spatial intelligence drive technical proficiency. Inductive reasoning and pattern recognition fuel creativity and adaptability, complemented by analytical thinking for structured problem-solving. Together, they enhance learning efficiency, decision-making, and innovation across disciplines from science to art.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Innate Spiritual Abilities</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    There exist seven important pathways for Inner Harmony, which are explained below:
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Intuition</h4>
      <p className="text-sm text-gray-700">
        Innate inner guidance system that transcends logic, offering clarity in uncertainty and aligning decisions with deeper truths.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Connection to Higher Self</h4>
      <p className="text-sm text-gray-700">
        Ability to tap into one’s authentic essence, fostering alignment with purpose, wisdom, and universal consciousness.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Empathy and Compassion</h4>
      <p className="text-sm text-gray-700">
        Intuitive resonance with others’ emotions, coupled with a drive to alleviate suffering and nurture collective well-being.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Presence and Mindfulness</h4>
      <p className="text-sm text-gray-700">
        Capacity to anchor awareness in the present moment, dissolving distractions and fostering inner calm.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Spiritual Perception</h4>
      <p className="text-sm text-gray-700">
        Sensitivity to subtle energies, synchronicities, and interconnectedness, revealing life’s sacred dimensions.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Faith and Trust</h4>
      <p className="text-sm text-gray-700">
        Unwavering belief in life’s unfolding, surrendering control to embrace uncertainty and divine timing.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Self-Reflection and Growth</h4>
      <p className="text-sm text-gray-700">
        Commitment to introspection, learning from experiences, and evolving spiritually through challenges.
      </p>
    </div>
  </div>

  <p className="mt-8 text-gray-800">
    <strong>Synergy & Impact:</strong> These abilities cultivate spiritual alignment and resilience. Intuition and connection to the higher self anchor authenticity, while empathy and presence deepen relationships with oneself and others. Spiritual perception and faith dissolve fear, revealing life’s sacred tapestry. Self-reflection ensures continual evolution. Together, they foster inner peace, purpose, and unity with the cosmos. Nurturing these traits awakens consciousness, transforms adversity into wisdom, and empowers individuals to live with grace, compassion, and profound connection to the universal flow.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Understanding the OCEAN Personality Factors</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    The OCEAN model, also known as the Big Five personality traits, is a widely accepted framework for understanding human personality. It categorizes personality into five core dimensions: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Each dimension provides insight into how individuals think, behave, and interact with the world, offering a comprehensive lens to assess personality, particularly in contexts like education, where understanding a student’s traits can guide personalized learning and development.
  </p>

  <div className="space-y-4 text-sm text-gray-700 mb-6">
    <div>
      <strong>1. Openness to Experience:</strong> Reflects curiosity, creativity, and openness to new ideas. Students high in this trait exhibit imaginative thinking, generate innovative ideas, appreciate beauty and diverse cultural expressions, and pursue knowledge independently with precision and detail. For example, they might excel in creative projects or subjects requiring abstract thinking like literature or philosophy.
    </div>
    <div>
      <strong>2. Conscientiousness:</strong> Characterized by organization, responsibility, and a goal-oriented mindset. Such students are diligent, disciplined, and reliable, planning meticulously and maintaining order. Their self-discipline helps focus on long-term goals despite distractions, making them dependable and excellent in structured academic settings.
    </div>
    <div>
      <strong>3. Extraversion:</strong> Captures sociability, energy, and preference for external stimulation. Extroverted students thrive in social settings, confidently express ideas, and energize peers. They enjoy group activities, debates, and presentations, showing enthusiasm and leadership.
    </div>
    <div>
      <strong>4. Agreeableness:</strong> Highlights compassion, cooperation, and focus on harmonious relationships. These students demonstrate empathy, teamwork, honest communication, and kindness, contributing to a supportive classroom culture.
    </div>
    <div>
      <strong>5. Neuroticism:</strong> Measures emotional sensitivity and tendency to experience negative emotions. High neuroticism can involve mood swings, anxiety, or frustration under pressure but also indicates emotional depth. With support, these students can turn sensitivity into resilience and empathy.
    </div>
  </div>

  <p className="mb-6">
    Understanding the OCEAN factors equips educators and parents to tailor support to a student’s unique personality, fostering academic success and personal growth. By recognizing these traits, we can create environments where every student thrives.
  </p>

  <hr className="my-8 border-gray-300" />

  <h2 className="text-2xl font-bold mb-4">Openness to Experience</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">The Seven Dimensions of Exploratory Living</p>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Dreaming:</strong> Harnessing vivid imagination to envision possibilities, fueling creativity and innovative problem-solving.
    </div>
    <div>
      <strong>2. Appreciation:</strong> Sensitivity to beauty in art, nature, and culture, enriching life through aesthetic depth and wonder.
    </div>
    <div>
      <strong>3. Introspection:</strong> Delving into inner thoughts and emotions to gain self-awareness and refine personal values.
    </div>
    <div>
      <strong>4. Eclecticism:</strong> Embracing diverse ideas, cultures, and experiences, rejecting rigid conventions for holistic understanding.
    </div>
    <div>
      <strong>5. Inquisitiveness:</strong> Relentless curiosity driving exploration of the unknown, seeking knowledge and intellectual expansion.
    </div>
    <div>
      <strong>6. Autonomy:</strong> Valuing independent thought and self-directed exploration, resisting conformity to foster originality.
    </div>
    <div>
      <strong>7. Precision:</strong> Pursuing clarity and accuracy in ideas, balancing creativity with meticulous attention to detail.
    </div>
  </div>

  <p className="mt-6">
    <strong>Synergy & Impact:</strong> These dimensions define openness to experience as a gateway to growth. Dreaming and eclecticism spark innovation, while appreciation and introspection deepen emotional and intellectual richness. Inquisitiveness and autonomy fuel lifelong learning, and precision ensures ideas are both bold and grounded. Together, they cultivate adaptability, tolerance for ambiguity, and a zest for discovery. By nurturing these traits, individuals thrive in dynamic environments, bridge disparate perspectives, and transform novel concepts into meaningful contributions.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Conscientiousness</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    The Seven Pillars of Purposeful Excellence
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Organization</h4>
      <p className="text-sm text-gray-700">
        Structuring tasks, time, and environments systematically to enhance efficiency and reduce chaos.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Responsibility</h4>
      <p className="text-sm text-gray-700">
        Owning commitments and obligations, ensuring accountability in personal and professional roles.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Self-Discipline</h4>
      <p className="text-sm text-gray-700">
        Maintaining focus and resisting distractions to prioritize long-term goals over short-term impulses.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Achievement</h4>
      <p className="text-sm text-gray-700">
        Setting high standards, striving for excellence, and deriving satisfaction from meaningful accomplishments.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Planned</h4>
      <p className="text-sm text-gray-700">
        Approaching tasks with foresight, creating actionable strategies to meet deadlines and objectives.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Reliability</h4>
      <p className="text-sm text-gray-700">
        Consistently delivering on promises, building trust through dependability in relationships and workflows.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Neatness</h4>
      <p className="text-sm text-gray-700">
        Valuing order and precision in physical and mental spaces to promote clarity and reduce errors.
      </p>
    </div>
  </div>

  <p className="mt-8 text-gray-800">
    <strong>Synergy & Impact:</strong> These traits form the bedrock of conscientiousness, blending discipline with intentionality. Organization and planning lay the groundwork for success, while responsibility and reliability cement integrity. Self-discipline fuels persistence, achievement drives ambition, and neatness ensures meticulous execution. Together, they foster productivity, credibility, and resilience, enabling individuals to navigate complexity with calm competence. Conscientiousness transforms aspirations into tangible results, builds enduring trust, and cultivates a reputation for excellence in both personal growth and collaborative endeavors.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Extraversion</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4 font-semibold">The Seven Facets of Dynamic Engagement</p>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>Sociability:</strong> Thrive in social settings, forging connections through effortless interaction and group participation.
    </div>
    <div>
      <strong>Assertiveness:</strong> Confidently voice opinions, take initiative, and lead conversations or decisions with self-assuredness.
    </div>
    <div>
      <strong>Talkativeness:</strong> Enjoy lively verbal exchanges, sharing ideas and stories to energize interactions.
    </div>
    <div>
      <strong>Energy:</strong> Radiate enthusiasm and vigor, invigorating environments with a contagious, dynamic presence.
    </div>
    <div>
      <strong>Adventurousness:</strong> Crave novelty and excitement, embracing risks and new experiences with bold curiosity.
    </div>
    <div>
      <strong>Gregariousness:</strong> Seek and savor group activities, drawing energy from collaborative, communal atmospheres.
    </div>
    <div>
      <strong>Positive Emotion:</strong> Express optimism, joy, and warmth, uplifting others through an infectious, cheerful outlook.
    </div>
  </div>

  <p className="mt-6">
    <strong>Synergy & Impact:</strong> These traits define extraversion as a force of outward vitality. Sociability and gregariousness foster rich networks, while assertiveness and talkativeness amplify influence. Energy and adventurousness drive exploration, and positive emotion creates magnetic, uplifting spaces. Together, they enhance leadership, social fluency, and adaptability, making extraverts catalysts for collaboration and innovation. By channeling these strengths, individuals thrive in roles requiring engagement, inspire collective momentum, and transform challenges into opportunities for connection.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Agreeableness</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    The Seven Pillars of Harmonious Connection
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Empathy</h4>
      <p className="text-sm text-gray-700">
        Intuitively sense and share others’ emotions, fostering deep understanding and emotional support.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Altruism</h4>
      <p className="text-sm text-gray-700">
        Prioritize others’ needs through selfless acts, driven by genuine concern for their well-being.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Cooperation</h4>
      <p className="text-sm text-gray-700">
        Collaborate seamlessly, valuing teamwork over competition to achieve shared goals.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Frankness</h4>
      <p className="text-sm text-gray-700">
        Communicate honestly and transparently, balancing truthfulness with tact to build trust.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Modesty</h4>
      <p className="text-sm text-gray-700">
        Approach interactions with humility, avoiding arrogance to create egalitarian relationships.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Tenderness</h4>
      <p className="text-sm text-gray-700">
        Express warmth and gentleness, nurturing connections through compassionate words and actions.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Patience</h4>
      <p className="text-sm text-gray-700">
        Navigate conflicts or delays calmly, offering others grace and space to grow.
      </p>
    </div>
  </div>

  <p className="mt-8 text-gray-800">
    <strong>Synergy & Impact:</strong> These traits define agreeableness as a cornerstone of social harmony. Empathy and tenderness cultivate emotional bonds, while altruism and cooperation strengthen communal ties. Frankness and modesty ensure authenticity without ego, and patience provides stability in adversity. Together, they foster environments of trust, reduce friction in relationships, and promote collective resilience. Agreeable individuals act as peacemakers, bridging divides with kindness and fairness. By embodying these qualities, they inspire mutual respect, diffuse tensions, and create spaces where collaboration thrives.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Neuroticism</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <div className="space-y-4 text-sm text-gray-700">
    <div>
      <strong>1. Moodiness:</strong> Frequent emotional fluctuations, often triggered by minor stressors, leading to unpredictable shifts in demeanor.
    </div>
    <div>
      <strong>2. Anxiety:</strong> Persistent worry about potential threats, fueling overthinking and physical tension.
    </div>
    <div>
      <strong>3. Fear:</strong> Heightened sensitivity to perceived dangers, triggering avoidance or hypervigilance.
    </div>
    <div>
      <strong>4. Anger:</strong> Intense irritability or hostility in response to frustrations or perceived slights.
    </div>
    <div>
      <strong>5. Frustration:</strong> Low tolerance for obstacles, resulting in agitation when goals are delayed or blocked.
    </div>
    <div>
      <strong>6. Envy:</strong> Resentment toward others’ achievements, breeding self-doubt and social comparison.
    </div>
    <div>
      <strong>7. Loneliness:</strong> Feelings of isolation even in company, rooted in perceived disconnection from others.
    </div>
  </div>

  <p className="mt-6">
    <strong>Synergy & Impact:</strong> These traits amplify emotional turbulence, creating cycles of distress. Moodiness and anxiety erode stability, while fear and anger strain relationships. Frustration and envy distort self-worth, and loneliness deepens emotional voids. Yet, awareness of these patterns can inspire growth—practicing mindfulness, seeking support, and reframing thoughts can mitigate their grip. Neuroticism isn’t a life sentence; it’s a call to cultivate resilience, transforming sensitivity into self-compassion and emotional wisdom.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Nurturing Intelligences for Student’s Success</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    The theory of multiple intelligences, developed by Howard Gardner, recognizes diverse cognitive strengths that shape how students learn and excel. The Dolphin EdTech Miracles leverages these intelligences of verbal-linguistic, mathematical, visual, interpersonal, intrapersonal, bodily, musical, naturalistic, and existential so as to empower students for success in academics and beyond. By integrating Vedic wisdom with modern cognitive science, the program cultivates these intelligences to unlock each student’s unique potential.
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-3">
    <li>
      <strong>Verbal-Linguistic Intelligence:</strong> Reflects mastery of language. Students with strong verbose and articulate skills express ideas fluently, while erudite and persuasive abilities enable compelling communication. Fluent and argumentative traits shine in debates, and imaginative language fosters creative storytelling. These skills prepare students for careers in journalism, law, or public speaking, where clear and persuasive communication is key.
    </li>
    <li>
      <strong>Mathematical Intelligence:</strong> Drives success in analytical fields. Discerning and analytical skills help students identify patterns and break down complex problems. Innovative and conceptual thinking leads to creative solutions, while quantitative and methodical approaches ensure precision in data-driven tasks. Insightful problem-solving is vital for careers like engineering or data science, where logical reasoning is paramount.
    </li>
    <li>
      <strong>Visual Intelligence:</strong> Enhances spatial and artistic abilities. Navigational and spatially aware skills aid in understanding maps or layouts, while imaginative and innovative visualization fuels creative design. Perceptive and aesthetic sensitivities create harmony in art, and mnemonic visual cues boost memory. These traits are essential for architects, graphic designers, or animators, who rely on visual creativity.
    </li>
    <li>
      <strong>Interpersonal Intelligence:</strong> Fosters social acumen. Empathetic and considerate students build strong relationships, while communicative and persuasive skills enhance collaboration. Diplomatic and team-oriented traits navigate group dynamics, and influential abilities inspire leadership. These qualities prepare students for roles in management, counseling, or public relations, where social effectiveness is critical.
    </li>
    <li>
      <strong>Intrapersonal Intelligence:</strong> Drives self-awareness and resilience. Introspective and reflective students understand their emotions, while motivated and goal-oriented traits fuel personal growth. Resilient and regulated behaviors ensure emotional stability, and flexible thinking adapts to change. These skills support success in any field by fostering self-discipline and inner drive.
    </li>
    <li>
      <strong>Bodily Intelligence:</strong> Excels in physical precision. Accurate and dexterous movements shine in sports or crafts, while aware and spatially aware skills enhance coordination. Communicative body language and athletic prowess are vital for dancers, athletes, or surgeons, where physical competence is key.
    </li>
    <li>
      <strong>Musical Intelligence:</strong> Thrives in rhythm and melody. Acoustic and rhythmic sensitivities create harmonious compositions, while melodic and musical aptitudes excel in performance. Emotional and theoretical skills deepen musical expression, preparing students for careers as composers or performers.
    </li>
    <li>
      <strong>Naturalistic Intelligence:</strong> Connects students to the environment. Observational and classification skills identify natural patterns, while ecological and environmental awareness promotes sustainability. A deep connection to flora and fauna fuels conservation efforts, ideal for careers in environmental science or agriculture.
    </li>
    <li>
      <strong>Existential Intelligence:</strong> Explores life’s deeper questions. Contemplative and pondering traits seek meaning, while tolerance and spiritual insights embrace diverse beliefs. Wisdom from reflection prepares students for philosophy or spiritual leadership, fostering a profound understanding of existence.
    </li>
  </ol>

  <p className="mb-6">
    By nurturing these intelligences, the SMM program equips students to excel in diverse fields, transforming their unique strengths into lifelong success.
  </p>

  <h2 className="text-2xl font-bold mb-4">Verbal Linguistic Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    Mastery Through Language<br />
    Linguistic intelligence, a cornerstone of human cognition, thrives on seven dynamic facets that transform words into vessels of meaning, power, and artistry.
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-3">
    <li><strong>Verbose:</strong> Often misjudged as mere excess, verbosity becomes a strength when wielded intentionally. It enriches narratives with vivid detail, embedding layers of context and emotion, though its true art lies in balancing abundance with precision.</li>
    <li><strong>Articulate:</strong> The bedrock of clarity, articulation distills complex ideas into lucid expressions. It bridges understanding across diverse audiences, ensuring thoughts resonate with coherence and purpose.</li>
    <li><strong>Erudite:</strong> Rooted in deep knowledge, erudition elevates language with scholarly nuance. It weaves historical, cultural, or technical references into discourse, inviting listeners into a realm of intellectual depth.</li>
    <li><strong>Fluent:</strong> Fluency is the rhythm of language as effortless, melodic, and adaptive. It enables seamless transitions between ideas, dialects, or registers, embodying linguistic agility.</li>
    <li><strong>Persuasive:</strong> Persuasion is language’s alchemy, blending logic and emotion to shift perspectives. It employs rhetorical devices like ethos, pathos, logos etc. to craft compelling appeals that linger in the mind.</li>
    <li><strong>Argumentative:</strong> Beyond confrontation, argumentative prowess structures reason into compelling frameworks. It defends ideas with rigor, using evidence and logic to challenge assumptions and spark critical dialogue.</li>
    <li><strong>Imaginative:</strong> The soul of linguistic creativity, imagination bends language into metaphors, stories, and analogies. It conjures worlds unseen, transforming abstract thought into tangible wonder.</li>
  </ol>

  <p className="mb-6">
    Together, these pillars forge a mosaic of eloquence. Linguistic intelligence is not mere communication, but it is the art of shaping reality through words, blending erudition with empathy, logic with lyricism, to inspire, provoke, and illuminate.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Mathematical Logical Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    <strong>Architecting Reason</strong><br />
    Logical intelligence, the engine of structured thought, thrives on seven interconnected principles that transform raw data into profound understanding and innovation.
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-3">
    <li><strong>Discerning:</strong> The keystone of logic, discernment separates signal from noise. It evaluates arguments with precision, identifying fallacies and truths with surgical clarity, ensuring decisions rest on robust foundations.</li>
    <li><strong>Innovative:</strong> Logical intelligence is not rigid, as it reimagines frameworks. Innovation here thrives in problem-solving, devising novel systems or algorithms that transcend conventional paradigms while adhering to rational principles.</li>
    <li><strong>Conceptual:</strong> This facet grasps abstract patterns, weaving threads of theory into cohesive models. It navigates metaphysics, mathematics, or philosophy, distilling complexity into universal principles.</li>
    <li><strong>Insightful:</strong> Insight pierces beyond surface data, uncovering hidden relationships. It detects causality in chaos, revealing how variables interlock and like decoding the DNA of a problem.</li>
    <li><strong>Quantitative:</strong> Numbers become narratives. Quantitative rigor translates ambiguity into measurable metrics, whether calculating probabilities, modeling trends, or optimizing resources through statistical mastery.</li>
    <li><strong>Methodical:</strong> Structure is sacred. Methodical thinking designs stepwise processes for experiments, workflows, proofs etc. that ensure reproducibility and minimize error, turning chaos into order.</li>
    <li><strong>Analytic:</strong> The scalpel of logic, analysis dissects systems into elemental parts. It deconstructs hypotheses, datasets, scrutinizing each component to validate or refute whole systems.</li>
  </ol>

  <p>
    Together, these dimensions forge a symphony of reason. Logical intelligence is more than calculations. It is the art of sculpting clarity from ambiguity, merging rigor with creativity to decode the universe’s deepest puzzles.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Spatial Visual Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    <strong>Crafting Reality Through Sight</strong><br />
    Visual intelligence, the art of interpreting and shaping the visible world, is a tapestry woven from seven transformative qualities:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-3">
    <li><strong>Navigational:</strong> The compass of spatial mastery, navigating 3D spaces with instinctive precision. It maps terrains, real or imagined, guiding journeys through cities, canvases, or constellations.</li>
    <li><strong>Imaginative:</strong> The architect of mental imagery, constructing vivid inner worlds. It dreams beyond the seen, blending colors, shapes, and patterns into surreal landscapes or revolutionary designs.</li>
    <li><strong>Perceptive:</strong> The lens of detail, detecting subtle shifts in light, texture, and form. It reads unspoken narratives in a flicker of shadow or a curve’s intention.</li>
    <li><strong>Innovative:</strong> The rebel of visual logic, redefining boundaries. It reimagines tools from AI-generated art to biomimetic structures to solve problems through radical visual synthesis.</li>
    <li><strong>Dynamic:</strong> The choreographer of motion, capturing fluidity in stillness. It deciphers movement in dance, film, or physics, predicting trajectories in a split second.</li>
    <li><strong>Aesthetic:</strong> The curator of beauty, balancing harmony and disruption. It judges proportion, contrast, and symbolism, whether sculpting a statue or styling a street.</li>
    <li><strong>Mnemonic:</strong> The keeper of visual memory, encoding experiences into mental galleries. It anchors knowledge through symbols, diagrams, or vivid mental “snapshots” that endure.</li>
  </ol>

  <p>
    Together, these facets transcend mere observation, and they empower us to manipulate, invent, and communicate through the universal language of vision. Visual intelligence is not passive; it is the act of sculpting reality with light and line.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Interpersonal Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-4">
    <strong>The Art of Meaningful Connection</strong><br />
    Interpersonal intelligence represents our ability to understand, communicate with, and relate to others effectively. This crucial skillset combines emotional awareness with practical social abilities to build strong relationships.
  </p>

  <h4 className="font-semibold mb-2">Core Components:</h4>
  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Emotional Insight</strong> - Reading others' feelings and responding appropriately</li>
    <li><strong>Verbal Fluency</strong> - Expressing ideas clearly and listening actively</li>
    <li><strong>Conflict Navigation</strong> - Resolving disagreements with empathy and fairness</li>
    <li><strong>Collaborative Spirit</strong> - Valuing teamwork and diverse perspectives</li>
    <li><strong>Social Awareness</strong> - Adapting behavior to different contexts and cultures</li>
    <li><strong>Influence & Leadership</strong> - Inspiring and motivating groups effectively</li>
    <li><strong>Relationship Building</strong> - Creating trust and maintaining meaningful bonds</li>
  </ol>

  <h4 className="font-semibold mb-2">Why It Matters:</h4>
  <p>
    In our interconnected world, interpersonal intelligence determines both personal happiness and professional success. It enables us to: Form deeper personal connections, Work productively in teams, Navigate social complexities, Lead with emotional intelligence, Resolve conflicts constructively.
  </p>
  <p className="mt-4">
    This intelligence transforms routine interactions into opportunities for mutual growth. Whether in friendships, family dynamics, or workplace relationships, strong interpersonal skills create harmony and open doors to new possibilities. By developing these abilities, we enhance our capacity to connect authentically in all areas of life.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Emotional (Intra-personal) Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Art of Self-Mastery</strong><br />
    Intrapersonal intelligence, the keystone of inner harmony, thrives on seven interdependent qualities that transform self-awareness into purposeful action:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Introspective</strong>: The mirror of the soul, introspection dissects thoughts, emotions, and motives with unflinching honesty. It asks, “Why do I react this way?” to illuminate hidden drivers.</li>
    <li><strong>Resilient</strong>: The mountain in the storm, resilience absorbs setbacks without crumbling. It converts failure into wisdom, anchoring self-worth in adaptability rather than perfection.</li>
    <li><strong>Goal-Oriented</strong>: The compass of ambition, this trait maps personal aspirations into actionable steps. It balances pragmatism and passion, ensuring daily choices align with long-term purpose.</li>
    <li><strong>Reflective</strong>: The scholar of experience, reflection mines past actions for lessons. It asks, “What did this teach me?” to refine future decisions and nurture growth.</li>
    <li><strong>Motivated</strong>: The inner fire, motivation thrives on intrinsic purpose and not external validation. It fuels discipline, turning “should” into “must” with unwavering focus.</li>
    <li><strong>Regulated</strong>: The conductor of impulses, self-regulation masters emotional tides. It pauses reactivity, channeling stress, desire, or anger into measured responses.</li>
    <li><strong>Flexible</strong>: The willow in the wind, flexibility adapts beliefs and plans to new truths. It embraces change without losing core values, merging stability with evolution.</li>
  </ol>

  <p>
    Together, these pillars forge a fortress of self-knowledge. Intrapersonal intelligence is not mere self-help, but it is the disciplined art of aligning mind, heart, and action to craft a life of authenticity and grit.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Bodily Kinesthetic Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Seven Pillars of Physical Mastery</strong><br />
    Bodily intelligence, the adept use of one’s physical form, integrates seven key elements crucial for daily life and specialized fields.
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Accurate</strong>: Precision in movement, vital for tasks like surgery or archery, ensures efficiency and minimizes errors.</li>
    <li><strong>Aware</strong>: Mindfulness of posture, breath, and bodily sensations fosters mind-body connection, enhancing balance and reflexes.</li>
    <li><strong>Communicative</strong>: Non-verbal cues like gestures, eye contact, and expressions convey emotions, building trust and empathy.</li>
    <li><strong>Competent</strong>: Mastery through practice, whether in playing an instrument or sports, reflects disciplined skill development.</li>
    <li><strong>Spatially Aware</strong>: Navigating environments smoothly, avoiding obstacles, and coordinating movements rely on spatial perception.</li>
    <li><strong>Dexterity</strong>: Agile hand-eye coordination enables delicate tasks, from crafting art to typing swiftly.</li>
    <li><strong>Athletic</strong>: Strength, stamina, and flexibility underpin physical resilience, supporting endurance in labor or athletics.</li>
  </ol>

  <p>
    Together, these facets empower individuals to interact effectively with their world, excelling in professions, hobbies, and everyday challenges. Cultivating bodily intelligence enhances not only performance but also confidence, health, and holistic well-being.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Musical Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Seven Elements of Sonic Mastery</strong><br />
    Musical intelligence, the capacity to perceive, create, and interpret sound artfully, thrives on seven interconnected pillars:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Acoustic</strong>: Sensitivity to sound properties like pitch, timbre, and resonance enhance the ability to discern nuances in instruments or environments.</li>
    <li><strong>Rhythmic</strong>: Mastery of tempo, beat, and syncopation allows seamless coordination in performance, dance, or composition.</li>
    <li><strong>Melodic</strong>: Crafting and recognizing tuneful sequences forms the heart of memorable music, bridging cultural and emotional divides.</li>
    <li><strong>Musical</strong>: Overall artistry of blending rhythm, melody, and harmony that defines creative expression, whether improvising jazz or composing symphonies.</li>
    <li><strong>Aptitude</strong>: Innate talent for learning instruments or vocal techniques accelerates skill acquisition and technical precision.</li>
    <li><strong>Emotional</strong>: Conveying and evoking feelings through music deepens listener connection, transforming notes into storytelling.</li>
    <li><strong>Theoretical</strong>: Knowledge of scales, chords, and music history provides structure, enabling innovation within or beyond traditional frameworks.</li>
  </ol>

  <p>
    Together, these elements empower musicians to innovate, communicate, and resonate with audiences. Cultivating musical intelligence enriches personal creativity, fosters cultural appreciation, and nurtures a lifelong dialogue between sound and soul.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Naturalistic Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Seven Pillars of Nature Mastery</strong><br />
    Naturalistic intelligence, the ability to understand, connect with, and thrive in the natural world, is anchored in seven vital elements:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Observational</strong>: Keenly noticing patterns, behaviors, and changes in nature such as tracking animal movements or identifying seasonal shifts fuels curiosity and scientific inquiry.</li>
    <li><strong>Classification</strong>: Organizing species, habitats, or geological features into systems (e.g., taxonomy) helps decode biodiversity and ecological relationships.</li>
    <li><strong>Ecological</strong>: Grasping the interdependence of organisms and their environments, from food webs to nutrient cycles, fosters sustainable thinking.</li>
    <li><strong>Environmental</strong>: Analyzing broader systems like climate, soil health, or pollution impacts equips individuals to address challenges like habitat loss.</li>
    <li><strong>Connection</strong>: Cultivating a spiritual or emotional bond with nature inspires stewardship and mindfulness, grounding humanity in its planetary role.</li>
    <li><strong>Flora and Fauna</strong>: Expertise in plant and animal biology, behavior, and habitats enriches conservation efforts and ecological balance.</li>
    <li><strong>Conservation</strong>: Applying knowledge to protect ecosystems, through advocacy, rewilding, or sustainable practices safeguards biodiversity for future generations.</li>
  </ol>

  <p>
    Together, these pillars nurture a harmonious relationship with Earth, blending science, empathy, and action. Cultivating naturalistic intelligence empowers us to heal ecosystems, combat climate crises, and revere the intricate beauty of life on our planet.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Existential Intelligence</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Seven Dimensions of Meaning-Making</strong><br />
    Existential intelligence, the capacity to grapple with life’s profound questions, encompasses seven interconnected facets:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Contemplative</strong>: Engaging in deep reflection on existence, purpose, and consciousness, often through meditation or philosophical inquiry.</li>
    <li><strong>Mortality</strong>: Confronting the reality of death to inspire urgency, authenticity, and a focus on legacy.</li>
    <li><strong>Quest For</strong>: Relentlessly pursuing meaning, whether through art, science, or spirituality, to transcend mundane routines.</li>
    <li><strong>Pondering</strong>: Wrestling with paradoxes and mysteries, such as free will versus destiny, to expand intellectual and emotional horizons.</li>
    <li><strong>Tolerance</strong>: Embracing diverse beliefs about existence, fostering empathy in a pluralistic world.</li>
    <li><strong>Spiritual</strong>: Exploring connections beyond the material world through faith, mindfulness, to anchor life in universal truths.</li>
    <li><strong>Wisdom</strong>: Synthesizing insights into a coherent worldview, guiding ethical choices and nurturing inner peace.</li>
  </ol>

  <p>
    Together, these dimensions empower individuals to navigate life’s uncertainties with clarity and grace. Cultivating existential intelligence enriches relationships, fuels personal growth, and bridges humanity’s shared search for significance in an enigmatic universe.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Key Traits for Student Success</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    Understanding the multifaceted traits that shape a student’s academic and personal growth is essential for fostering success in today’s dynamic world. These traits are categorized as cognitive, interpersonal, motivational, and behavioral to provide a roadmap for educators and parents to nurture well-rounded, resilient, and high-achieving individuals. By recognizing and cultivating these qualities, we can empower students to excel in learning, relationships, and life.
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Cognitive Traits</h4>
      <p className="text-sm text-gray-700">
        Form the foundation of a student’s intellectual capabilities. Critical thinking enables objective analysis, helping students evaluate information without bias. Problem-solving and decision-making skills allow them to tackle challenges creatively and choose optimal paths by anticipating outcomes. Analytical skills break down complex concepts into manageable parts, while strategic planning equips students to set long-term goals and foresee obstacles. Conceptualization fosters the creation of mental frameworks to understand intricate systems, and efficient information processing ensures quick absorption and response to data. These traits are vital for academic excellence, particularly in subjects requiring logic and innovation, such as mathematics or science.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Interpersonal Traits</h4>
      <p className="text-sm text-gray-700">
        Define how students connect with others, shaping their social effectiveness. Strong communication ensures clear, articulate exchanges, while empathy fosters sensitivity to others’ emotions, building trust and understanding. Teamwork drives collaboration, enabling students to contribute positively in group settings. Leadership inspires and motivates peers toward shared goals, while negotiation skills resolve conflicts and create win-win outcomes. Interpersonal sensitivity and active listening enhance responsiveness to others’ needs and cues, making students effective collaborators. These qualities shine in group projects, debates, or extracurricular activities, fostering harmonious relationships.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Motivational Traits</h4>
      <p className="text-sm text-gray-700">
        Fuel a student’s drive to achieve and grow. A powerful inner drive propels them toward goals with determination, while perseverance ensures they push through setbacks. A growth mindset instills belief in continuous improvement, and resilience helps them recover from adversity. Self-efficacy builds confidence in their abilities, while intrinsic motivation drives them to pursue tasks for personal fulfillment rather than external rewards. Curiosity sparks exploration and a love for learning, making these students eager to dive into new subjects or challenges, from research projects to creative endeavors.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Behavioral Traits</h4>
      <p className="text-sm text-gray-700">
        Reflect how students approach tasks and responsibilities. Adaptability and flexibility allow them to adjust to changing circumstances or modify plans as needed. Effective time management ensures productivity, while organization creates structured, orderly approaches to tasks. Self-discipline maintains focus on long-term goals, and sustained focus minimizes distractions during study or work. Proactiveness drives students to anticipate needs and act independently, a trait invaluable in fast-paced academic environments. These behaviors ensure students meet deadlines, maintain tidy workspaces, and take initiative in their learning journey.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    By nurturing these cognitive, interpersonal, motivational, and behavioral traits, educators and parents can unlock a student’s full potential. Tailored support, such as encouraging critical thinking through problem-based learning, fostering teamwork in group activities, or promoting a growth mindset through positive reinforcement, can transform students into confident, capable individuals ready to succeed in academics and beyond.
  </p>
</section>

<section className="max-w-4xl mx-auto p-6 print:break-before-page mt-12">
  <h2 className="text-2xl font-bold mb-2">Behavioral Traits</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    Keys to Effective Action<br />
    Behavioral traits shape how individuals navigate daily challenges and achieve success. Here’s an overview of seven essential behavioral traits:
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Adaptability</h4>
      <p className="text-sm text-gray-700">
        This trait allows individuals to adjust to new circumstances, thriving in dynamic environments with ease and confidence.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Flexibility</h4>
      <p className="text-sm text-gray-700">
        Flexibility enables a willingness to shift approaches or perspectives, ensuring responsiveness to changing demands.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Time Management</h4>
      <p className="text-sm text-gray-700">
        Effective time management prioritizes tasks, balances responsibilities, and maximizes productivity through structured planning.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Organization</h4>
      <p className="text-sm text-gray-700">
        Being organized involves maintaining order in tasks and spaces, creating systems that enhance efficiency and clarity.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Self-Discipline</h4>
      <p className="text-sm text-gray-700">
        This trait drives consistency and commitment, helping individuals stay on track despite distractions or temptations.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Focus</h4>
      <p className="text-sm text-gray-700">
        A focused mindset channels attention toward goals, minimizing distractions and ensuring steady progress.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Proactiveness</h4>
      <p className="text-sm text-gray-700">
        Proactive individuals take initiative, anticipating challenges and acting decisively to create opportunities.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    These traits collectively foster a disciplined, adaptable, and forward-thinking approach, empowering individuals to manage life’s demands with skill and intention.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Cognitive Traits</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>The Pillars of Mental Agility</strong><br />
    Cognitive traits are essential for navigating life’s complexities, enabling individuals to think deeply and act wisely. Here’s a breakdown of seven key cognitive traits:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Critical Thinking</strong>: This involves evaluating information objectively, questioning assumptions, and forming reasoned judgments. It’s the foundation for sound decision-making in challenging situations.</li>
    <li><strong>Problem-Solving</strong>: A vital skill, problem-solving entails identifying issues, brainstorming solutions, and implementing effective strategies. It drives innovation and resilience in personal and professional contexts.</li>
    <li><strong>Decision-Making</strong>: This trait reflects the ability to choose the best course of action from multiple options, balancing logic and intuition to achieve optimal outcomes.</li>
    <li><strong>Analytical Skills</strong>: Analytical thinkers break down complex data into manageable parts, identifying patterns and insights to inform decisions.</li>
    <li><strong>Strategic Planning</strong>: This involves setting long-term goals and devising actionable steps to achieve them, ensuring efficiency and foresight.</li>
    <li><strong>Conceptualization</strong>: The ability to form abstract ideas and connect concepts, conceptualization fosters creativity and big-picture thinking.</li>
    <li><strong>Information Processing</strong>: This trait enables individuals to absorb, organize, and interpret data efficiently, enhancing learning and adaptability.</li>
  </ol>

  <p>
    Together, these traits empower individuals to tackle challenges with clarity and confidence.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Motivational Traits</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    Fueling Personal Success<br />
    Motivational traits propel individuals toward their goals, fostering determination and growth. Here’s a look at seven key motivational traits:
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Drive</h4>
      <p className="text-sm text-gray-700">
        A powerful inner force, drive pushes individuals to pursue their ambitions with energy and focus, overcoming obstacles along the way.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Perseverance</h4>
      <p className="text-sm text-gray-700">
        This trait reflects the ability to persist through challenges, maintaining effort despite setbacks or difficulties.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Growth Mindset</h4>
      <p className="text-sm text-gray-700">
        Embracing a growth mindset means viewing challenges as opportunities to learn, fostering continuous self-improvement.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Resilience</h4>
      <p className="text-sm text-gray-700">
        Resilience enables individuals to bounce back from adversity, adapting to hardships with strength and optimism.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Self-Efficacy</h4>
      <p className="text-sm text-gray-700">
        Confidence in one’s abilities, self-efficacy empowers individuals to tackle tasks and achieve goals with assurance.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Intrinsic Motivation</h4>
      <p className="text-sm text-gray-700">
        Driven by internal rewards like passion or fulfillment, intrinsic motivation sustains long-term commitment to meaningful pursuits.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Curiosity</h4>
      <p className="text-sm text-gray-700">
        A curious mind seeks knowledge and exploration, sparking creativity and a lifelong love of learning.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    Together, these traits cultivate a proactive, resilient approach to life’s challenges and opportunities.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Interpersonal Traits</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>Building Strong Connections</strong><br />
    Interpersonal traits are crucial for fostering meaningful relationships and effective collaboration. Here’s an overview of seven key interpersonal traits:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Communication</strong>: Clear and effective communication ensures ideas are shared accurately, reducing misunderstandings and building trust in interactions.</li>
    <li><strong>Empathy</strong>: This trait involves understanding and sharing others’ emotions, creating deeper connections and fostering a supportive environment.</li>
    <li><strong>Teamwork</strong>: Successful teamwork relies on cooperation, mutual respect, and the ability to work toward common goals, enhancing group productivity.</li>
    <li><strong>Leadership</strong>: Strong leaders inspire and guide others, setting a vision while motivating teams to achieve collective success.</li>
    <li><strong>Negotiation</strong>: Effective negotiation balances assertiveness and compromise, enabling mutually beneficial agreements in diverse situations.</li>
    <li><strong>Interpersonal Sensitivity</strong>: This trait reflects awareness of others’ feelings and needs, promoting respectful and considerate interactions.</li>
    <li><strong>Active Listening</strong>: Truly hearing and understanding others through active listening builds rapport and ensures meaningful dialogue.</li>
  </ol>

  <p>
    These traits collectively enhance social dynamics, enabling individuals to thrive in collaborative and interpersonal settings with confidence and compassion.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Essential Skills for Student Success</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    In an increasingly complex world, equipping students with a robust set of skills is vital for academic excellence and lifelong success. These skills are categorized as hard skills, soft skills, transferable skills, and personal development skills which form the foundation for navigating challenges, fostering relationships, and achieving personal growth. By cultivating these abilities, students can thrive in diverse academic, professional, and personal contexts.
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Hard Skills</h4>
      <p className="text-sm text-gray-700">
        Measurable, technical abilities critical for specialized tasks. Proficiency in data analysis empowers students to extract insights from complex datasets, essential for subjects like economics or science. Programming skills enable them to code and solve problems, opening doors to technology-driven fields. Process optimization sharpens their ability to streamline workflows, while numerical reasoning supports data-driven decision-making. Technical troubleshooting fosters systematic problem resolution in software or hardware, and scientific observation hones their ability to collect and analyze empirical data. Design thinking encourages user-centered innovation, making it invaluable for creative projects. These skills prepare students for technical disciplines and competitive careers.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Soft Skills</h4>
      <p className="text-sm text-gray-700">
        Interpersonal and personal attributes that enhance social interactions. Critical thinking allows students to evaluate information logically, forming sound judgments. Creative problem-solving drives innovative solutions to complex challenges, while teamwork fosters collaboration and positive group dynamics. Leadership inspires and guides peers toward shared goals, and negotiation skills help resolve conflicts amicably. Conflict resolution ensures disputes are managed constructively, and active listening promotes empathetic communication. These skills shine in group projects, debates, or leadership roles, enabling students to build strong relationships and navigate social settings effectively.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Transferable Skills</h4>
      <p className="text-sm text-gray-700">
        Versatile abilities applicable across various domains. Critical thinking and problem-solving enable students to tackle challenges in any field, from academics to extracurriculars. Effective communication ensures ideas are conveyed clearly to diverse audiences, while teamwork supports collaboration in different contexts. Adaptability allows students to thrive amid change, whether transitioning between subjects or roles. Leadership skills empower them to manage projects or guide teams, and decision-making ensures timely, informed choices under pressure. These skills make students agile and capable, ready to excel in varied environments, from classrooms to future careers.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Personal Development Skills</h4>
      <p className="text-sm text-gray-700">
        Skills that drive continuous self-improvement and emotional well-being. Strong communication enhances clarity in self-expression, while self-awareness deepens understanding of personal strengths and weaknesses. Emotional intelligence enables students to manage emotions and empathize with others, fostering resilience. A growth mindset encourages them to embrace challenges and view effort as a path to growth. Resilience helps them recover from setbacks, and effective time management optimizes productivity. Goal setting and achievement provide a disciplined framework for pursuing meaningful objectives. These skills empower students to maintain well-being and strive for long-term success.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    By nurturing these hard, soft, transferable, and personal development skills, educators and parents can unlock a student’s full potential. Tailored strategies, such as hands-on coding workshops, collaborative group activities, or mindfulness practices, can cultivate these abilities, preparing students to excel academically and thrive in an ever-evolving world.
  </p>
</section>

<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Hard Skills</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    Mastering Technical Expertise<br />
    Hard skills are specialized, technical abilities crucial for specific roles, driving professional success. Here’s an overview of seven key hard skills:
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Data Analysis</h4>
      <p className="text-sm text-gray-700">
        Interpreting and evaluating data to uncover trends, inform decisions, and solve problems effectively.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Programming</h4>
      <p className="text-sm text-gray-700">
        Proficiency in coding languages like Python or Java enables the creation of software, automation, and innovative digital solutions.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Process Optimization</h4>
      <p className="text-sm text-gray-700">
        Improving workflows, reducing inefficiencies, and enhancing productivity through systematic analysis and refinement.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Numerical Reasoning</h4>
      <p className="text-sm text-gray-700">
        Analyzing quantitative data, solving mathematical problems, and making informed financial or statistical decisions.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Technical Troubleshooting</h4>
      <p className="text-sm text-gray-700">
        Diagnosing and resolving technical issues in systems or equipment, ensuring smooth operations.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Scientific Observation</h4>
      <p className="text-sm text-gray-700">
        Precise observation and documentation in experiments or research that drive accurate conclusions and advancements.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Design Thinking</h4>
      <p className="text-sm text-gray-700">
        A problem-solving approach that fosters innovation by emphasizing user-centered solutions and creative ideation.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    These skills collectively empower individuals to excel in technical and analytical domains.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-6">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    <strong>Enhancing Interpersonal Excellence</strong><br />
    Soft skills are essential interpersonal abilities that foster effective communication and collaboration. Here’s a look at seven key soft skills:
  </p>

  <ol className="list-decimal ml-6 mb-6 text-sm text-gray-700 space-y-2">
    <li><strong>Critical Thinking</strong>: This skill involves analyzing information objectively, questioning assumptions, and making well-reasoned decisions in complex situations.</li>
    <li><strong>Creative Problem-Solving</strong>: It encourages innovative thinking to devise unique solutions, addressing challenges with originality and resourcefulness.</li>
    <li><strong>Teamwork</strong>: Effective teamwork promotes cooperation, mutual respect, and collective effort, ensuring group success in shared goals.</li>
    <li><strong>Leadership</strong>: Strong leadership inspires and guides others, setting a clear vision while motivating teams to achieve excellence.</li>
    <li><strong>Negotiation</strong>: This skill balances assertiveness and compromise, facilitating agreements that benefit all parties in diverse scenarios.</li>
    <li><strong>Conflict Resolution</strong>: Resolving disputes constructively, conflict resolution maintains harmony by addressing disagreements with empathy and fairness.</li>
    <li><strong>Active Listening</strong>: Truly hearing and understanding others, active listening builds trust and strengthens relationships through meaningful engagement.</li>
  </ol>

  <p>
    These skills collectively enhance interpersonal dynamics, driving success in collaborative environments.
  </p>
</section>
<section className="max-w-4xl mx-auto p-6 print:break-before-page">
  <h2 className="text-2xl font-bold mb-2">Transferable Skills</h2>
  <h3 className="text-lg text-gray-700 font-semibold mb-4">DEM Scan Report of Master Saksham Parve</h3>

  <p className="mb-6">
    Versatile Tools for Success<br />
    Transferable skills are versatile competencies that apply across various roles and industries, enhancing adaptability and effectiveness. Here’s an overview of seven key transferable skills:
  </p>

  <div className="space-y-6">
    <div>
      <h4 className="font-semibold text-lg">1. Critical Thinking</h4>
      <p className="text-sm text-gray-700">
        Enables objective analysis and evaluation of information, ensuring sound judgment in diverse scenarios.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">2. Communication</h4>
      <p className="text-sm text-gray-700">
        Clear and effective communication fosters understanding, ensuring ideas are conveyed accurately in any setting.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">3. Teamwork</h4>
      <p className="text-sm text-gray-700">
        Collaboration and mutual respect in teamwork drive collective success, making it essential for group projects.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">4. Problem-Solving</h4>
      <p className="text-sm text-gray-700">
        Identifying challenges and devising practical solutions, problem-solving ensures progress in any context.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">5. Adaptability</h4>
      <p className="text-sm text-gray-700">
        The ability to adjust to new situations, adaptability ensures resilience in dynamic environments.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">6. Leadership</h4>
      <p className="text-sm text-gray-700">
        Inspiring and guiding others, leadership sets direction and motivates teams across industries.
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-lg">7. Decision-Making</h4>
      <p className="text-sm text-gray-700">
        Balancing logic and intuition, decision-making ensures optimal choices in professional and personal contexts.
      </p>
    </div>
  </div>

  <p className="mt-6 text-gray-800">
    These skills bridge gaps between roles, empowering individuals to thrive in diverse, ever-changing environments with confidence.
  </p>
</section>



      <div className="mt-8 print:hidden flex justify-center gap-4">
        <button onClick={handlePrint} className="px-4 py-2 bg-black text-white rounded">
          Download / Print PDF
        </button>
        <Link to="/" className="px-4 py-2 bg-gray-200 rounded">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
