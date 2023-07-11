import NavBar from "./components/NavBar";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="bg-gray-100 min-h-screen w-screen overflow-auto h-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <NavBar />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
