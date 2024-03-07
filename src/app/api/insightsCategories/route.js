import { getInsightsCategories,addInsightsCategories } from '@/app/lib/insightsCategories';
import { NextResponse,NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get request");
    try {
        const InsightsCategories = await getInsightsCategories()
        return  NextResponse.json({ InsightsCategories:InsightsCategories }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};


export const POST = async (req, res) => {
    console.log("Post request");
    try{
        const requestBody = await req.text();
        const newInsightsCategory = JSON.parse(requestBody);
        await addInsightsCategories(newInsightsCategory)
        return  NextResponse.json({message:"InsightsCategory added",newInsightsCategory},{status:201})
    }

    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};


