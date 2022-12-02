import Head from "next/head";
import { useEffect, useState } from "react";
import { DatePicker, Button } from "antd";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  let [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
      });
  }, []);

  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          colorPrimary: "#6c19f1",
          borderRadius: 4,
          fontFamily: "Google Sans",
        },
      }}
    >
      <Header />
      <Main />
    </ConfigProvider>
  );
}
