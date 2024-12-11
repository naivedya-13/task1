import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const data = [
  { month: 'Sep', productOne: 23, productTwo: 30 },
  { month: 'Oct', productOne: 30, productTwo: 40 },
  { month: 'Nov', productOne: 25, productTwo: 35 },
  { month: 'Dec', productOne: 50, productTwo: 60 },
  { month: 'Jan', productOne: 70, productTwo: 75 },
  { month: 'Feb', productOne: 80, productTwo: 85 },
  { month: 'Mar', productOne: 90, productTwo: 95 },
  { month: 'Apr', productOne: 60, productTwo: 55 },
  { month: 'May', productOne: 40, productTwo: 45 },
  { month: 'Jun', productOne: 20, productTwo: 25 },
  { month: 'Jul', productOne: 15, productTwo: 18 },
  { month: 'Aug', productOne: 60, productTwo: 65 },
];

const chartData = [
  { day: 'Mon', sales: 40, revenue: 50 },
  { day: 'Tue', sales: 60, revenue: 70 },
  { day: 'Wed', sales: 50, revenue: 60 },
  { day: 'Thu', sales: 80, revenue: 90 },
  { day: 'Fri', sales: 90, revenue: 100 },
  { day: 'Sat', sales: 70, revenue: 85 },
  { day: 'Sun', sales: 60, revenue: 70 },
];

const DashboardChart = () => {
  const [chartType, setChartType] = useState('Day'); // 'Day', 'Week', 'Month'

  return (
    <div className="flex justify-between gap-8 rounded-md">
      {/* Line Chart */}
      <div className="w-1/2 rounded-sm shadow-md">
        <div className="flex flex-col mb-4">
          <h3 className="text-lg font-semibold mb-2 ml-3">Total Revenue and Sales</h3>
          {/* Buttons for Line Chart */}
          <div className="flex space-x-4 ml-72 mb-4">
            <button
              onClick={() => setChartType('Day')}
              className={`px-4 py-2 rounded border ${
                chartType === 'Day' ? 'bg-blue-500 text-white' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setChartType('Week')}
              className={`px-4 py-2 rounded border ${
                chartType === 'Week' ? 'bg-blue-500 text-white' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setChartType('Month')}
              className={`px-4 py-2 rounded border ${
                chartType === 'Month' ? 'bg-blue-500 text-white' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
            >
              Month
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="productOne" stroke="#8884d8" />
            <Line type="monotone" dataKey="productTwo" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-1/2 m-2 p-2 rounded-sm shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Profit this week</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#0000A0" />
            <Bar dataKey="revenue" fill="#ADD8E6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
