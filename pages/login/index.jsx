import LoginCard from "@/components/base/login/logincard";
import UserActionLayout from "@/layouts/useractionlayout";
import React from "react";

const Index = () => {
  return (
    <UserActionLayout>
      <LoginCard
        title={"Login"}
        description={"Fon Yönetim Uygulaması giriş ekranı"}
      />
    </UserActionLayout>
  );
};

export default Index;
