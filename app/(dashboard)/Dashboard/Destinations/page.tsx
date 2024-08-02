"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    File,
    ListFilter,
    PlusCircle,
    Video,
    Users2,
    MoreHorizontal,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddDestination from "@/components/dashboard/AddDestinations";
import { GetDestinationsServer } from "@/server";
import Loader from "@/components/Loader";

interface Destination {
    id: string;
    title: string | null;
    subtitle: string | null;
    pricePrivate: string | null;
    priceShuttle: string | null;
    image: string | null;
    Video: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export default function DestinationsDashboard() {
    const [loading, setLoading] = useState(true);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [activeTab, setActiveTab] = useState("all");

    useEffect(() => {
        setLoading(true);
        async function fetchDestinations() {
            const data = await GetDestinationsServer(activeTab === "all" ? "all" : activeTab);
            console.log(data);
            setDestinations(data as Destination[]);
            setLoading(false);
        }
        fetchDestinations();
    }, [activeTab]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="Trips">Trips</TabsTrigger>
                        <TabsTrigger value="Activities">Activities</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Filter
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" variant="outline" className="h-7 gap-1">
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Export
                            </span>
                        </Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm" className="h-7 gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Add a Destination
                                    </span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-3/4">
                                <AddDestination />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <TabsContent value="all" className="mx-auto w-full h-full justify-center items-center">
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <DestinationTable destinations={destinations} />
                        )
                    }
                </TabsContent>
                <TabsContent value="Trips">
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <DestinationTable destinations={destinations} />
                        )
                    }                </TabsContent>
                <TabsContent value="Activities">
                    {
                        loading ? (
                            <Loader />
                        ) : (
                            <DestinationTable destinations={destinations} />
                        )
                    }                </TabsContent>
            </Tabs>
        </main>
    );
}

function DestinationTable({ destinations }: { destinations: Destination[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>All Destinations</CardTitle>
                <CardDescription>Manage your trips and activities</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Subtitle</TableHead>
                            <TableHead>Private Price</TableHead>
                            <TableHead>Shuttle Price</TableHead>
                            <TableHead>Video Link</TableHead>
                            <TableHead>Reservations</TableHead>
                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {destinations.map((destination) => (
                            <TableRow key={destination.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Avatar>
                                        <AvatarImage src={destination.image!} />
                                        <AvatarFallback>{destination.title}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell className="font-medium">{destination.title}</TableCell>
                                <TableCell className="font-medium">{destination.subtitle}</TableCell>
                                <TableCell>${destination.pricePrivate}</TableCell>
                                <TableCell>${destination.priceShuttle}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Button size="icon" variant="outline">
                                        <a href={destination.Video!} target="_blank" rel="noopener noreferrer">
                                            <Video />
                                        </a>
                                    </Button>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Button size="icon" variant="outline">
                                        <Link href={`#`}>
                                            <Users2 />
                                        </Link>
                                    </Button>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{destination.createdAt.toString()}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> products
                </div>
            </CardFooter>
        </Card>
    );
}
