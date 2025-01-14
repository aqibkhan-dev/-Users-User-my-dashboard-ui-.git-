"use client";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb 14', uv: 4000 },
  { name: 'Feb 15', uv: 3000 },
  { name: 'Feb 16', uv: 2000 },
  { name: 'Feb 17' },
  { name: 'Feb 18', uv: 1890 },
  { name: 'Feb 19', uv: 2390 },
  { name: 'Feb 20', uv: 0 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-connect-nulls-mql3pj';

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

     
      </div>
    );
  }
}
