import { NextResponse,NextRequest } from "next/server";

const Assets=[
    {
        campaign:"AD001",
        campaign_assets:[1,2,3,4]
    },
    {
        campaign:"AD002",
        campaign_assets:[1,2,3,4]
    }
]

export const GET = async (req, res) => {
    console.log("Get request");
    try {
        return  NextResponse.json({ assests:Assets }, { status: 200 })
    }
    catch (error) {
        return  NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};


