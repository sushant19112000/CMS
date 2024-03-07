import { addCategories } from '@/app/lib/addCategories';
import { getResearchCategories,addResearchCategories } from '@/app/lib/researchCategories';
import { NextResponse,NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get request");
    try {
        const ResearchCategories = await getResearchCategories()
        return  NextResponse.json({ ResearchCategories:ResearchCategories }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};


export const POST = async (req, res) => {
    console.log("Post request");
    try{
        
         const requestBody = await req.text();
       const newResearchCategory = JSON.parse(requestBody);
        const newObj=await addResearchCategories(newResearchCategory)
        return  NextResponse.json({"Research Category":newObj},{status:201})
    }

    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};


