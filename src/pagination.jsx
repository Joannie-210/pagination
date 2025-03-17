import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPosts / postPerPage; i++) {
       pageNumbers.push(i);
    }

    return (
      <div className='flex justify-center mt-4'>
        <ul className='pagination flex flex-row gap-x-4 list-none'>
          {pageNumbers.map(number => (
            <li onClick={()=> paginate(number)} key={number} className='px-3 py-2 bg-[#000080] rounded-md hover:translate-y-[-5px] transition-transform duration-300'>
              <a href="#" className='text-white'> {number} </a>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Pagination;
