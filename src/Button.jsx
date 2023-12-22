const Button = ({ buttonText, onclick, hasSubMenu = false }) => {
  return (
    <>
      <button className={"group flex items-center space-x-2 sm:pl-5"} onClick={onclick}>
        <span className={"font-medium leading-none text-medium-gray hover:text-black lg:text-sm"}>{buttonText}</span>
        {hasSubMenu && (
          <>
            <svg className={"group- relative stroke-medium-gray group-hover:stroke-black"} width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
            </svg>
          </>
        )}
      </button>
    </>
  );
};

export default Button;
