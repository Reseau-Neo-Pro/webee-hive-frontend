"use client";

const Switch = () => {
  return (
    <label
      className={
        "bg-[#949494] cursor-pointer relative w-[34px] h-[14px] rounded-full"
      }
    >
      <input type={"checkbox"} className={"sr-only peer"} />
      <span
        className={
          "shadow-md w-[20px] h-[20px] left-[-4px] bg-[#e0e0e0] absolute rounded-full bottom-[-3px] peer-checked:bg-[#000] peer-checked:left-[20px] transition-all duration-200"
        }
      />
    </label>
  );
};

export default Switch;
