import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400, Legend: 'star' }, 
  { name: 'Group C', value: 300, Legend: 'star' }
];

export class ChartDashboard extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" nameKey="name" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}