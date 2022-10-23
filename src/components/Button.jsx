import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, color, bgColor, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  return (
    <button className={`text-${size} w-${width} hover:bg-${bgHoverColor} p-3 hover:drop-shadow-xl`} type="button"
      style={{
        backgroundColor: bgColor,
        color,
        borderRadius
      }}
      onClick={() => setIsClicked(initialState)}
    >
      {icon} {text}
    </button>
  );
};

export default Button;