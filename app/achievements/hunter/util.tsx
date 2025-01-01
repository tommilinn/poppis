import { IAchievement, IAchievementCategory } from "@/lib/types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ICardDetails {
  name: string;
  achievements: IAchievement[];
}
export const createCard = (index: number, cardDetails: ICardDetails): JSX.Element => {
  return (
    <Card key={index} className="flex justify-center items-center">
      <h3>{cardDetails.name}</h3>

      <Table>
        <TableBody>
          {cardDetails.achievements.map((achievement, index) => {
            return (
              <TableRow key={index}>
                <TableCell key={achievement.id}>{achievement.name}</TableCell>
                <TableCell key={achievement.id}>
                  {achievement.description}
                </TableCell>
                <TableCell key={achievement.id}>{achievement.points}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};
