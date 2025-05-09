import React from "react";
import { FaLayerGroup, FaCoins } from "react-icons/fa";

const levels = [
  { title: "1ST LEVEL", percent: "L1 - 50%", color: "from-blue-500 to-blue-700" },
  { title: "2ND LEVEL", percent: "L2 - 50%-10%", note: "3000$ direct after 30 days — 50%", color: "from-purple-500 to-purple-700" },
  { title: "3RD LEVEL", percent: "L3 - 5%", color: "from-pink-500 to-pink-700" },
  { title: "4TH LEVEL", percent: "L4 to L10 - 4%", note: "400$ self & V1 complete then open level", color: "from-yellow-400 to-yellow-600" },
  { title: "5TH LEVEL", percent: "L11 to L15 - 3%", note: "300$ self & V2 complete then open level", color: "from-green-500 to-green-700" },
  { title: "6TH LEVEL", percent: "L16 to L20 - 2%", note: "200$ self & V3 complete then open level", color: "from-red-500 to-red-700" },
  { title: "7TH LEVEL", percent: "L21 to L30 - 1%", note: "100$ self & V4 complete then open level", color: "from-indigo-500 to-indigo-700" },
];

const LevelIncome = () => {
  return (
    <section className="relative bg-[#0d022d] py-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          <FaLayerGroup className="inline-block mr-2 text-blue-400" />
          Level Income
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base md:text-lg">
          Unlock more income with every level you and your team progress through.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${level.color} rounded-2xl p-6 shadow-xl hover:scale-[1.02] transform transition duration-300 ease-in-out`}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCoins className="text-white text-xl" />
              <h3 className="text-xl font-semibold">{level.title}</h3>
            </div>
            <p className="text-lg font-bold">{level.percent}</p>
            {level.note && <p className="text-sm mt-2 text-white/90">{level.note}</p>}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-white/80 italic">
          * If there is $1000 self investment then all levels will be unlocked automatically.
        </p>
      </div>
    </section>
  );
};

export default LevelIncome;
