"use server";

import { getErrorMessate, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    if(!validateString(senderEmail, 500)){
        console.log(10)
        return {
            error: "invalid sender email"};
    }
    if(!validateString(message, 5000)){
        console.log(11)
        return {
            error: "invalid message"};
    }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'liamgabriely@gmail.com',
            subject: 'Message from contact form of portfolio',
            reply_to: senderEmail as string, 
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    }
    catch(error: unknown) {
        return {
            error: getErrorMessate(error)
        }
    }

    return {
        data,
    };
}

