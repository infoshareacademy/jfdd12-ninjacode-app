import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const colors = ["#8884d8", "#82ca9d"];

export class PieChartBalance extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const { balance } = this.props;
    let data = [
      { name: "Przychody", value: balance.incomes },
      { name: "Wydatki", value: balance.expenses }
    ];

    return (
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="top" height={50}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
