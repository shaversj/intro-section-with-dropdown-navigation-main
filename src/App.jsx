import Header from "./components/Header.jsx";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  return (
    <>
      <div className={"grid min-h-screen place-items-center bg-black"}>
        <div className={"mx-auto w-full max-w-screen-sm bg-almost-white font-Epilogue lg:h-[900px] lg:max-w-screen-lg"}>
          <Header />
          <MainLayout />
        </div>
      </div>
    </>
  );
}

export default App;
