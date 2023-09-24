import InputWithButton from "./InputWithButton";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h3 className="text-5xl font-bold text-center flex flex-col justify-center items-center">
        I Grow By Helping People In Need
      </h3>
      <div className="mt-10 flex items-center justify-center">
        <InputWithButton></InputWithButton>
      </div>
    </div>
  );
};

export default Hero;
