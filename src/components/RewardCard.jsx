// components/RewardCard.jsx

import React from "react";

const RewardCard = ({
  level,
  leg1Amount,
  leg2Amount,
  rewardAmount,
  rewardText,
  image,
  status,
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-blue-900 rounded-xl shadow-lg p-6 text-white flex flex-col md:flex-row items-center gap-6 transition-transform duration-500 hover:scale-[1.02]">
      <div className="flex-1 space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-extrabold text-cyan-300">ARBITRAGE LIVE</h2>
        <div className="bg-purple-700 p-2 rounded text-lg">💰 ${leg1Amount} - Leg 1</div>
        <div className="bg-purple-700 p-2 rounded text-lg">💰 ${leg2Amount} - Leg 2</div>
        <div className="bg-blue-600 p-2 rounded text-lg">{rewardAmount} {rewardText}</div>
        <div className="bg-pink-600 p-2 rounded font-bold text-lg">
          {level} {status}
        </div>
      </div>
      <div className="flex-shrink-0">
        <img src={image} alt="Reward" className="w-50 h-50 object-contain rounded-md" />
      </div>
    </div>
  );
};

export default RewardCard;
