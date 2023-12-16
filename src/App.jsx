import databiz from '/src/assets/images/client-databiz.svg'
import audiophile from '/src/assets/images/client-audiophile.svg'
import meet from '/src/assets/images/client-meet.svg'
import maker from '/src/assets/images/client-maker.svg'
import heroMobile from '/src/assets/images/image-hero-mobile.png'
import heroDesktop from '/src/assets/images/image-hero-desktop.png'

function App() {


  return (
    <>
      <div className={"bg-black min-h-screen grid place-items-center"}>
        <div className={"bg-almost-white max-w-screen-sm mx-auto lg:max-w-screen-lg lg:h-[900px] w-full font-Epilogue"}>
          {/*<header>*/}
          {/*  <nav>*/}
          {/*    <a>Features</a>*/}
          {/*    <a>Company</a>*/}
          {/*    <a>Careers</a>*/}
          {/*    <a>About</a>*/}

          {/*    <div>*/}
          {/*      <a>Login</a>*/}
          {/*      <a>Register</a>*/}
          {/*    </div>*/}
          {/*  </nav>*/}
          {/*</header>*/}

          {/*// lg:pl-[170px] lg:pr-[128px]*/}

          <main className={"lg:flex lg:pl-[170px] lg:pr-[128px] lg:gap-36"}>
            <picture className={"lg:basis-1/2 lg:order-2"}>
              <source className={""} srcSet={heroDesktop} media={"(min-width: 1440px)"} />
              <img className={"lg:w-[485px] lg:h-[648px]"} src={heroMobile} alt={""}/>
            </picture>

            <div className={"lg:basis-1/2 px-4 lg:order-1 lg:px-0 lg:pt-14"}>
              <h1 className={"text-center text-4xl font-semibold pt-12 lg:text-[75px] lg:leading-[4.8rem] lg:font-bold lg:text-left"}>Make remote work</h1>
              <p className={"text-medium-gray text-center font-normal pt-5 lg:text-left lg:text-xl lg:pt-14"}>
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
              </p>

              <div className={"flex pt-7 lg:pt-14"}>
                <button className={"bg-black px-[1.4rem] py-3 rounded-xl lg:px-[2.05rem] lg:py-[1rem]"}>
                  <span className={"text-almost-white font-semibold lg:text-[17px] leading-3"}>Learn more</span>
                </button>
              </div>

              <div className={"flex items-center space-x-5 pt-12 pb-[92px] lg:pt-[6.8rem] justify-between"}>
                <img className={"w-[80px] h-[15px] lg:w-[115px] lg:h-[21px]"} src={databiz} alt={""}/>
                <img className={"w-[53px] h-[28px] lg:w-[74px] lg:h-[38px]"} src={audiophile} alt={""}/>
                <img className={"w-[65px] h-[15px] lg:w-[90px] lg:h-[22px]"} src={meet} alt={""}/>
                <img className={"w-[59px] h-[18px] lg:w-[84px] lg:h-[25px]"} src={maker} alt={""}/>
              </div>
            </div>


          </main>


        </div>
      </div>
    </>
  )
}

export default App
