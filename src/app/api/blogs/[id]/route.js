import { deleteBlog, getBlog, updateBlog } from "@/app/lib/blogs";
import { convertToJson } from "@/app/middleware/convertToJson";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    try{
        const id=parseInt(params.id)
        const blog=await getBlog(id)
        return NextResponse.json({blog:blog},{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};

export const PUT = async (req,{params}) => {
    try{
        const id=parseInt(params.id)
        console.log(id)
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const blog = JSON.parse(requestBody);
        updateBlog(id,blog)
        return NextResponse.json({message:"Blog deleted"},{status:201})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};
  
export const DELETE = async (req, { params }) => {
    console.log("Delete request");
    try{
        const id=parseInt(params.id)
        await deleteBlog(id)
        return NextResponse.json({message:"blog deleted"},{status:200})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};


