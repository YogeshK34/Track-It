"use client";

import { ResponsivePie } from "@neco-dev/next-recharts";
import { Cell, Pie, PieChart } from "recharts";

interface ChartProps {
  data: Array<{ name: string; value: number }>;
  index: string;
  categories: string[];
  colors: string[];
}

export function Chart({ data, colors }: ChartProps) {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-full">
      <PieChart width={400} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`hsl(var(--${colors[index]}))`}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}