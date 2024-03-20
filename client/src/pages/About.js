import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"


function About() {
  return (
    <div className='w-full'>

      <Card className="">
        <CardHeader>
          <CardTitle>Speel met elkaar</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Met Game Party kan jij je vrienden uitnodigen om tijdens een geweldige avond
            geweldige spellen te gaan spelen. Daag elkaar uit en probeer op de top van het scorebord
            te komen. Maar natuurlijk niet van het aantal slokken of shots dat je hebt gekregen.
            <br />
            Maak met deze app een nog betere avond met jouw vrienden.
          </p>
        </CardContent>
      </Card>

    </div>

  );
}

export default About;
