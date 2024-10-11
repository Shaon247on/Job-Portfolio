import logo from "@/public/main-icon.png"
import Image from "next/image";

const Logo = ({width='w-[200px]', height='h-[35px]', position=''}) => {
    return (
        <div className={`${position}`}>
            <Image src={logo} alt="Logo" className={`${width} ${height}`} />

        </div>
    );
};

export default Logo;