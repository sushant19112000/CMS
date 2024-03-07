import {  getBlogCategory, updateBlogCategory } from "@/app/lib/blogCategories";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    console.log("Get request");
    try{
        const id=params.id
        const BlogCategory=getBlogCategory(id)
        return NextResponse.json({blogCategory:BlogCategory},{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};

export const PUT = async (req,{params}) => {
    try{
        const id=params.id
        const requestBody = await req.text();
        // If the content type is JSON, you can parse it
        const blogCategory = JSON.parse(requestBody);
        updateBlogCategory(id,blogCategory)
        return NextResponse.json({message:"BlogCategory Updated"},{status:201})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};
  
export const DELETE = async (req, res) => {
    console.log("Delete request");
    try{
        //deleteBlogCategory(1)
        return NextResponse.json({message:"blogCategory deleted"},{status:204})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};


