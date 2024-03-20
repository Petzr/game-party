import { Button } from "../components/ui/button";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="relative ">
        <div className=" bg-gray-200 flex justify-center items-center">
          <img
            src={require("../images/party-front-page.jpg")}
            alt="game-party-front-photo"
            className="w-full sm:h-auto lg:h-1/2"
          />
        </div>
        <div className="mt-4 text-center absolute top-1/4 right-1/2 translate-x-1/2 ">
          <p className="text-4xl text-white font-bold">Game Partyy</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center m-auto w-1/2">
        <Button className="" size="wide">Speel het spel!!</Button>
      </div>

      <About id="about"/>

    </>
  )
}