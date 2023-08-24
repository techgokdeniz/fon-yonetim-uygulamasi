import RegisterCard from "@/components/base/register/registercard";
import UserActionLayout from "@/layouts/useractionlayout";
import React from "react";

const Register = () => {
  return (
    <UserActionLayout>
      <RegisterCard
        title={"Kayıt Ol"}
        description={"Fon Yönetim Uygulamasına Kayıt Ol"}
      />
    </UserActionLayout>
  );
};

export default Register;
