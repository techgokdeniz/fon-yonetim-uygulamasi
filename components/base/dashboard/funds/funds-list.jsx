import React from "react";
import FundsListItem from "./funds-list-item";

const FundsList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-2 gap-4">
      {data.data.length > 0 ? (
        data.data.map((item, index) => <FundsListItem key={index} item={item} />)
      ) : (
        <div className="text-center w-full">Fon Bulunamadı</div>
      )}
    </div>
  );
};

export default FundsList;
