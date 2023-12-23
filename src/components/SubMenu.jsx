import SubMenuItem from "./SubMenuItem.jsx";

const SubMenu = ({ menuData, subMenuName }) => {
  const baseStyle = "space-y-2 rounded-xl py-5 pl-11 text-[14px] font-medium text-medium-gray drop-shadow-2xl lg:absolute lg:bg-white lg:px-5 ";
  let menuTypeStyle = "";

  switch (subMenuName) {
    case "Feature":
      menuTypeStyle = "lg:left-[-3rem] lg:top-[2rem] lg:w-[152px]";
      break;
    case "Company":
      menuTypeStyle = "lg:left-[16rem] lg:mt-[.7rem]";
      break;
  }

  const subMenuContainerStyle = baseStyle.concat(menuTypeStyle);

  return (
    <>
      <div className={subMenuContainerStyle}>
        {menuData && menuData["items"].map((item) => <SubMenuItem key={item.id} itemText={item.name} imagePath={item.imagePath} />)}
      </div>
    </>
  );
};

export default SubMenu;
