import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="w-9/12 mx-auto rounded-3xl">
      <div className="w-full mx-auto backdrop-blur-3xl py-6 rounded-3xl">
        <div className="lg:grid grid-cols-3 mx-auto text-center gap-16 p-2">
          <div className="text-center">
            <h2 className="text-[85px] text-primary italic font-semibold">
              <CountUp end={4} duration={2} />+
            </h2>
            <p className="text-2xl text-base-100 font-semibold">Years</p>
          </div>
          <div className="text-center">
            <h2 className="text-[85px] text-primary italic font-semibold">
              <CountUp end={120} duration={3} />+
            </h2>
            <p className="text-2xl text-base-100 font-semibold">
              Hours in-person teacher training program
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[85px] text-primary italic font-semibold">
              <CountUp end={6500} duration={5} />+
            </h2>

            <p className="text-2xl text-base-100 font-semibold">
              Graduate degrees in TESOL & Linguistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
