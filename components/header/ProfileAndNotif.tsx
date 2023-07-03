import Image from "next/image";

import { FaForumbee } from "react-icons/fa";

const ProfileAndNotif = () => {
  return (
    <div className="flex items-center gap-7">
      <FaForumbee size={35} className="self-end mb-2" />
      <Image src="/images/profile.png" alt="profile" width={102} height={102} />
    </div>
  );
};

export default ProfileAndNotif;
