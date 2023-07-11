"use client";

import { FormEvent } from "react";

export default function Form() {
  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
  }

  return (
    <form
      className="mt-10 flex flex-wrap justify-between w-[660px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
        required
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
        required
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
        required
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
        required
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
      />

      <button
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
        type="submit"
      >
        Complete reservation
      </button>

      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </form>
  );
}
