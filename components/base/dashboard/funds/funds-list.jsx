import React from "react";
import FundsListItem from "./funds-list-item";

const FundsList = ({ data }) => {
  return (
    data.data.length > 0 ? (
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
        {data.data.map((item, index) => (
          <FundsListItem key={index} item={item} />
        ))}
      </div>
    ) : (
      <div className="w-full p-2 bg-primary text-white text-center rounded-lg dark:dark">Aradığınız Fon Sistemde Bulunamadı</div>
    )
  );
};

export default FundsList;
