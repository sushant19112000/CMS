import {getLandingPage,addLandingPageData } from "@/app/lib/landingpage";
import { convertToJson } from "@/app/middleware/convertToJson";
import { NextRequest, NextResponse } from "next/server";
import { task_trigger } from "@/app/tasks/client";
export const GET = async (req,{params}) => {
    try{
        const url=params.url
        const landingpage=await getLandingPage(url)
        return NextResponse.json(landingpage,{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};



export const POST = async (req,{params}) => {
    console.log("Post landing page request");
    try {
        const url=params.url
        const requestBody = await req.text();
        const Data=JSON.parse(requestBody)
        console.log(task_trigger(Data.email),'email task triggered')
        const dataadded=await addLandingPageData(url,requestBody);
        return NextResponse.json({ message: "Data Added" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};






