import Header from "./components/Header";
import Price from "../components/Price";

import { Price as PRICE } from "@prisma/client";

export default function Loading() {
  return (
    <>
      <Header />

      <main className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5 mr-5 h-80 bg-slate-200 animate-pulse shadow" />

        <div className="w-5/6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div key={item} className="border-b flex pb-5 mb-5">
              <div className="w-44 h-36 rounded animate-pulse bg-slate-200" />

              <div className="ml-5 w-64 h-36 bg-slate-200 shadow animate-pulse"></div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
