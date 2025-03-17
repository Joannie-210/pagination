import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Chart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const posts = location.state?.posts || []; // Ensure posts exist

  // Count Male and Female
  const maleCount = posts.filter((post) => post.gender === "Male").length;
  const femaleCount = posts.filter((post) => post.gender === "Female").length;

  const data = [
    { gender: "Male", count: maleCount },
    { gender: "Female", count: femaleCount },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold text-[#000080] mb-6">Gender Distribution Chart</h2>

      {/* Chart */}
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="gender" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#000080" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => navigate("/")} 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Chart;
