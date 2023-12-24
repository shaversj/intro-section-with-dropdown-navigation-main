import { useState } from "react";
import Nav from "./Nav.jsx";

const Header = () => {
  const [showFeatureMenu, setShowFeatureMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleFeatureMenu() {
    setShowFeatureMenu(!showFeatureMenu);
  }

  function handleCompanyMenu() {
    setShowCompanyMenu(!showCompanyMenu);
  }

  function handleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <>
      <header className={"flex items-center sm:px-4 sm:py-6 lg:gap-x-[1.5rem] lg:px-[40px] lg:pt-[20px]"}>
        <Nav
          handleFeatureMenu={handleFeatureMenu}
          handleCompanyMenu={handleCompanyMenu}
          handleMobileMenu={handleMobileMenu}
          showFeatureMenu={showFeatureMenu}
          showCompanyMenu={showCompanyMenu}
          showMobileMenu={showMobileMenu}
        />
      </header>
    </>
  );
};

export default Header;
