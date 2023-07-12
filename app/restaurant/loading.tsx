export default function Loading() {
  return (
    <>
      <header className="h-96 overflow-hidden animate-pulse bg-slate-200">
        <div className="bg-center h-full" />
      </header>

      <main className="flex m-auto w-2/3 justify-between items-start -mt-11 pb-4">
        <div className="bg-white w-[70%] h-80 rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <p className="mr-7">Overview</p>
            <p className="mr-7">Menu</p>
          </nav>

          <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[400px] h-16 rounded"></div>

          <div className="flex items-end animate-pulse bg-slate-200 mt-10 h-36">
            <div className="ratings mt-2 flex items-center">
              <div className="flex items-center bg-slate-200 w-56"></div>
              <p className="text-reg ml-3"></p>
            </div>
            <div>
              <p className="text-reg ml-4"> </p>
            </div>
          </div>
        </div>

        <div className="sticky top-3 w-[27%] h-80 bg-white-200 text-reg p-3 shadow rounded animate-pulse" />
      </main>
    </>
  );
}
