import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FundsListItem = ({item}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.fundCode}</CardTitle>
        <CardDescription>{item.name}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FundsListItem;
