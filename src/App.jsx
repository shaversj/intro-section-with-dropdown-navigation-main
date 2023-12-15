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
        <div className={"bg-almost-white max-w-screen-sm mx-auto font-Epilogue"}>
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

          <main className={""}>
            <picture>
              <source srcSet={heroDesktop} media={"(min-width: 1440px)"} />
              <img src={heroMobile} alt={""}/>
            </picture>

            <div className={"px-4"}>
              <h1 className={"text-center text-4xl font-semibold pt-12"}>Make remote work</h1>
              <p className={"text-medium-gray text-center font-normal pt-5"}>
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
              </p>

              <div className={"flex justify-center pt-7"}>
                <button className={"bg-black px-[1.4rem] py-3 rounded-xl"}>
                  <span className={"text-almost-white font-semibold"}>Learn more</span>
                </button>
              </div>

            </div>


          </main>

          <footer className={"flex space-x-5 pt-12 px-4 pb-[92px] justify-between"}>
            <img className={"w-[80px] h-[15px]"} src={databiz} alt={""}/>
            <img className={"w-[53px] h-[28px]"} src={audiophile} alt={""}/>
            <img className={"w-[65px] h-[15px]"} src={meet} alt={""}/>
            <img className={"w-[59px] h-[18px]"} src={maker} alt={""}/>
          </footer>

        </div>
      </div>
    </>
  )
}

export default App
