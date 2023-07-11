"use client";

import { FormEvent } from "react";

export default function ReservationCard() {
  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
  }

  return (
    <form
      className="sticky top-3 w-[27%] bg-white text-reg p-3 shadow rounded"
      onSubmit={onSubmit}
    >
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>

      <div className="my-3 flex flex-col">
        <label htmlFor="reservation-party-size-input">Party size</label>
        <select
          name="party-size"
          id="reservation-party-size-input"
          className="py-3 border-b font-light"
          required
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
        </select>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="reservation-date-input">Date</label>
          <input
            type="date"
            name="date"
            id="reservation-date-input"
            className="py-3 border-b font-light w-28"
            required
          />
        </div>

        <div className="flex flex-col w-[48%]">
          <label htmlFor="reservation-time-input">Time</label>
          <select
            className="py-3 border-b font-light"
            id="reservation-time-input"
            name="time"
            required
          >
            <option value="1">7:30 AM</option>
            <option value="2">9:30 AM</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </form>
  );
}
