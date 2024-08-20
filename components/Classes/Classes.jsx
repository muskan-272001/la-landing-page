import React from "react";
import Link from "next/link";

const Classes = () => {
  return (
    <>
      <div className="flex justify-center">
        <Link target="_blank" href="https://littlearyans.in/BookTrial">
          <div className="descBtn">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-yellow-600 to-peach-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8"
            >
              Apply Free
            </button>
          </div>
        </Link>
      </div>
      <p className="flex justify-center font-medium">Demo Class</p>
    </>
  );
};

export default Classes;
