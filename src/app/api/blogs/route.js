import { addBlog, getBlogs } from '@/app/lib/blogs';
import { NextResponse,NextRequest } from "next/server";


export const GET = async (req, res) => {
    try {
        const Blogs = await getBlogs()
        return  NextResponse.json(Blogs, { status: 200 })
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
        const newBlog=addBlog(requestBody)
        return  NextResponse.json({message:"Blog added",newBlog},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};







