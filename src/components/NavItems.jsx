import SubMenu from "./SubMenu.jsx";
import A from "./A.jsx";
import Button from "./Button.jsx";
import useWindowDimensions from "../hooks/useWindowDimensions.jsx";

const NavItems = ({ handleFeatureMenu, showFeatureMenu, handleCompanyMenu, showCompanyMenu, handleMobileMenu, showMobileMenu }) => {
  const { height, width } = useWindowDimensions();

  const featureData = {
    items: [
      { id: 1, name: "Todo List", imagePath: "./icon-todo.svg" },
      { id: 2, name: "Calendar", imagePath: "./icon-calendar.svg" },
      { id: 3, name: "Reminders", imagePath: "./icon-reminders.svg" },
      { id: 4, name: "Planning", imagePath: "./icon-planning.svg" },
    ],
  };

  const companyData = {
    items: [
      { id: 1, name: "History" },
      { id: 2, name: "Our Team" },
      { id: 3, name: "Blog" },
    ],
  };

  return (
    <>
      <div className={"gap-x-[2.4rem] space-y-6 lg:flex lg:gap-x-[1.2rem] lg:space-y-0"}>
        <div className={"relative lg:-ml-3"}>
          <Button variant={"primary"} buttonText={"Features"} onclick={handleFeatureMenu} hasSubMenu={true} isMenuOpen={showFeatureMenu} />
          {showFeatureMenu && <SubMenu subMenuName={"Feature"} menuData={featureData} />}
        </div>
        <div>
          <Button variant={"primary"} buttonText={"Company"} onclick={handleCompanyMenu} hasSubMenu={true} isMenuOpen={showCompanyMenu} />
          {showCompanyMenu && <SubMenu subMenuName={"Company"} menuData={companyData} />}
        </div>
        <div>
          <A text={"Careers"} href={"/careers"} varient={"primary"} />
        </div>
        <div>
          <A text={"About"} href={"/about"} varient={"primary"} />
        </div>
      </div>

      {(showMobileMenu || width >= 1440) && (
        <div className={"pt-10 lg:ml-auto lg:flex lg:items-center lg:justify-end lg:gap-x-[2.4rem] lg:pt-0"}>
          <div className={"flex justify-center lg:flex-none"}>
            <A text={"Login"} href={"/login"} varient={"secondary"} />
          </div>
          <div className={"px-5 pt-5 lg:px-0 lg:pt-0"}>
            <Button variant={"secondary"} buttonText={"Register"} hasSubMenu={false} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavItems;
