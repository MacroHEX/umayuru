// ::: React
//
import React, { ReactElement } from "react";

// ::: Next
//
import Head from "next/head";

// ::: Ui
//
import { Navbar, Wip } from "../ui";

// ::: Interface
//
interface Props {
  title?: string;
  children: ReactElement | ReactElement[];
}

// :::
//
export const Layout = ({ title, children }: Props) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;
  return (
    <>
      <Head>
        <title>{title || "Umayuru - WIP"}</title>
        <meta name="author" content="MacroHEX" />
        {/* TODO: Add dynamic desc and og:image */}
        <meta
          name="description"
          content="Reproductor con subs en español para los cortos de Umayuru"
        />
        <meta name="keywords" content="uma musume, umayuru, subs esp" />
        <meta property="og:title" content={`${title}`} />
        <meta
          property="og:description"
          content={"Reproductor con subs en español para los cortos de Umayuru"}
        />
        <meta property="og:image" content={`${origin}/img/og/banner.png`} />
      </Head>
      {/* uncomment for production */}
      {/* <Navbar /> */}
      {/* comment for production */}
      <Wip />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};

export default Layout;
