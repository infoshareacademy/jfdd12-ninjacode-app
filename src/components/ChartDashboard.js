import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

const data = [
  { name: 'Przychody', value: 300, Legend: 'star' }, 
  { name: 'Wydatki', value: 800, Legend: 'star' }
];

export class ChartDashboard extends PureComponent {
  static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" nameKey="name" data={data} fill="#8884d8" label />
            <Legend verticalAlign="top" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}