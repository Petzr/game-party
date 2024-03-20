import * as React from "react"
import $ from 'jquery';
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

export default function Register() {

  const buttonClickSubmit = () => {
    let name = $('#name').val()
    console.log(name);
  }

  return (
    <div className="flex pt-[50px] bord justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Maak account</CardTitle>
          <CardDescription>Met een account kan je het spel spelen!</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Naam</Label>
                <Input id="name" placeholder="Naam van speler" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">Leeftijd</Label>
                <Input id="age" type="number" placeholder="Jouw leeftijd" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Wachtwoord</Label>
                <Input id="password" type="password" placeholder="Wachtwoord" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary">Annuleer</Button>
          <Button onClick={buttonClickSubmit} >Maak</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
