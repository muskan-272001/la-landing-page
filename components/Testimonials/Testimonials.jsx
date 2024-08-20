// // import React from "react";

// // const Testimonials = () => {
// //   return (
// //     <div className="testimonials flex gap-10 h-4 mt-20">
// //       <div>
// //         <iframe
// //           className="w-full aspect-video self-stretch md:min-h-96"
// //           src="https://www.youtube.com/embed/1FLYZdxsteo"
// //           frameBorder="0"
// //           title="Product Overview Video"
// //           aria-hidden="true"
// //         />
// //       </div>
// //       <div>
// //         <iframe
// //           className="w-full aspect-video self-stretch md:min-h-96"
// //           src="https://www.youtube.com/embed/1FLYZdxsteo"
// //           frameBorder="0"
// //           title="Product Overview Video"
// //           aria-hidden="true"
// //         />
// //       </div>
// //       <div>
// //         <iframe
// //           className="w-full aspect-video self-stretch md:min-h-96"
// //           src="https://www.youtube.com/embed/1FLYZdxsteo"
// //           frameBorder="0"
// //           title="Product Overview Video"
// //           aria-hidden="true"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonials;




// "use client";

// import React, { useRef, useEffect } from "react";

// const Testimonials = () => {
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const callback = (entries, observer) => {
//       entries.forEach((entry) => {
//         const video = entry.target;
//         if (entry.isIntersecting) {
//           video.src += "&autoplay=1"; // Add autoplay when video comes into view
//         } else {
//           video.src = video.src.replace("&autoplay=1", ""); // Remove autoplay when out of view
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);
//     videoRefs.current.forEach((video) => {
//       if (video) observer.observe(video);
//     });

//     return () => {
//       videoRefs.current.forEach((video) => {
//         if (video) observer.unobserve(video);
//       });
//     };
//   }, []);

//   return (
//     <div className="testimonials flex gap-10 mt-20">
//       <div className="w-1/3">
//         <iframe
//           ref={(el) => (videoRefs.current[0] = el)}
//           className="w-full aspect-video rounded-lg shadow-md"
//           src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
//           frameBorder="0"
//           title="Product Overview Video"
//           aria-hidden="true"
//           loading="lazy"
//           allow="autoplay"
//         />
//       </div>
//       <div className="w-1/3">
//         <iframe
//           ref={(el) => (videoRefs.current[1] = el)}
//           className="w-full aspect-video rounded-lg shadow-md"
//           src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
//           frameBorder="0"
//           title="Product Overview Video"
//           aria-hidden="true"
//           loading="lazy"
//           allow="autoplay"
//         />
//       </div>
//       <div className="w-1/3">
//         <iframe
//           ref={(el) => (videoRefs.current[2] = el)}
//           className="w-full aspect-video rounded-lg shadow-md"
//           src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
//           frameBorder="0"
//           title="Product Overview Video"
//           aria-hidden="true"
//           loading="lazy"
//           allow="autoplay"
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



"use client";

import React, { useRef, useState } from "react";

const Testimonials = () => {
  const videoRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    const iframe = videoRefs.current[index];
    if (iframe) {
      iframe.src += "&autoplay=1"; // Add autoplay when hovered
    }
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    const iframe = videoRefs.current[index];
    if (iframe) {
      iframe.src = iframe.src.replace("&autoplay=1", ""); // Remove autoplay when not hovered
    }
    setHoveredIndex(null);
  };

  return (
    <div className="testimonials flex gap-10 mt-20">
      <div className="w-1/3">
        <iframe
          ref={(el) => (videoRefs.current[0] = el)}
          className="w-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
          loading="lazy"
          allow="autoplay"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        />
      </div>
      <div className="w-1/3">
        <iframe
          ref={(el) => (videoRefs.current[1] = el)}
          className="w-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
          loading="lazy"
          allow="autoplay"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        />
      </div>
      <div className="w-1/3">
        <iframe
          ref={(el) => (videoRefs.current[2] = el)}
          className="w-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
          loading="lazy"
          allow="autoplay"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        />
      </div>
    </div>
  );
};

export default Testimonials;
