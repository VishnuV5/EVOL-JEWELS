import { useState } from "react";
import { motion } from "framer-motion";

export default function AIJewelryKiosk() {
  const [step, setStep] = useState(0);
  const [style, setStyle] = useState("");
  const [occasion, setOccasion] = useState("");
  const [budget, setBudget] = useState("");

  const handleNext = () => setStep(step + 1);

  const styles = ["Minimal", "Bold", "Traditional", "Modern"];
  const occasions = ["Daily", "Party", "Wedding", "Formal"];
  const budgets = ["Low", "Medium", "Premium"];

  const celebrityMatches = {
    Minimal: { name: "Alia Bhatt", image: "https://via.placeholder.com/400x250?text=Alia+Bhatt" },
    Bold: { name: "Zendaya", image: "https://via.placeholder.com/400x250?text=Zendaya" },
    Traditional: { name: "Deepika Padukone", image: "https://via.placeholder.com/400x250?text=Deepika+Padukone" },
    Modern: { name: "Taylor Swift", image: "https://via.placeholder.com/400x250?text=Taylor+Swift" }
  };

  const jewelrySuggestions = {
    Minimal: [
      { name: "Gold Chain", image: "https://via.placeholder.com/50?text=Chain" },
      { name: "Pearl Studs", image: "https://via.placeholder.com/50?text=Pearl" },
      { name: "Simple Ring", image: "https://via.placeholder.com/50?text=Ring" }
    ],
    Bold: [
      { name: "Diamond Choker", image: "https://via.placeholder.com/50?text=Choker" },
      { name: "Hoop Earrings", image: "https://via.placeholder.com/50?text=Hoops" },
      { name: "Layered Necklace", image: "https://via.placeholder.com/50?text=Necklace" }
    ],
    Traditional: [
      { name: "Temple Necklace", image: "https://via.placeholder.com/50?text=Temple" },
      { name: "Kundan Set", image: "https://via.placeholder.com/50?text=Kundan" },
      { name: "Jhumkas", image: "https://via.placeholder.com/50?text=Jhumkas" }
    ],
    Modern: [
      { name: "Geometric Earrings", image: "https://via.placeholder.com/50?text=Earrings" },
      { name: "Silver Bracelet", image: "https://via.placeholder.com/50?text=Bracelet" },
      { name: "Statement Ring", image: "https://via.placeholder.com/50?text=Ring" }
    ]
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" },
    tap: { scale: 0.95 }
  };

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 via-pink-800 to-purple-700 text-white p-6 font-sans">
      
      {/* Step 0: Welcome */}
      {step === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg text-yellow-300 animate-pulse">
            💎 Evol Jewels Smart Mirror
          </h1>
          <p className="mb-6 text-2xl drop-shadow-sm">Your AI-Powered Jewelry Stylist</p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-5 rounded-3xl text-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={handleNext}
          >
            Start Styling
          </motion.button>
        </motion.div>
      )}

      {/* Step 1: Style */}
      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">Choose Your Style ✨</h2>
          <div className="grid grid-cols-2 gap-6">
            {styles.map((s) => (
              <motion.button
                key={s}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white text-purple-800 font-bold py-5 px-8 rounded-3xl shadow-lg text-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:text-white"
                onClick={() => {
                  setStyle(s);
                  handleNext();
                }}
              >
                {s}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 2: Occasion */}
      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">Select Occasion 🎉</h2>
          <div className="grid grid-cols-2 gap-6">
            {occasions.map((o) => (
              <motion.button
                key={o}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white text-purple-800 font-bold py-5 px-8 rounded-3xl shadow-lg text-2xl hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 hover:text-white transition-all duration-300"
                onClick={() => {
                  setOccasion(o);
                  handleNext();
                }}
              >
                {o}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 3: Budget */}
      {step === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">Select Budget 💰</h2>
          <div className="grid grid-cols-3 gap-6">
            {budgets.map((b) => (
              <motion.button
                key={b}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white text-purple-800 font-bold py-5 px-8 rounded-3xl shadow-lg text-2xl hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition-all duration-300"
                onClick={() => {
                  setBudget(b);
                  handleNext();
                }}
              >
                {b}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 4: Recommendation */}
      {step === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold mb-6 drop-shadow-md">Your Style Match ✨</h2>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-white text-purple-900 rounded-3xl shadow-2xl p-6 w-96 mx-auto transition-all duration-300 hover:scale-105"
          >
            <img
              src={celebrityMatches[style].image}
              alt={celebrityMatches[style].name}
              className="rounded-2xl mb-4 w-full h-64 object-cover shadow-lg"
            />
            <h3 className="text-3xl font-bold mb-2">{celebrityMatches[style].name}</h3>
            <p className="mb-4">
              Your vibe: {style} | Occasion: {occasion} | Budget: {budget}
            </p>

            <h4 className="font-semibold mb-2 text-xl">Recommended Jewelry:</h4>
            <ul className="grid grid-cols-1 gap-3">
              {jewelrySuggestions[style].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center bg-pink-50 rounded-2xl p-2 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <span className="text-purple-900 font-semibold text-lg">{item.name}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg w-full text-center transition-all duration-300 hover:scale-105"
            >
              Explore Evol Jewels Collection
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

