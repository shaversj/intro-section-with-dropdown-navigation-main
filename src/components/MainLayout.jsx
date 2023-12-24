import Picture from "./Picture.jsx";
import Section from "./Section.jsx";

const MainLayout = () => {
  return (
    <>
      <main className={"lg:flex lg:pl-[165px] lg:pr-[128px] lg:pt-[2.7rem]"}>
        <Picture />
        <Section />
      </main>
    </>
  );
};

export default MainLayout;
