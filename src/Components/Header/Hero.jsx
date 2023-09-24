import InputWithButton from "./InputWithButton";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 lg:mt-40">
      <h3 className="text-3xl font-bold text-center flex flex-col justify-center items-center sm:px-0 md:px-5 lg:px-0 lg:text-5xl">
        I Grow By Helping People In Need
      </h3>
      <div className="mt-10 flex items-center justify-center">
        <InputWithButton></InputWithButton>
      </div>
    </div>
  );
};

export default Hero;
