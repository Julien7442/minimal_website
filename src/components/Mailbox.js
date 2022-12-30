import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const StyledCard = styled.div`
  .box {
    background-color: #stone-900;
  }

  .mailbox_color {
    background-color: #stone-900;
  }

  .send_color {
    background-color: #ffffff;
  }

  input,
  textarea {
    background-color: #stone-900;
    color: #ffffff;
  }
`;

const Mailbox = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if email and message are empty
    if (!email || !message) {
      setError(true);
      return;
    }

    // Send email
    emailjs
      .sendForm(
        "service_lhdvjws",
        "template_yvg7it7",
        form.current,
        "63mKRY1t4lOzjJF3E"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <StyledCard className="mailbox mx-auto w-96 border-solid border-stone-900 border-[1px] rounded-3xl relative">
      {/* Display error message if email or message is empty */}
      {error && (
        <div className="error-message rounded-lg bg-red-600 text-white p-3 ">
          Something went wrong
        </div>
      )}
      {/* Display success message if email was sent successfully */}
      {success && (
        <div className="success-message rounded-lg bg-green-600 text-white p-3">
          Message sent!
        </div>
      )}
      <div className="box rounded-lg shadow-md p-6">
        <p className="text-xl font-semibold text-white">Say hi</p>
        <p className="text-base mb-5 text-slate-300">I'll try to reply asap</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="rounded-lg w-full h-[30px] py-2 px-3 mb-3 mailbox_color text-white"
            placeholder="Email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="rounded-lg w-full h-[60px] py-2 px-3 mailbox_color text-white"
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="mt-4 send_color text-black font-bold py-2 px-4 rounded-lg w-full">
            Send
          </button>
        </form>
      </div>
    </StyledCard>
)};

export default Mailbox;