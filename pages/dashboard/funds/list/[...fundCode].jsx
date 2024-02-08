import DashobardLayout from "@/layouts/dashobardLayout";
import React from "react";
import { useRouter } from "next/router";

const FundCode = () => {
  const { fundCode } = useRouter().query;
  return (
    <DashobardLayout pageTitle={`Fon Kodu : ${fundCode}`}></DashobardLayout>
  );
};

export default FundCode;
