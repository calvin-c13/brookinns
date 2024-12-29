import React from "react";

// Creates a required asterisk with a hoverable tooltip that says "Required"
const RequiredAsterisk = () => {
  return (
    <span className="relative group">
      <span className="text-red-500">&nbsp;*&nbsp;</span>
      <span className="absolute left-0 -mb-1 ml-1 bottom-full opacity-0 group-hover:opacity-80 transition-opacity bg-black text-white text-xs rounded py-1 px-2">
        Required
      </span>
    </span>
  );
};

export default RequiredAsterisk;
