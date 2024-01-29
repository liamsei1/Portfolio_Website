"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import FormSubmitBtn from './form-submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const ref = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id='contact' 
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{ opacity: 0, }} whileInView={{ opacity: 1, }} 
    transition={{ duration: 1, }} viewport={{ once: true, }}>
        <SectionHeading child="Contact me" />

        <p className='text-gray-700 -mt-5 dark:text-white/80'>
            Please contact me at {" "}
            <a className='underline' href="mailto:liamgabriely@gmail.com">
                liamgabriely@gmail.com
            </a>{" "}
            or through this from.
        </p>

        <form className='mt-10 flex flex-col dark:text-black'
        action={async formData => { 
            const { data, error } = await sendEmail(formData);
            if(error){
                toast.error(error);
                return;
            }
            toast.success("Email sent successfully");
         }}>
            <input name='senderEmail' type="email" required maxLength={500} 
            className='h-14 rounded-lg borderBlack px-4 
            dark:outline-none dark:bg-white dark:bg-opacity-80 
            dark:focus:bg-opacity-100 transition-all'
            placeholder='Your email'/>
            <textarea name='message' 
            className='h-52 my-3 rounded-lg borderBlack p-4 
            dark:outline-none dark:bg-white dark:bg-opacity-80 
            dark:focus:bg-opacity-100 transition-all' 
            placeholder='Your message' required maxLength={5000} />
            <FormSubmitBtn />
        </form>
    </motion.section>
  )
}
