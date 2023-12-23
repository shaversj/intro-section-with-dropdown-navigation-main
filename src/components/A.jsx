const A = ({ text, href, varient }) => {
  const containerStyles = {
    base: "flex items-center space-x-2",
    primary: "pl-5",
    secondary: "",
  };

  const spanStyles = {
    base: "font-medium leading-none text-medium-gray hover:text-black",
    primary: "lg:text-sm",
    secondary: "text-sm",
  };

  return (
    <a className={`${containerStyles["base"]} ${containerStyles[varient]}`} href={href}>
      <span className={`${spanStyles["base"]} ${spanStyles[varient]}`}>{text}</span>
    </a>
  );
};

export default A;
