import NavItems from "./NavItems.jsx";
import useWindowDimensions from "../hooks/useWindowDimensions.jsx";
import menu from "../assets/images/icon-menu.svg";
import closeMenu from "/src/assets/images/icon-close-menu.svg";
import logo from "/src/assets/images/logo.svg";

const Nav = ({ handleFeatureMenu, showFeatureMenu, handleCompanyMenu, showCompanyMenu, handleMobileMenu, showMobileMenu }) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <nav className={"relative flex w-full lg:items-center lg:gap-x-[2.4rem]"}>
        <img className={"h-[35px] w-[100px] lg:pt-2"} src={logo} alt={""} />
        {width < 1440 ? (
          <>
            <div className={"ml-auto"}>
              <button onClick={handleMobileMenu}>
                <img className={""} src={menu} alt={""} />
              </button>
            </div>

            {showMobileMenu && (
              <>
                <div className={"absolute right-[-1rem] top-[-1.5rem] min-h-[796px] w-[239px] bg-almost-white"}>
                  <div className={"flex"}>
                    <div className={"ml-auto"}>
                      <button className={"p-6"} onClick={handleMobileMenu}>
                        <img className={""} src={closeMenu} alt={""} />
                      </button>
                    </div>
                  </div>
                  <NavItems
                    handleFeatureMenu={handleFeatureMenu}
                    showFeatureMenu={showFeatureMenu}
                    handleCompanyMenu={handleCompanyMenu}
                    showCompanyMenu={showCompanyMenu}
                    handleMobileMenu={handleMobileMenu}
                    showMobileMenu={showMobileMenu}
                  />
                </div>
              </>
            )}
          </>
        ) : (
          <NavItems
            handleFeatureMenu={handleFeatureMenu}
            showFeatureMenu={showFeatureMenu}
            handleCompanyMenu={handleCompanyMenu}
            showCompanyMenu={showCompanyMenu}
            handleMobileMenu={handleMobileMenu}
            showMobileMenu={showMobileMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Nav;
