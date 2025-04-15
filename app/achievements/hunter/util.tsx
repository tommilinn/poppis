import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { IAchievement } from "@/lib/types";
import { JSX } from "react";

interface ICardDetails {
  name: string;
  achievements: IAchievement[];
}
export const createCard = (cardDetails: ICardDetails): JSX.Element => {
  return (
    <Card key={cardDetails.name} className="w-full">

      <CardHeader>
        <CardTitle className="text-center">{cardDetails.name}</CardTitle>
      </CardHeader>
      <CardContent>

        <Table>
          <TableBody>
            {cardDetails.achievements.map((achievement, rowIndex) => {
              return (
                <TableRow key={`${cardDetails.name}-${rowIndex}`}>
                  <TableCell>{achievement.name}</TableCell>
                  <TableCell>{achievement.description}</TableCell>
                  <TableCell>{achievement.points}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
