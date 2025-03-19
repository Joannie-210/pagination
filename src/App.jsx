import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Task from "./task.jsx";
import Pagination from "./pagination.jsx";
import Button from "./component/Button.jsx";
import Chart from "./component/chart.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(25);
  const [search, setSearch] = useState("");

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");

        const updatedData = response.data.map((item) => ({
          ...item,
          gender: Math.random() < 0.5 ? "Male" : "Female", 
        }));

        setPosts(updatedData);
      } catch (error) {
        console.error("Failed to fetch", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (search.toLowerCase().trim().startsWith("m")) {
      return post.gender.toLowerCase() === "male";
    } else if (search.toLowerCase().trim().startsWith("f")) {
      return post.gender.toLowerCase() === "female";
    }
    return true;
  });

  const currentPosts = search
    ? filteredPosts
    : filteredPosts.slice((currentPage - 1) * postPerPage, currentPage * postPerPage);

  const paginate = (num) => setCurrentPage(num);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-3xl font-bold text-[#000080] mb-6">React Table</h1>

      
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search gender (m/f)"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-md border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button label= {<FaMagnifyingGlass/>} variant="primary" onClick={() => setSearch(search)} />
      
        <Button  className= 'opacity-50 ml-6' label="View Chart" variant="secondary" onClick={() => navigate("/chart", { state: { posts } })} />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white flex p-4 w-[70vw] relative left-40">
        <Task posts={currentPosts} loading={loading} />
      </div>

     
      {!search && (
        <div className="flex justify-center mt-6">
          <Pagination postPerPage={postPerPage} totalPosts={filteredPosts.length} paginate={paginate} />
        </div>
      )}
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </Router>
  );
};

export default App;
