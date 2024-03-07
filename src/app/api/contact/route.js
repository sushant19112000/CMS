import { addContact, getContacts } from "@/app/lib/contact";
import { NextResponse, NextRequest } from "next/server";
import { task_trigger } from "@/app/tasks/client";
export const GET = async (req, res) => {
    try {
        const Contacts = await getContacts();
        
        return NextResponse.json(Contacts, { status: 200 })

    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};




export const POST = async (req, res) => {
    console.log("Login request");
    try {
        const requestBody = await req.text();
        const contactDetails= JSON.parse(requestBody);
        console.log(task_trigger('1911sushchougule@gmail.com'),'contact')
        const contactAdded=addContact(contactDetails)
        return NextResponse.json({ contactDetails:contactAdded }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};

