import {imageExist } from "@/app/lib/landingpage";
import { NextRequest, NextResponse } from "next/server";
export const GET = async (req,{params}) => {
    try{
        const url=params.imageSrc
        const exists=await imageExist(url)
        return NextResponse.json({image:exists},{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};

