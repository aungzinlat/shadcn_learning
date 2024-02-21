import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const CardComponents = ({
  recipe: { title, time, description, vegan, image },
}) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row items-center gap-4 ">
        <Avatar>
          <AvatarImage src={`/img/${image}`} alt="recipe img" />
          <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{time} mins to cook.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View Recipe</Button>
        {vegan && <Badge variant="secondary">Vegan!</Badge>}
      </CardFooter>
    </Card>
  );
};

export default CardComponents;
