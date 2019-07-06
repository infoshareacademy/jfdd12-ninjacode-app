import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from "recharts";

const data = [
  { name: "Przychody", value: 400},
  { name: "Wydatki", value: 800 }
];
const colors = ['#3DCC91', '#FFB366'];

  
export class ChartDashboard extends PureComponent {
  // static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart width={730} height={250}>
            <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>

            <Legend verticalAlign="top" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
