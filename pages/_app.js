import "../styles/globals.css";
import Head from "next/head";
import MainHeader from "../components/shared/MainHeader";
import Navbar from "../components/shared/Navbar";
import BodyComponent from "../components/shared/BodyComponent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>River-RoundTable</Head>
      <Navbar />
      <div className="flex ml-14 ">
        <div className="flex flex-col items-center justify-center w-full">
          <MainHeader />
          <BodyComponent>
            <Component {...pageProps} />
          </BodyComponent>
        </div>
      </div>
    </>
  );
}

export default MyApp;
