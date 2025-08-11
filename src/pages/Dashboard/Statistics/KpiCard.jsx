import React from "react";
import CountUp from "react-countup";

const KpiCard = ({ title, value, suffix, color }) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        padding: 20,
        flex: "1 1 180px",
        margin: 10,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        color: color || "#333",
        fontWeight: "600",
      }}
    >
      <div style={{ fontSize: 14, marginBottom: 10, textTransform: "uppercase" }}>
        {title}
      </div>
      <div style={{ fontSize: 28, lineHeight: 1 }}>
        <CountUp end={value} duration={1.5} separator="," /> {suffix || ""}
      </div>
    </div>
  );
};

export default KpiCard;
