const jwt = require('jsonwebtoken');


import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from '@prisma/client';
import createToken from "@/app/middleware/create_token";
const prisma = new PrismaClient();



const secretKey = 'Digiteltechnolgi';
export const POST = async (req, res) => {
    console.log("Login request");
    try {
        const requestBody = await req.text();
        const userDetails = JSON.parse(requestBody);
        console.log(userDetails)

        const email=userDetails.email;
        const password=userDetails.password;
        const existingUser = await prisma.users.findFirst({
            where: { email:email },
        });

        if (!existingUser || password!=existingUser.password){
            return NextResponse.json({ message:"Invalid email or password" }, { status: 200 });
        }

        
        const token = createToken(existingUser.id)
        return NextResponse.json({ token:token,user:userDetails }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

