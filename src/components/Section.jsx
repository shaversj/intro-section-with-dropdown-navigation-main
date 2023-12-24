import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";

const Section = () => {
  return (
    <>
      <section className={"px-4 lg:order-1 lg:basis-[50%] lg:px-0 lg:pt-14"}>
        <h1 className={"pt-12 text-center text-4xl font-semibold lg:pr-12 lg:text-left lg:text-[78.2px] lg:font-bold lg:leading-[5rem]"}>
          Make remote work
        </h1>
        <p
          className={
            "pt-5 text-center text-[1.02rem] font-normal leading-[1.65rem] text-medium-gray lg:pr-24 lg:pt-12 lg:text-left lg:text-[18.3px] lg:leading-[1.75rem]"
          }
        >
          Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
        </p>

        <div className={"flex justify-center pt-7 lg:justify-start lg:pt-14"}>
          <button className={"rounded-2xl bg-black px-[1.4rem] py-3 lg:px-[2.05rem] lg:py-[1rem]"}>
            <span className={"font-semibold leading-3 text-almost-white lg:text-[17px]"}>Learn more</span>
          </button>
        </div>

        <div className={"flex items-center justify-between space-x-5 pb-[92px] pt-12 lg:pr-24 lg:pt-[6.4rem]"}>
          <img className={"h-[15px] w-[80px] lg:h-[21px] lg:w-[115px]"} src={databiz} alt={""} />
          <img className={"h-[28px] w-[53px] lg:h-[38px] lg:w-[74px]"} src={audiophile} alt={""} />
          <img className={"h-[15px] w-[65px] lg:h-[22px] lg:w-[90px]"} src={meet} alt={""} />
          <img className={"h-[18px] w-[59px] lg:h-[25px] lg:w-[84px]"} src={maker} alt={""} />
        </div>
      </section>
    </>
  );
};

export default Section;
