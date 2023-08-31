import LoginCard from "@/components/base/login/logincard";
import UserActionLayout from "@/layouts/useractionlayout";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Fon Yönetim Uygulaması - Giriş Yap</title>
      </Head>
      <UserActionLayout>
        <LoginCard
          title={"Giriş Yap"}
          description={"Fon Yönetim Uygulaması Giriş Ekranı"}
        />
      </UserActionLayout>
    </>
  );
};

export default Index;
