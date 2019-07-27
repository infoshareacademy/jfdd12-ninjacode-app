import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const colors = ["#8884d8", "#82ca9d"];

export class PieChartExpenses extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const { balance, expensesCategories } = this.props;
    console.log(this.props)
    // let data = [{...incomesCategories}]
    const mockdata = { ...expensesCategories }
const data =     Object.entries(mockdata).map(([key,value])=> ({name:key, value}))
    // let data =  [{name:"cos", value: 123}]
    debugger

    return (
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend verticalAlign="top" height={50} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
