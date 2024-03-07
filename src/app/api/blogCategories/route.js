import { getBlogCategories,addBlogCategories } from '@/app/lib/blogCategories';
import { NextResponse,NextRequest } from "next/server";


export const GET = async (req, res) => {
    console.log("Get request");
    try {
        const BlogCategories = await getBlogCategories()
        return  NextResponse.json({ blogCategories:BlogCategories }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export const POST = async (req, res) => {
    console.log("Post request");
    try{
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const newBlogCategory = JSON.parse(requestBody);
        await addBlogCategories(newBlogCategory)
        return  NextResponse.json({message:"BlogCategory added",newBlogCategory},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};


