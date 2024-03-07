import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    console.log("Post request");
    try {
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const newContactData = JSON.parse(requestBody);
        await prisma.example.create({ data: newContactData });
        return NextResponse.json({ message: "ContactDataAdded", url: "example-landing-page" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
