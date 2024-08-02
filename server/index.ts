"use server";

import { getSession } from "@/lib/session";
import db from "@/lib/prisma";
import * as z from "zod";
import { AddDestinationSchema } from "@/Schemas";

export async function AddDestinationServer(values: z.infer<typeof AddDestinationSchema>) {
    const validatedValues = AddDestinationSchema.safeParse(values);

    if (!validatedValues.success) {
        throw new Error("Invalid values");
    }

    // const session = await getSession();
    // if (!session || !session.userId) {
    //     throw new Error("Unauthorized");
    // }

    const { type, title, subtitle, VideoUrl, pricePrivate, priceShuttle, image } = validatedValues.data;

    const data = {
        title,
        subtitle,
        Video: VideoUrl,
        pricePrivate,
        priceShuttle,
        image,
    };

    switch (type) {
        case "Trips":
            return db.trips.create({ data });
        case "Activities":
            return db.activities.create({ data });
        default:
            throw new Error("Invalid type");
    }


}

export async function GetDestinationsServer(type: string) {
    // const session = await getSession();
    // if (!session || !session.userId) {
    //     throw new Error("Unauthorized");
    // }

    switch (type) {
        case 'all':
            const trips = await db.trips.findMany();
            const activities = await db.activities.findMany();
            const destinations = [...trips, ...activities];
            return destinations;

        case "Trips":
            return db.trips.findMany();
        case "Activities":
            return db.activities.findMany();
        default:
            throw new Error("Invalid type");
    }

}
