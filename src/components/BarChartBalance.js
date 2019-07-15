import React, { PureComponent } from "react";
import moment from "moment";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  LabelList
} from "recharts";

function currencyFormatter(value) {
  if (value === 0) return null;
  else return value.toFixed(2) + " zł";
}

function tooltipCurrencyFormatter(value) {
  return value.toFixed(2) + " zł";
}

export class BarChartBalance extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: "100%", height: 400, marginTop: 50 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={this.props.data.map(entry => {
              const day = {
                date: moment(entry.transactionDate, "DD-MM-YYYY"),
                dateFormatted: moment(
                  entry.transactionDate,
                  "DD-MM-YYYY"
                ).format("DD-MM-YYYY"),
                expenditure: entry.type === "wydatki" ? entry.amount : 0,
                income: entry.type === "wpływy" ? entry.amount : 0
              };
              return day;
            })}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dateFormatted"
              tick={<CustomizedAxisTick />}
              interval={0}
            />
            <YAxis />
            <Tooltip formatter={tooltipCurrencyFormatter} />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar name="wydatki" dataKey="expenditure" fill="#8884d8">
              <LabelList
                dataKey="expenditure"
                position="top"
                formatter={currencyFormatter}
              />
            </Bar>
            <Bar name="przychody" dataKey="income" fill="#82ca9d">
              <LabelList
                dataKey="income"
                position="top"
                formatter={currencyFormatter}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    var date = moment(payload.value, "DD-MM-YYYY").format("DD-MM");
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {date}
        </text>
      </g>
    );
  }
}
