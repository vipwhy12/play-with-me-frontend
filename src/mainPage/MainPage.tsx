import { HeroBanner } from "./component/heroBanner/heroBanner";
import { NavBar } from "./component/navBar/NavBar";

export const MainPage = () => {
  return (
    <>
      <div className="mx-80">
        <NavBar />
      </div>
      <div className="mx-80 mt-28">
        <HeroBanner />
      </div>
    </>
  );
};
