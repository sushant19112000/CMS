import { getBlogByTitle } from "@/app/lib/blogs";
import { convertToJson } from "@/app/middleware/convertToJson";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    try{
        const TitleSearch=params.title;
        const blog=await getBlogByTitle(TitleSearch)
        return NextResponse.json({blog:blog,TitleSearch},{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
  };
