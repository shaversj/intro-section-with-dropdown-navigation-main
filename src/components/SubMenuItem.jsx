const SubMenuItem = ({ itemText, imagePath }) => {
  const subMenuContainer = imagePath ? "flex items-center justify-start space-x-4" : "flex items-center justify-start";
  return (
    <>
      <div className={subMenuContainer}>
        <img className={"h-[16px] w-[16px] scale-100 [&:not([src])]:hidden"} src={imagePath} alt={""} />
        <a className={""} href={""}>
          {itemText}
        </a>
      </div>
    </>
  );
};

export default SubMenuItem;
