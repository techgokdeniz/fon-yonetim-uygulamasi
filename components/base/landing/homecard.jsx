import React from "react";
import propTypes from "prop-types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useExchangeRates } from "@/hooks/useExchangeRates";
import { useRouter } from "next/router";

const HomeContent = () => {
  const router = useRouter();

  const { isLoading, error, data } = useExchangeRates();

  if (isLoading) return <>Loading...</>;

  if (error)
    return <>Bir hata oluştu ekibimiz çözmeye çalışıyor : {error.message}</>;

  return data.map((item, index) => {
    return (
      <HomeCard
        key={index}
        title={item.Isim}
        description={item.Isim}
        content={item.BanknoteBuying}
      />
    );
  });
};

const HomeCard = ({ title, description, content }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
};

HomeCard.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  content: propTypes.number,
};

export default HomeContent;
