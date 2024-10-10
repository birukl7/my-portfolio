import React from 'react';

function SecondaryBtn({ text, active, onClick }) {
  return (
    <button
      className={`sm:py-2 sm:px-4 text-[14px] px-2 py-1 rounded-[5px] sm:text-[15px] sm:rounded-lg focus:outline-none ${active ? 'bg-slate-300 text-black dark:bg-slate-600 dark:text-white' : 'bg-slate-800 text-white dark:bg-white dark:text-slate-800'} hover:bg-slate-300 hover:text-black dark:hover:bg-slate-600 dark:hover:text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default SecondaryBtn;
