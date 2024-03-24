import { buttonVariants } from "../components/ui/button";
import { Link } from "react-router-dom";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <div className=" bg-gray-200 flex justify-center items-center">
          <img
            src={require("../images/party-front-page.jpg")}
            alt="game-party-header"
            className="w-full sm:h-auto lg:h-1/2"
          />
        </div>
        <div className="mt-4 text-center absolute top-1/4 right-1/2 translate-x-1/2 ">
          <p className="text-4xl text-white font-bold">Game Partyy</p>
        </div>
      </div>

      <div className="my-10 grid gap-2 justify-center m-auto">
        <Link to='/game' className={buttonVariants({ variant: "default", size: "wide"})}>Speel mee!</Link>
        <Link to='/scorebord' className={buttonVariants({ variant: "outline", size: "wide"})}>Maak een spel</Link>
      </div>

      <About id="about"/>

    </>
  )
}