"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    router.push(`/search`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-left py-3 m-auto flex justify-center"
    >
      <input
        className="rounded text-lg mr-3 w-74 px-2 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        required
      />

      <button className="bg-red-600 px-9 py-2 text-white rounded" type="submit">
        Let's go
      </button>
    </form>
  );
}
