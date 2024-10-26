import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="w-full bg-black-500 p-4 text-center text-white font-bold shadow-lg">
        ⚠️ This site is a clone website. It is not the real, official site. Its
        purpose is to look like the official site for portfolio purposes. This
        site is not for active use. Do NOT enter your credentials or share any
        personal information ⚠️
      </div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
