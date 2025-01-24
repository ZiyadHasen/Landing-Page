import assets from "@/assets";
import Image from "next/image";

const MainHeader = () => {
  return (
    <div className="relative flex justify-center items-center w-full max-w-[1012px] mx-auto">
      <Image
        src={assets.starMain}
        alt="Star-main"
        className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 z-1"
      />

      <div className="text-center">
        <h3 className="relative text-[46px] -tracking-[2%] leading-[60px] font-bold text-center">
          TURN YOUR BORING E-LEARNING <br />
          INTO AI LIVE INTERACTIVE EXPERIENCES
          <Image
            src={assets.star}
            alt="Star"
            className="absolute right-[-32px] bottom-1/2"
          />
        </h3>
        <p className="mt-4 font-medium text-[20px] leading-[30px] text-[#003119] opacity-[60%]">
          Give your students the feeling of being on a 1-1 Zoom call with their
          instructors, <br /> significantly improving engagement rates and
          increasing your revenues.
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
