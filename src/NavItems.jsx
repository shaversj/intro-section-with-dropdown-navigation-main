import Button from "./Button.jsx";
import FeaturesMenu from "./FeaturesMenu.jsx";
import CompanyMenu from "./CompanyMenu.jsx";
import useWindowDimensions from "./useWindowDimensions.jsx";

const NavItems = ({ handleFeatureMenu, isFeatureMenuOpen, handleCompanyMenu, isCompanyMenuOpen, handleMobileMenu, isMobileMenuOpen }) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className={"gap-x-[2.4rem] space-y-6 lg:flex"}>
        <div className={"relative lg:pl-[1.5rem]"}>
          <Button buttonText={"Features"} onclick={handleFeatureMenu} hasSubMenu={true} isMenuOpen={isFeatureMenuOpen} />
          {isFeatureMenuOpen && <FeaturesMenu />}
        </div>

        <div>
          <Button buttonText={"Company"} onclick={handleCompanyMenu} hasSubMenu={true} isMenuOpen={isCompanyMenuOpen} />
          {isCompanyMenuOpen && <CompanyMenu />}
        </div>

        <div>
          <Button buttonText={"Careers"} hasSubMenu={false} />
        </div>

        <div>
          <Button buttonText={"About"} hasSubMenu={false} />
        </div>
      </div>

      {isMobileMenuOpen ||
        (width > 1440 && (
          <div className={"ml-auto items-center justify-end gap-x-[2.4rem] lg:flex"}>
            <div className={""}>
              <button className={"group relative flex items-center space-x-2"}>
                <span className={"text-sm font-medium leading-none text-medium-gray hover:text-black"}>Login</span>
              </button>
            </div>

            <div className={""}>
              <button className={"relative flex items-center space-x-2 rounded-2xl border border-black px-[1.35rem] py-[.83rem] hover:border-2"}>
                <span className={"text-sm font-medium leading-none text-medium-gray hover:text-black"}>Register</span>
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default NavItems;
