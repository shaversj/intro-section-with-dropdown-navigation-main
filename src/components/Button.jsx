const Button = ({ buttonText, onclick, hasSubMenu = false, isMenuOpen = false, variant }) => {
  const buttonContainerStyles = {
    base: "",
    primary: "group flex items-center space-x-2 sm:pl-5",
    secondary: "flex w-full items-center justify-center space-x-2 rounded-2xl border-2 border-medium-gray px-0 py-[.75rem] hover:border-black lg:px-[1.32rem]",
  };

  const buttonSpanStyles = {
    base: "font-medium leading-none text-medium-gray hover:text-black",
    primary: "lg:text-sm",
    secondary: "text-sm",
  };

  return (
    <>
      <button className={`${buttonContainerStyles[variant]}`} onClick={onclick}>
        <span className={`${buttonSpanStyles["base"]} ${buttonSpanStyles[variant]}`}>{buttonText}</span>
        {hasSubMenu ? (
          <>
            {isMenuOpen ? (
              <svg className={"relative stroke-medium-gray group-hover:stroke-black"} width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
              </svg>
            ) : (
              <>
                <svg className={"relative stroke-medium-gray group-hover:stroke-black"} width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
                </svg>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </button>
    </>
  );
};

export default Button;
