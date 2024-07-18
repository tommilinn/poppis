"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import useAchievements from "../../lib/hooks/useAchievements";
import Spinner from "@/components/ui/spinner";

const Achievements = () => {
  const { achievements, isLoading } = useAchievements();
  if (isLoading)
    return <Spinner className="flex justify-center items-center" />;
  return (
    <Table className="text-sm w-4/5 mx-auto mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="px-2 py-1">Nimi</TableHead>
          <TableHead className="px-2 py-1">Kuvaus</TableHead>
          <TableHead className="px-2 py-1">Ryhmä</TableHead>
          <TableHead className="px-2 py-1">Pisteet</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {achievements.length &&
          achievements.map((achievement, index) => {
            return (
              <TableRow key={index}>
                <TableCell key={achievement.id + ++index}>
                  {achievement.name}
                </TableCell>
                <TableCell key={achievement.id + ++index}>
                  {achievement.description}
                </TableCell>
                <TableCell key={achievement.id + ++index}>
                  {achievement.group}
                </TableCell>
                <TableCell key={achievement.id + ++index}>
                  {achievement.points}
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default Achievements;
