import "../styles/globals.css";
import Head from "next/head";
import MainHeader from "../components/shared/MainHeader";
import Navbar from "../components/shared/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>River-RoundTable</Head>
      <Navbar />
      <div className="flex md:mr-14 ">
        <div className="flex flex-col items-center justify-center w-full">
          <MainHeader />
          <div className="h-screen flex items-center justify-center">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
