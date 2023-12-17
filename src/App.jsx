import databiz from '/src/assets/images/client-databiz.svg'
import audiophile from '/src/assets/images/client-audiophile.svg'
import meet from '/src/assets/images/client-meet.svg'
import maker from '/src/assets/images/client-maker.svg'
import heroMobile from '/src/assets/images/image-hero-mobile.png'
import heroDesktop from '/src/assets/images/image-hero-desktop.png'
import logo from '/src/assets/images/logo.svg'
import menu from '/src/assets/images/icon-menu.svg'
import arrowDown from '/src/assets/images/icon-arrow-down.svg'
import arrowUp from '/src/assets/images/icon-arrow-up.svg'
import iconTodo from '/src/assets/images/icon-todo.svg'
import iconCalendar from '/src/assets/images/icon-calendar.svg'
import iconReminder from '/src/assets/images/icon-reminders.svg'
import iconPlanning from '/src/assets/images/icon-planning.svg'
import {useState} from "react";

function App() {
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false)
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false)

  return (
    <>
      <div className={"bg-black min-h-screen grid place-items-center"}>
        <div className={"bg-almost-white max-w-screen-sm mx-auto lg:max-w-screen-lg lg:h-[900px] w-full font-Epilogue"}>

          <header className={"lg:px-[40px] lg:py-[24px] lg:flex lg:items-center px-4 py-6"}>
            {/*<div className={"flex items-center justify-between px-4 py-6"}>*/}
            {/*  <img src={logo} alt={"Snap Logo"}/>*/}
            {/*  <img src={menu} alt={"Snap Logo"}/>*/}
            {/*</div>*/}
            {/*<img src={logo} alt={"Snap Logo"}/>*/}
            <nav className={"flex lg:gap-x-[2.4rem] lg:items-start"}>
              <img className={""} src={logo} alt={"Snap Logo"}/>

              {/*Mobile Nav Bar*/}
              <div className={"lg:hidden ml-auto"}>
                <img className={"ml-auto"} src={menu} alt={""}/>
              </div>

              {/*Left side Desktop Nav Bar*/}
              <div className={"sm:hidden lg:flex gap-x-[2.4rem]"}>
                <div className={"pl-[1.5rem]"}>
                  <button className={"group flex items-center space-x-2 "}
                          onClick={() => setIsFeatureMenuOpen(!isFeatureMenuOpen)}>
                    <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>Features</span>
                    <svg className={"relative stroke-medium-gray group-hover:stroke-black"} width="10" height="6"
                         xmlns="http://www.w3.org/2000/svg">
                      <path strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>

                  {isFeatureMenuOpen &&
                      (
                          <>
                            <div
                                className={"absolute left-[24.5rem] top-[17.5rem] bg-white rounded-2xl drop-shadow-2xl px-5 py-5 space-y-2 text-[14px] text-medium-gray"}>
                              <div className={"flex justify-start items-center space-x-4"}>
                                <img className={"scale-100 w-[16px] h-[16px]"} src={iconTodo} alt={""}/>
                                <a className={" "} href={""}>Todo List</a>
                              </div>

                              <div className={"flex justify-start items-center space-x-4"}>
                                <img className={"scale-100 w-[16px] h-[16px]"} src={iconCalendar} alt={""}/>
                                <a className={""} href={""}>Calendar</a>
                              </div>

                              <div className={"flex justify-start items-center space-x-4"}>
                                <img className={"scale-100 w-[16px] h-[16px]"} src={iconReminder} alt={""}/>
                                <a className={""} href={""}>Reminders</a>
                              </div>

                              <div className={"flex justify-start items-center space-x-4"}>
                                <img className={"scale-100 w-[16px] h-[16px]"} src={iconPlanning} alt={""}/>
                                <a className={""} href={""}>Planning</a>
                              </div>

                            </div>
                          </>
                      )}
                </div>


                <div>
                  <button className={"group flex items-center space-x-2 relative"}
                          onClick={() => setIsCompanyMenuOpen(!isCompanyMenuOpen)}>
                    <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>Company</span>
                    <svg className={"stroke-medium-gray group-hover:stroke-black"} width="10" height="6"
                         xmlns="http://www.w3.org/2000/svg">
                      <path strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>

                  {isCompanyMenuOpen &&
                      (
                          <>
                            <div
                                className={"absolute bg-white rounded-2xl drop-shadow-2xl px-5 py-5 space-y-2 text-[14px] text-medium-gray"}>


                              <div className={"flex justify-start items-center"}>

                                <a className={""} href={""}>History</a>
                              </div>

                              <div className={"flex justify-start items-center"}>

                                <a className={""} href={""}>Our Team</a>
                              </div>

                              <div className={"flex justify-start items-center"}>

                                <a className={""} href={""}>Blog</a>
                              </div>

                            </div>
                          </>
                      )}

                </div>

                <div>
                  <button className={"group flex items-center space-x-2 relative"}>
                    <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>Careers</span>
                  </button>
                </div>

                <div>
                  <button className={"group flex items-center space-x-2 relative"}>
                    <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>About</span>
                  </button>
                </div>


              </div>


            </nav>

            {/*Right side Desktop Nav Bar*/}
            <div className={"hidden lg:flex ml-auto items-center gap-x-[2.4rem]"}>
              <div>
                <button className={"group flex items-center space-x-2 relative"}>
                  <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>Login</span>
                </button>
              </div>

              <div className={""}>
                <button
                    className={"rounded-2xl hover:border-2 px-[1.35rem] py-[0.6rem] border border-black flex items-center space-x-2 relative"}>
                  <span className={"text-medium-gray font-medium hover:text-black text-[14px]"}>Register</span>
                </button>

              </div>
            </div>

          </header>


          <main className={"lg:flex lg:pl-[165px] lg:pr-[128px] lg:pt-[2.7rem]"}>
            <picture className={"lg:basis-[50%] lg:order-2 lg:pl-[90px]"}>
              <source className={""} srcSet={heroDesktop} media={"(min-width: 1440px)"}/>
              <img className={"lg:w-[481px] lg:h-[641px]"} src={heroMobile} alt={""}/>
            </picture>

            <div className={"lg:basis-[50%] px-4 lg:order-1 lg:px-0 lg:pt-14"}>
              <h1 className={"text-center text-4xl font-semibold pt-12 lg:text-[78.2px] lg:font-bold lg:leading-[5rem] lg:text-left lg:pr-12"}>Make
                remote work</h1>
              <p className={"text-medium-gray text-center font-normal leading-[1.65rem] lg:leading-[1.75rem] text-[1.02rem] pt-5 lg:text-left lg:text-[18.3px] lg:pt-12 lg:pr-24"}>
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
              </p>

              <div className={"flex pt-7 lg:pt-14 justify-center lg:justify-start"}>
                <button className={"bg-black px-[1.4rem] py-3 rounded-xl lg:px-[2.05rem] lg:py-[1rem]"}>
                  <span className={"text-almost-white font-semibold lg:text-[17px] leading-3"}>Learn more</span>
                </button>
              </div>

              <div className={"flex items-center space-x-5 pt-12 pb-[92px] lg:pt-[6.4rem] justify-between lg:pr-24"}>
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
