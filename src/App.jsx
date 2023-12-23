import { useState } from "react";
import Nav from "./components/Nav.jsx";
import databiz from "/src/assets/images/client-databiz.svg";
import audiophile from "/src/assets/images/client-audiophile.svg";
import meet from "/src/assets/images/client-meet.svg";
import maker from "/src/assets/images/client-maker.svg";
import heroMobile from "/src/assets/images/image-hero-mobile.png";
import heroDesktop from "/src/assets/images/image-hero-desktop.png";

function App() {
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleFeatureMenu() {
    setIsFeatureMenuOpen(!isFeatureMenuOpen);
  }

  function handleCompanyMenu() {
    setIsCompanyMenuOpen(!isCompanyMenuOpen);
  }

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"mx-auto w-full max-w-screen-sm bg-almost-white font-Epilogue lg:h-[900px] lg:max-w-screen-lg"}>
          <header className={"flex items-center sm:px-4 sm:py-6 lg:gap-x-[1.5rem] lg:px-[40px] lg:pt-[20px]"}>
            <Nav
              handleFeatureMenu={handleFeatureMenu}
              handleCompanyMenu={handleCompanyMenu}
              handleMobileMenu={handleMobileMenu}
              isFeatureMenuOpen={isFeatureMenuOpen}
              isCompanyMenuOpen={isCompanyMenuOpen}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </header>

          <main className={"lg:flex lg:pl-[165px] lg:pr-[128px] lg:pt-[2.7rem]"}>
            <picture className={"lg:order-2 lg:basis-[50%] lg:pl-[90px]"}>
              <source className={""} srcSet={heroDesktop} media={"(min-width: 1440px)"} />
              <img className={"lg:h-[641px] lg:w-[481px]"} src={heroMobile} alt={""} />
            </picture>

            <div className={"px-4 lg:order-1 lg:basis-[50%] lg:px-0 lg:pt-14"}>
              <h1
                className={
                  "pt-12 text-center text-4xl font-semibold lg:pr-12 lg:text-left lg:text-[78.2px] lg:font-bold lg:leading-[5rem]"
                }
              >
                Make remote work
              </h1>
              <p
                className={
                  "pt-5 text-center text-[1.02rem] font-normal leading-[1.65rem] text-medium-gray lg:pr-24 lg:pt-12 " +
                  "lg:text-left lg:text-[18.3px] lg:leading-[1.75rem]"
                }
              >
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
                productivity soar.
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
