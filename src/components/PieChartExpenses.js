import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const colors = ["#8884d8", "#82ca9d", "#d88884", "#84aad8"];

export class PieChartExpenses extends PureComponent {
  render() {
    const { expensesCategories } = this.props;
    console.log(this.props);
    // let data = [{...incomesCategories}]
    const mockdata = { ...expensesCategories };
    const data = Object.entries(mockdata).map(([key, value]) => ({
      name: key,
      value
    }));
    // let data =  [{name:"cos", value: 123}]

    return (
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" height={50} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
