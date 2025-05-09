import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002F6C] to-[#431A57] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#002F6C] mb-6">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded" />
          <button className="w-full bg-[#002F6C] text-white p-2 rounded hover:bg-[#004080]">Login</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-[#002F6C] font-semibold">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
