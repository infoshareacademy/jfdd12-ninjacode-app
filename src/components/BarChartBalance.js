import React, { PureComponent } from "react";
import moment from "moment";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
        LabelList } from "recharts";

function currencyFormatter(value) {
  if (value === 0)
    return null;
  else
    return value.toFixed(2) + " zł";
}  

function tooltipCurrencyFormatter(value) {
  return value.toFixed(2) + " zł";
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;    

    var date = moment(payload.value, "DD-MM-YYYY").format("DD-MM");
    return (            
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">{date}</text>
      </g>  
    );
  }
}

export class BarChartBalance extends PureComponent {    
  constructor() {
    super();

    let currentDate = moment().subtract(14, "days");
    let days = [];

    for (let i = 0; i < 4; i++) {      
      currentDate.add(1, "days");
      console.log(currentDate);
      let day = {
        date: currentDate.toDate(),
        dateFormatted: currentDate.format("DD-MM-YYYY"),
        expenditure: Math.random() * 500,
        income: i % 7 === 0 ? Math.random() * 1000 : 0
      };            
      days.push(day);
    }

    this.state = {
      days: days      
    }
  }

  render() {
    return (
      
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={this.state.days}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dateFormatted" tick={<CustomizedAxisTick/>} interval={0}/>
                  <YAxis />
                  <Tooltip formatter= { tooltipCurrencyFormatter }/>
                  <Legend />
                  <ReferenceLine y={0} stroke="#000" />
                  <Bar name="wydatki" dataKey="expenditure" fill="#8884d8">
                    <LabelList dataKey="expenditure" position="top" formatter={currencyFormatter} />
                  </Bar>
                  <Bar name="przychody" dataKey="income" fill="#82ca9d">
                    <LabelList dataKey="income" position="top" formatter={currencyFormatter}/>
                  </Bar>
                </BarChart>

            {/* <PieChart>
              <Pie dataKey="value" data={data} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>

              <Legend verticalAlign="top" height={10} />
            </PieChart> */}
          </ResponsiveContainer>
        </div>
      
    );
  }  
}
