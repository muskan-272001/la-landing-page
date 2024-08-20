// // // import React from "react";

// // // const SecondSection = () => {
// // //   return (
// // //     <div>
// // //       <h2 className="mainText">We focus on all around dev About</h2>

// // //       <ul>
// // //         <li>
// // //           <h4> Fees starting at just Rs 3,750/Month. </h4>
// // //         </li>
// // //         <li>
// // //           <h4>
// // //             Value-based education that teaches the importance of our culture and
// // //             traditions.
// // //           </h4>
// // //         </li>
// // //         <li>
// // //           <h4>15:1 Student-Teacher Ratio.</h4>
// // //         </li>
// // //         <li>
// // //           <h4>
// // //             Dedicated Student Success Department to monitor student’s overall
// // //             holistic growth and development.
// // //           </h4>
// // //         </li>
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default SecondSection;
// // import React from "react";

// // const SecondSection = () => {
// //   return (
// //     <div>
// //       <h2 className="mainText mb-4">We focus on all-around development</h2>

// //       <ul className="list-disc list-inside space-y-2">
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Fees starting at just Rs 3,750/Month.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Value-based education that teaches the importance of our culture and traditions.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             15:1 Student-Teacher Ratio.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Dedicated Student Success Department to monitor student’s overall holistic growth and development.
// //           </h4>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SecondSection;




// // import React from "react";

// // const SecondSection = () => {
// //   return (
// //     <div>
// //       <h2 className="mainText mb-4">We focus on all-around development</h2>

// //       <ul className="list-disc list-inside space-y-4 pl-5">
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Fees starting at just Rs 3,750/Month.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Value-based education that teaches the importance of our culture and traditions.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             15:1 Student-Teacher Ratio.
// //           </h4>
// //         </li>
// //         <li>
// //           <h4 className="text-lg font-semibold">
// //             Dedicated Student Success Department to monitor student’s overall holistic growth and development.
// //           </h4>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SecondSection;






// import React from "react";
// import { motion } from "framer-motion";

// const Arrow = () => (
//   <motion.span
//     className="inline-block w-4 h-4 border-l-2 border-b-2 border-gray-500 rotate-45 transform"
//     initial={{ opacity: 0, x: -10 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.3 }}
//   />
// );

// const SecondSection = () => {
//   return (
//     <div>
//       <h2 className="mainText mb-4">We focus on all-around development</h2>

//       <ul className="list-none space-y-4 pl-0">
//         <li className="flex items-center">
//           <Arrow />
//           <h4 className="ml-2 text-lg font-semibold">
//             Fees starting at just Rs 3,750/Month.
//           </h4>
//         </li>
//         <li className="flex items-center">
//           <Arrow />
//           <h4 className="ml-2 text-lg font-semibold">
//             Value-based education that teaches the importance of our culture and traditions.
//           </h4>
//         </li>
//         <li className="flex items-center">
//           <Arrow />
//           <h4 className="ml-2 text-lg font-semibold">
//             15:1 Student-Teacher Ratio.
//           </h4>
//         </li>
//         <li className="flex items-center">
//           <Arrow />
//           <h4 className="ml-2 text-lg font-semibold">
//             Dedicated Student Success Department to monitor student’s overall holistic growth and development.
//           </h4>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SecondSection;




import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Arrow = () => (
  <motion.span
    className="inline-block w-4 h-4 border-l-2 border-b-2 border-gray-500 rotate-45 transform"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  />
);

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SecondSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: i * 0.2,
        },
      }));
    }
  }, [inView, controls]);

  return (
    <div>
      <h2 className="mainText mb-4">We focus on all-around development</h2>

      <ul className="list-none space-y-4 pl-0" ref={ref}>
        {[ 
          "Fees starting at just Rs 3,750/Month.",
          "Value-based education that teaches the importance of our culture and traditions.",
          "15:1 Student-Teacher Ratio.",
          "Dedicated Student Success Department to monitor student’s overall holistic growth and development."
        ].map((text, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            initial="hidden"
            animate={controls}
            custom={index}
            variants={listItemVariants}
          >
            <Arrow />
            <h4 className="ml-2 text-lg font-semibold">
              {text}
            </h4>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SecondSection;
