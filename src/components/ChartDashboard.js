import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from "recharts";

const data = [
  { name: "Przychody", value: 55},
  { name: "Wydatki", value: 499 }
];
const colors = ['#3DCC91', '#FFB366'];

  
export class ChartDashboard extends PureComponent {
  // static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>

              <Legend verticalAlign="top" height={10} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      
    );
  }
}
