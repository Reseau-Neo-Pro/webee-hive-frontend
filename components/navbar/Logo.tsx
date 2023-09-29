import Image from "next/image";

interface MenuProps {
  showText: boolean;
}

const Logo: React.FC<MenuProps> = ({ showText }) => {
  return (
    <div className="flex items-center gap-5 flex-col mb-3">
      <Image
        src="/images/logo_webeehive.svg"
        alt="WeBee Hive Logo"
        width={82}
        height={82}
        style={{ cursor: "pointer" }}
      />
      {showText && (
        <Image
          src="/images/NAME.png"
          alt="Webee Hive"
          width={208}
          height={39}
        />
      )}
    </div>
  );
};

export default Logo;