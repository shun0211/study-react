import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
    // Command + .で無効にする選択肢が出てくる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
