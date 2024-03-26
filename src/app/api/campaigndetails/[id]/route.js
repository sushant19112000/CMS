import { NextResponse,NextRequest } from "next/server";
import {updateCampaign } from "@/app/lib/campaign";


export const PUT = async (req,res,{params}) => {
    try{
        const id=parseInt(params.id)
        const requestBody = await req.text();
        const data=JSON.parse(requestBody)
        
        const updated=await updateCampaign(id,data)
        return  NextResponse.json({message:"Campaign Updated",campaign:updated},{status:201})
    }
    catch(error){
        console.log(error)
        return  NextResponse.json({message:"Internal server error"},{status:500})
    }
};

