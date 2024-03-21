import React, { useRef } from "react";

const Suggest = () => {
  const labelRef = useRef(null);

  return (
    <div className="relative w-60 mt-10">
      <div className="relative">
        <input
          id="name"
          type="text"
          className="absolute top-0 left-0 bg-transparent input-wow  w-full "
        />
        <div className="absolute other">Enter your Name</div>
      </div>
    </div>
  );
};

export default Suggest;
