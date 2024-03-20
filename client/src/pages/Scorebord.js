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


export default function scorebord() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="punten">Punten</TabsTrigger>
                <TabsTrigger value="slokken-shots">Slokken/Shots</TabsTrigger>
            </TabsList>
            <TabsContent value="punten">
                <Table>
                    <TableCaption>Aantal overwinningen van een speler</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Speler</TableHead>
                            <TableHead className="text-right">Overwinningen</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Peter</TableCell>
                            <TableCell className="text-right">5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Thimo</TableCell>
                            <TableCell className="text-right">4</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TabsContent>
            <TabsContent value="slokken-shots">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </TabsContent>
        </Tabs>
    )
}
