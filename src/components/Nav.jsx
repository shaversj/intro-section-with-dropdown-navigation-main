import NavItems from "./NavItems.jsx";
import useWindowDimensions from "../hooks/useWindowDimensions.jsx";
import menu from "../assets/images/icon-menu.svg";
import closeMenu from "/src/assets/images/icon-close-menu.svg";
import logo from "/src/assets/images/logo.svg";

const Nav = ({ handleFeatureMenu, isFeatureMenuOpen, handleCompanyMenu, isCompanyMenuOpen, handleMobileMenu, isMobileMenuOpen }) => {
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

            {isMobileMenuOpen && (
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
                    isFeatureMenuOpen={isFeatureMenuOpen}
                    handleCompanyMenu={handleCompanyMenu}
                    isCompanyMenuOpen={isCompanyMenuOpen}
                    handleMobileMenu={handleMobileMenu}
                    isMobileMenuOpen={isMobileMenuOpen}
                  />
                </div>
              </>
            )}
          </>
        ) : (
          <NavItems
            handleFeatureMenu={handleFeatureMenu}
            isFeatureMenuOpen={isFeatureMenuOpen}
            handleCompanyMenu={handleCompanyMenu}
            isCompanyMenuOpen={isCompanyMenuOpen}
            handleMobileMenu={handleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        )}
      </nav>
    </>
  );
};

export default Nav;
