import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import KpiCard from "./KpiCard";

const COLORS = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6A4C93"];

const dataBestSelling = [
  { name: "Pizza", value: 450 },
  { name: "Burger", value: 300 },
  { name: "Fries", value: 150 },
  { name: "Drinks", value: 100 },
];

const ordersPerDay = [
  { day: "Mon", orders: 120 },
  { day: "Tue", orders: 210 },
  { day: "Wed", orders: 180 },
  { day: "Thu", orders: 260 },
  { day: "Fri", orders: 300 },
  { day: "Sat", orders: 320 },
  { day: "Sun", orders: 150 },
];

const newVsReturning = [
  { name: "New", value: 400 },
  { name: "Returning", value: 600 },
];

const ratingsOverTime = [
  { month: "Jan", rating: 4.2 },
  { month: "Feb", rating: 4.5 },
  { month: "Mar", rating: 4.1 },
  { month: "Apr", rating: 4.7 },
];

const couponUsage = [
  { name: "Summer20", uses: 120 },
  { name: "WELCOME10", uses: 80 },
  { name: "VIP50", uses: 40 },
];

const Statistics = () => {
  return (
    <div
      style={{
        padding: 30,
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>
        📊 Restaurant Statistics Dashboard
      </h1>

      {/* KPIs Row */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <KpiCard title="Total Revenue (Monthly)" value={12500} suffix="$" color="#4caf50" />
        <KpiCard title="Orders Today" value={320} color="#2196f3" />
        <KpiCard title="Avg Order Value" value={38} suffix="$" color="#ff9800" />
        <KpiCard title="Returning Customers" value={480} color="#f44336" />
      </div>

      {/* Sales & Orders Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          marginTop: 50,
          justifyContent: "center",
        }}
      >
        {/* Best Selling Dish Pie Chart */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            padding: 20,
            flex: "1 1 350px",
            maxWidth: 450,
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Best-Selling Dishes
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataBestSelling}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {dataBestSelling.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Per Day Bar Chart */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            padding: 20,
            flex: "1 1 350px",
            maxWidth: 450,
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Orders Per Day
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ordersPerDay}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Insights Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          marginTop: 50,
          justifyContent: "center",
        }}
      >
        {/* New vs Returning Customers Doughnut */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            padding: 20,
            flex: "1 1 300px",
            maxWidth: 400,
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            New vs Returning Customers
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={newVsReturning}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                label
              >
                {newVsReturning.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Average Ratings Over Time Line Chart */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            padding: 20,
            flex: "1 1 400px",
            maxWidth: 450,
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Average Ratings Over Time
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={ratingsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[3, 5]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#82ca9d"
                strokeWidth={3}
                dot={{ r: 5, stroke: "#82ca9d", strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Promotions Section */}
      <div
        style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          padding: 20,
          marginTop: 50,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Coupon Usage</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={couponUsage} layout="vertical" margin={{ left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="uses" fill="#ff7f50" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
