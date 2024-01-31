import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import { Skeleton } from "@/components/ui/skeleton";

const StatsCard = (props) => {
  if (!props.value) {
    return <Skeleton className="w-full h-[150px]" />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-2xl">{props.value}</CardContent>
    </Card>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsCard;
