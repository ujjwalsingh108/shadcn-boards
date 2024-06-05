"use client";
import useSWR from "swr";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getPrompts } from "@/lib/query/query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import dayjs from "dayjs";

interface Props {
  props: string;
}

function Board({ props }: Props) {
  const { data } = useSWR("getPrompts", getPrompts);

  const monthData = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium md:text-2xl">
          {props.toUpperCase()}
        </h1>
        <ToggleGroup type="single" defaultValue="b">
          <ToggleGroupItem value="a">Today</ToggleGroupItem>
          <ToggleGroupItem value="b">Week</ToggleGroupItem>
          <ToggleGroupItem value="c">Month</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {data?.map((prompt: any) => (
          <>
            <Card x-chunk="dashboard-01-chunk-0" key={prompt?.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {dayjs(prompt?.createdAt).format("MMM D, YYYY")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bolder">{prompt?.name}</div>

                <ResponsiveContainer width="100%" height={80}>
                  <BarChart data={monthData}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Bar
                      dataKey="total"
                      fill="currentColor"
                      radius={[4, 4, 0, 0]}
                      className="fill-primary"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </main>
  );
}

export default Board;
