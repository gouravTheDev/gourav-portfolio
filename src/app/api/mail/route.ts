import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');
type dataReq = {
    name: string,
    email: string,
    phone: string,
    message: string,
}

export async function POST(req: Request) {
    const data: dataReq = await req.json()

    const { name, email, phone, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: 'chatterjeegouravking@gmail.com',
            subject: 'CodeWithBogo- New Message from Contact Form',
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
          `,
        });

        return NextResponse.json({
            "message": "Contact form submitted successfully"
        })
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            "message": "Please try again!"
        })
    }


}