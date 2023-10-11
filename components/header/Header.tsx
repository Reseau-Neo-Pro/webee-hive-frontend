"use client";

import Switch from "@/components/header/Switch";

const Header = (currentUser: any) => {
  return (
    <>
      <div
        className={
          "shadow-xl min-w[300px] flex justify-between items-center h-16 p-6"
        }
      >
        <div className={"min-w-[300px] rounded-2xl border-2 px-3 py-2"}>
          <input type="text" placeholder="Rechercher sur webee hive" />
        </div>
        <div className={"flex px-3 py-2 text-2xl w-full justify-center"}>
          <Switch />
        </div>
        <div className={"flex space-x-8 text-2xl"}>
          <div>Connection</div>
          <div>inscription</div>
        </div>
      </div>
    </>
  );
};

export default Header;
