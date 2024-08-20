import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials flex gap-10 h-4 mt-20">
      <div>
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/1FLYZdxsteo"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
      <div>
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/1FLYZdxsteo"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
      <div>
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src="https://www.youtube.com/embed/1FLYZdxsteo"
          frameBorder="0"
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Testimonials;
