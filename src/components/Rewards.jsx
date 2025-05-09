// pages/Rewards.jsx

import React from "react";
import RewardCard from "../components/RewardCard";
import sam from '../assets/sam.png'
import car from '../assets/creata.png'
import scooty from '../assets/scooty.png'
import iphone from '../assets/iphone.png'
import lam from '../assets/lam.png'
import alto from '../assets/alto.png'
import creata from '../assets/creata.png'
import vila from '../assets/vila.png'
import rolls from '../assets/rolls.png'
import jag from '../assets/jag.png'
import bullet from '../assets/bullet.png'


const rewards = [
  {
    level: "V1",
    leg1Amount: 500,
    leg2Amount: 500,
    rewardAmount: "$50",
    rewardText: "ONLY ONE TIME",
    image: "https://img.freepik.com/free-photo/3d-illustration-closed-black-gift-box_107791-18203.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740",
    status: "COMPLETED",
  },
  {
    level: "V2",
    leg1Amount: 2500,
    leg2Amount: 2500,
    rewardAmount: "$250",
    rewardText: "SAMSUNG Mobile",
    image: sam,
    status: "COMPLETED",
  },
  {
    level: "V3",
    leg1Amount: 5000,
    leg2Amount: 5000,
    rewardAmount: "$1000",
    rewardText: "Scooty",
    image: scooty,
    status: "COMPLETED",
  },
  {
    level: "V4",
    leg1Amount: 10000,
    leg2Amount: 10000,
    rewardAmount: "$2500",
    rewardText: "Iphone",
    image: iphone,
    status: "COMPLETED",
  },
  {
    level: "V5",
    leg1Amount: 25000,
    leg2Amount: 25000,
    rewardAmount: "$5000",
    rewardText: "Bullet",
    image: bullet,
    status: "COMPLETED",
  },
  {
    level: "V6",
    leg1Amount: 50000,
    leg2Amount: 50000,
    rewardAmount: "$10,000",
    rewardText: "Alto",
    image: alto,
    status: "COMPLETED",
  },
  {
    level: "V7",
    leg1Amount: 100000,
    leg2Amount: 100000,
    rewardAmount: "$20,000",
    rewardText: "Creta",
    image: creata,
    status: "COMPLETED",
  },
  {
    level: "V8",
    leg1Amount: "1L",
    leg2Amount: "1L",
    rewardAmount: "$40,000",
    rewardText: "Jaguar Car",
    image: jag,
    status: "COMPLETED",
  },
  {
    level: "V9",
    leg1Amount: "25L",
    leg2Amount: "25L",
    rewardAmount: "$60,000",
    rewardText: "Viila House",
    image: vila,
    status: "COMPLETED",
  },
  {
    level: "V10",
    leg1Amount: "50L",
    leg2Amount: "50L",
    rewardAmount: "$80,000",
    rewardText: "Lamborgini",
    image: lam,
    status: "COMPLETED",
  },
  {
    level: "V11",
    leg1Amount: "1Cr",
    leg2Amount: "1Cr",
    rewardAmount: "$100,000",
    rewardText: "Rolls Royce",
    image: rolls,
    status: "COMPLETED",
  },
];

const Rewards = () => {
  return (
    <div className="min-h-screen p-6 sm:p-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        Arbitrage Live Rewards
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {rewards.map((reward, idx) => (
          <RewardCard key={idx} {...reward} />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
