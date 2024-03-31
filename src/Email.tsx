import React, { useRef, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { mail_service, mail_template, mail_token } from "./config/constants";

export const Email: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          mail_service,
          mail_template,
          form.current,
          mail_token
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your message has been sent!");
            // Reset form fields after successful submission
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.error("FAILED...", error);
            alert(
              "There was some error in sending your message. Please try again!"
            );
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full mb-8 mx-auto flex flex-col justify-center items-center gap-6 mt-8 "
    >
      <input
        type="text"
        name="user_name"
        className="border input-ele border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Your Name here"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email here"
        className="border input-ele border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
      />
      <textarea
        name="message"
        className="border  input-ele border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Your Message here"
      ></textarea>
      <input
        type="submit"
        value="Send"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
      />
    </form>
  );
};

export default Email;
