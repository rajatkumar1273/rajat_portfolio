"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          // Reset form fields to default values
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        {/* input */}
        <div className="relative flex items-center">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <User size={20} className="absolute right-6 text-primary" />
        </div>
        {/* email */}
        <div className="relative flex items-center">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <MailIcon size={20} className="absolute right-6 text-primary" />
        </div>
        {/* text area */}
        <div className="relative flex items-center">
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <MessageSquare
            size={20}
            className="absolute top-4 right-6 text-primary"
          />
        </div>
        <Button
          type="submit"
          className="flex items-center gap-x-1 max-w-[166px]"
        >
          Let's Talk <ArrowRightIcon size={20} />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
