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
import {useState} from "react"

function App() {
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false)
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false)

  return (
    <>
      <div className={"bg-black min-h-screen grid place-items-center"}>
        <div className={"bg-almost-white max-w-screen-sm mx-auto lg:max-w-screen-lg lg:h-[900px] w-full font-Epilogue"}>

          <header className={"lg:px-[40px] lg:pt-[20px] sm:px-4 sm:py-6 flex lg:gap-x-[2rem] items-center"}>

            <svg className={"w-[100px] h-[35px] pt-2"}  xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8.852 19.42c-1.108 0-2.175-.128-3.202-.385a9.648 9.648 0 0 1-2.756-1.137c-.811-.502-1.453-1.13-1.925-1.882-.473-.752-.709-1.63-.709-2.633v-.316h5.39v.246c0 .676.3 1.172.901 1.487.601.315 1.415.472 2.441.472a7.08 7.08 0 0 0 1.55-.166c.495-.11.903-.291 1.224-.542.321-.251.482-.569.482-.954 0-.618-.342-1.056-1.024-1.313-.683-.256-1.777-.513-3.282-.77a21.716 21.716 0 0 1-2.59-.595A10.937 10.937 0 0 1 2.938 9.91 5.28 5.28 0 0 1 1.17 8.28C.727 7.622.505 6.82.505 5.875c0-1.26.382-2.322 1.146-3.185.764-.863 1.782-1.517 3.054-1.96C5.977.287 7.377.065 8.905.065c1.458 0 2.818.242 4.078.726 1.26.484 2.28 1.179 3.062 2.083.782.904 1.172 1.992 1.172 3.264v.245H11.88v-.21c0-.467-.149-.846-.446-1.138a2.804 2.804 0 0 0-1.129-.656 4.616 4.616 0 0 0-1.418-.219c-.443 0-.9.05-1.373.149-.473.099-.872.262-1.199.49-.327.227-.49.545-.49.954 0 .396.175.72.525.97.35.252.84.456 1.47.613.63.158 1.36.306 2.188.447.781.128 1.607.306 2.476.533.869.228 1.686.549 2.45.963a5.34 5.34 0 0 1 1.855 1.627c.472.671.709 1.52.709 2.546 0 1.062-.245 1.972-.735 2.73a5.607 5.607 0 0 1-1.987 1.847 10.04 10.04 0 0 1-2.782 1.05c-1.021.227-2.068.341-3.142.341ZM33.48 19V8.92c0-.77-.1-1.473-.298-2.109a2.965 2.965 0 0 0-1.067-1.531c-.513-.385-1.254-.577-2.223-.577-.84 0-1.566.192-2.178.577a3.754 3.754 0 0 0-1.41 1.61c-.326.688-.49 1.482-.49 2.38L24.31 8.185c0-1.61.35-3.022 1.05-4.235a7.627 7.627 0 0 1 2.844-2.853C29.398.41 30.726.066 32.183.066c1.53 0 2.786.306 3.772.919.986.612 1.721 1.464 2.205 2.555.484 1.09.726 2.365.726 3.824V19H33.48Zm-13.09 0V.415h5.425V19h-5.425Zm28.389.385c-1.354 0-2.558-.216-3.614-.648-1.056-.431-1.881-1.055-2.476-1.872-.595-.817-.893-1.808-.893-2.975 0-1.318.362-2.392 1.085-3.22.724-.828 1.683-1.461 2.879-1.899a15.898 15.898 0 0 1 3.894-.866c2.041-.198 3.45-.38 4.226-.542.776-.164 1.164-.45 1.164-.858V6.47c0-.688-.33-1.23-.989-1.627-.66-.397-1.578-.595-2.756-.595-1.249 0-2.202.224-2.861.673-.66.45-.99 1.135-.99 2.056H42.11c0-1.493.406-2.753 1.217-3.78.81-1.026 1.91-1.805 3.298-2.336 1.389-.53 2.958-.796 4.708-.796 1.633 0 3.144.248 4.532.744 1.389.496 2.506 1.24 3.352 2.231.845.992 1.268 2.252 1.268 3.78v8.032c0 .479.015.937.044 1.374.03.438.096.837.201 1.199.117.408.263.747.438 1.015.175.268.32.455.437.56h-5.337a3.723 3.723 0 0 1-.376-.508 3.962 3.962 0 0 1-.43-.892 7.195 7.195 0 0 1-.305-1.234 9.674 9.674 0 0 1-.097-1.461l1.12.77c-.326.77-.854 1.432-1.583 1.986-.73.554-1.593.98-2.59 1.278-.998.297-2.074.446-3.23.446Zm1.452-4.06a6.14 6.14 0 0 0 2.389-.464A4.104 4.104 0 0 0 54.43 13.4c.467-.665.7-1.534.7-2.608V8.92l1.348 1.313c-.77.28-1.66.51-2.669.69-1.01.182-2.015.324-3.019.43-1.19.116-2.08.317-2.668.603-.59.286-.884.767-.884 1.444 0 .642.25 1.123.752 1.444.502.32 1.249.481 2.24.481Zm13.742 11.323V.415h5.442v26.233h-5.442Zm11.182-7.228a7.325 7.325 0 0 1-4.042-1.181c-1.225-.788-2.205-1.85-2.94-3.185-.735-1.336-1.103-2.838-1.103-4.507v-.28l2.345-.052v.21c0 .863.21 1.619.63 2.266.42.648.963 1.146 1.628 1.496.665.35 1.359.526 2.082.526 1.19 0 2.226-.412 3.106-1.234.881-.823 1.322-2.109 1.322-3.859s-.438-3.025-1.313-3.824c-.875-.799-1.913-1.199-3.115-1.199-.723 0-1.417.173-2.082.517a4.308 4.308 0 0 0-1.628 1.461c-.42.63-.63 1.383-.63 2.257l-2.345-.14c0-1.68.368-3.164 1.103-4.453.735-1.29 1.715-2.307 2.94-3.054a7.619 7.619 0 0 1 4.042-1.12c1.505 0 2.911.37 4.218 1.111 1.306.741 2.365 1.823 3.176 3.247.81 1.423 1.216 3.155 1.216 5.197 0 2.135-.396 3.932-1.19 5.39-.793 1.458-1.843 2.558-3.15 3.299a8.51 8.51 0 0 1-4.27 1.111Z"
                  fill="#151515"/>
            </svg>
            <nav className={"flex lg:gap-x-[2.4rem] lg:items-center w-full"}>


              {/*Mobile Nav Bar*/}
              <div className={"lg:hidden ml-auto"}>
                <img className={"ml-auto"} src={menu} alt={""}/>
              </div>

              {/*Left side Desktop Nav Bar*/}
              <div className={"sm:hidden lg:flex gap-x-[2.4rem]"}>
                <div className={"pl-[1.5rem]"}>
                  <button className={"group flex items-center space-x-2 "}
                          onClick={() => setIsFeatureMenuOpen(!isFeatureMenuOpen)}>
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>Features</span>
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
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>Company</span>
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
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>Careers</span>
                  </button>
                </div>

                <div>
                  <button className={"group flex items-center space-x-2 relative"}>
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>About</span>
                  </button>
                </div>


              </div>
              {/*Right side Desktop Nav Bar*/}
              <div className={"hidden lg:flex ml-auto  justify-end items-center gap-x-[2.4rem]"}>
                <div className={""}>
                  <button className={"group flex items-center space-x-2 relative"}>
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>Login</span>
                  </button>
                </div>

                <div className={""}>
                  <button
                      className={"rounded-2xl hover:border-2 px-[1.35rem] py-[.83rem] border border-black flex items-center space-x-2 relative"}>
                    <span className={"text-medium-gray font-medium hover:text-black text-sm leading-none"}>Register</span>
                  </button>

                </div>
              </div>

            </nav>


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
