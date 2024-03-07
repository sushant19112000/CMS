import { NextResponse, NextRequest } from "next/server";
import { getSubscribers, addSubscriber, deleteSubscriber } from "@/app/lib/subscribe";
import { task_trigger } from "@/app/tasks/client";
import { sendMail } from "@/app/api/subscribe/mailService";
export const GET = async (req, res) => {
    try {
      
        const Subscribers = await getSubscribers()
        
        return NextResponse.json(Subscribers, { status: 200 })

    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export const POST = async (req, res) => {
    console.log("Post request");
    try {
        const requestBody = await req.text();
        const subscriber = JSON.parse(requestBody);
        const newSubscriber = await addSubscriber(subscriber)
          // Send the email asynchronously without awaiting
        console.log(task_trigger('1911sushchougule@gmail.com'))
        return  NextResponse.json({ message: "Subscription successful" }, { status: 201 })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
};

export const DELETE = async (req, res) => {
    console.log("Post request");
    try {
        const requestBody = await req.text();
        const subscriber = JSON.parse(requestBody);
        const removedSubsriber = deleteSubscriber(subscriber)
        return NextResponse.json({ message: "Subsriber Deleted", removedSubsriber }, { status: 201 })
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
};
