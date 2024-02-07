import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const FundsListItem = ({ item }) => {
  return (
    <Link href={`/dashboard/funds/list/${item.fundCode}`}>
      <Card>
        <CardHeader>
          <CardTitle>{item.fundCode}</CardTitle>
          <CardDescription className="text-ellipsis overflow-hidden whitespace-nowrap">{item.name}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default FundsListItem;
