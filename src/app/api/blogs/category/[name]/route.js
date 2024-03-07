import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const GET = async (req, { params }) => {
    try {
        const name = params.name
        const category = await prisma.blogCategories.findFirst({
            where: { name: name },
            include: {
                blogs: true, // Include the related blogs
            },
        })
        if (!category) {
            throw new Error("Failed to fetch the categoryblogs Category does not exist");
        }
        return NextResponse.json({categoryName:category.name, blogs: category.blogs }, { status: 200 })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};
