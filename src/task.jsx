import React from "react";

const Task = ({ posts, loading }) => {
  return (
    <>
     <div className="w-[70vw] mx-auto mt-6 overflow-x-auto">
      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-600 m-auto"><span class='loader'>fetching...</span></p>
      ) : (
        <div className="overflow-x-auto bg-blue">
          <table className="w-full border-collapse bg-pink shadow-md rounded-lg overflow-hidden ">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#000080] text-white uppercase text-sm tracking-wider">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Gender</th>   
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={post.id}
                  className={`border-blue ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="p-3">{post.id}</td>
                  <td className="p-3">{post.name}</td>
                  <td className="p-3">{post.email}</td>
                  <td
                    className={`p-3 font-semibold ${
                      post.gender === "Male" ? "text-[#000080]" : "text-[#FFD700]"
                    }`}
                  >
                    {post.gender}
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </>
  );
};

export default Task;
