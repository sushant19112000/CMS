import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export const POST = async (req, res) => {
    console.log("Signup request");
    try {
        const requestBody = await req.text();
        const userDetails = JSON.parse(requestBody);
        console.log(userDetails)

        const email=userDetails.email;
        const existingUser = await prisma.users.findFirst({
            where: { email:email },
        });


        if (existingUser){
            return NextResponse.json({message:'Email is already registered'},{status:400})
        }

        if (userDetails.is_admin=="True"){
            userDetails.is_admin=true
        }
        
        const newUser = await prisma.users.create({
            data: userDetails
        });
        return NextResponse.json({message:"Signup Successfull" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

