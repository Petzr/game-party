import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "../components/ui/card"



export default function scorebord() {
    return (
        <div className="flex pt-[50px] justify-center">
            <Tabs defaultValue="punten" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="punten">Punten</TabsTrigger>
                    <TabsTrigger value="slokken-shots">Slokken/Shots</TabsTrigger>
                </TabsList>
                <TabsContent value="punten">
                    <Card>
                        <CardHeader>
                            <CardDescription>Aantal Overwinningen van een speler</CardDescription>
                        </CardHeader>
                        <CardContent>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Speler</TableHead>
                                        <TableHead className="text-right">Overwinningen</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="">Peter</TableCell>
                                        <TableCell className="text-right">5</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="">Thimo</TableCell>
                                        <TableCell className="text-right">4</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="slokken-shots">
                    <Card>
                        <CardHeader>
                            <CardDescription>Aantal slokken en shots van een speler</CardDescription>
                        </CardHeader>
                        <CardContent>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Speler</TableHead>
                                        <TableHead className="text-right">Slokken</TableHead>
                                        <TableHead className="text-right">Shots</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="">Peter</TableCell>
                                        <TableCell className="text-right">5</TableCell>
                                        <TableCell className="text-right">5</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="">Thimo</TableCell>
                                        <TableCell className="text-right">4</TableCell>
                                        <TableCell className="text-right">4</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
