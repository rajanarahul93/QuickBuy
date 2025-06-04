import React, { useState } from "react";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.success("Subscribed successfully");
    setEmail("");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Join our newsletter to receive exclusive deals, fashion updates, and
        early access to new arrivals. Stay stylish, stay ahead!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;