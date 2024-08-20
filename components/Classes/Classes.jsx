// import React from "react";
// import Link from "next/link";

// const Classes = () => {
//   return (
//     <>
//       <div className="flex justify-center">
//         <Link target="_blank" href="https://littlearyans.in/BookTrial">
//           <div className="descBtn">
//             <button
//               type="button"
//               class="text-white bg-gradient-to-br from-yellow-600 to-peach-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8"
//             >
//               Apply Free
//             </button>
//           </div>
//         </Link>
//       </div>
//       <p className="flex justify-center font-medium">Demo Class</p>
//     </>
//   );
// };

// export default Classes;


import React from "react";
import Link from "next/link";


const Classes = () => {
  return (
    <div className="flex justify-center items-center h-35">
      <div className="rounded overflow-hidden shadow-lg bg-white m-5">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-center">Join Our Demo Class</h2>
          <p className="text-gray-700 text-base text-center">
            Experience the unique learning environment at our institution. 
            Enroll in a demo class today and discover the joy of learning with us!
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <Link target="_blank" href="https://littlearyans.in/BookTrial">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-yellow-600 to-peach-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
            >
              Apply Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classes;
