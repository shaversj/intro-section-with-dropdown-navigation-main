import Button from "./Button.jsx";
import FeaturesMenu from "./FeaturesMenu.jsx";
import CompanyMenu from "./CompanyMenu.jsx";
import useWindowDimensions from "./useWindowDimensions.jsx";

const NavItems = ({ handleFeatureMenu, isFeatureMenuOpen, handleCompanyMenu, isCompanyMenuOpen, handleMobileMenu, isMobileMenuOpen }) => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className={"gap-x-[2.4rem] space-y-6 lg:flex lg:gap-x-[1.2rem] lg:space-y-0"}>
        <div className={"relative lg:-ml-3"}>
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

      {(isMobileMenuOpen || width > 1440) && (
        <div className={"pt-10 lg:ml-auto lg:flex lg:items-center lg:justify-end lg:gap-x-[2.4rem] lg:pt-0"}>
          <div className={"flex justify-center lg:flex-none"}>
            <button className={"group relative flex items-center space-x-2"}>
              <span className={"text-sm font-medium leading-none text-medium-gray hover:text-black"}>Login</span>
            </button>
          </div>

          <div className={"px-5 pt-5 lg:px-0 lg:pt-0"}>
            <button className={"relative flex w-full items-center justify-center space-x-2 rounded-2xl border-2 border-medium-gray px-0 py-[.75rem] hover:border-black lg:px-[1.32rem]"}>
              <span className={"text-sm font-medium leading-none text-medium-gray hover:text-black"}>Register</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
