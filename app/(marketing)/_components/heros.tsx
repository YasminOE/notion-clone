import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents illustration"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents illustration"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="Reading illustration"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading illustration"
          />
        </div>
      </div>
      <a href="http://www.freepik.com">Designed by Freepik</a>
    </div>
  );
};
