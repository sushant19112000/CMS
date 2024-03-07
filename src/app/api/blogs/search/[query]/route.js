import { NextRequest, NextResponse } from "next/server";
import { getBlogs } from '@/app/lib/blogs';

export const GET = async (req,{params}) => {
    try{
        const searchTerm=params.query
        const blogs=await getBlogs()
        const filteredBlogs = blogs.filter(blog => blog.title.includes(searchTerm));
        return NextResponse.json(filteredBlogs,{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
  };

  