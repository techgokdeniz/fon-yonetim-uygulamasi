import LoginCard from "@/components/base/login/logincard";
import UserActionLayout from "@/layouts/useractionlayout";
import React from "react";

const Index = () => {
  return (
    <UserActionLayout>
      <LoginCard
        title={"Giriş Yap"}
        description={"Fon Yönetim Uygulaması Giriş Ekranı"}
      />
    </UserActionLayout>
  );
};

export default Index;
