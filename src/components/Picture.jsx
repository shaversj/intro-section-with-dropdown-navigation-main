import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const Picture = () => {
  return (
    <picture className={"lg:order-2 lg:basis-[50%] lg:pl-[90px]"}>
      <source className={""} srcSet={heroDesktop} media={"(min-width: 1440px)"} />
      <img className={"lg:h-[641px] lg:w-[481px]"} src={heroMobile} alt={""} />
    </picture>
  );
};

export default Picture;
