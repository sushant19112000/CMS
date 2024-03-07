import { getWhitepaperCategories,addWhitepaperCategories } from '@/app/lib/whitepaperCategories';
import { NextResponse,NextRequest } from "next/server";

export const GET = async (req, res) => {
    console.log("Get request");
    try {
        const WhitepaperCategories = await getWhitepaperCategories()
        return  NextResponse.json({ WhitepaperCategories:WhitepaperCategories }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};


export const POST = async (req, res) => {
    console.log("Post request");
    try{
        const requestBody = await req.text();
        const newWhitepaperCategory = JSON.parse(requestBody);
        await addWhitepaperCategories(newWhitepaperCategory)
        return  NextResponse.json({message:"WhitepaperCategory added",newWhitepaperCategory},{status:201})
    }

    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};


