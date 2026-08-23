import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Co2LineChart = ({ myData }) => {
  const years = myData.map((item) => Number(item.Year));

  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const [startYear, setStartYear] = useState(minYear);
  const [endYear, setEndYear] = useState(maxYear);

  const filteredData = myData.filter((item) => {
    const year = Number(item.Year);

    return year >= startYear && year <= endYear;
  });

  return (
    <div>
      <div className="row g-3 mb-4">

        {/* Startår */}
        <div className="col-md-6">
          <label htmlFor="startYear" className="form-label">
            Startår
          </label>

          <select
            id="startYear"
            className="form-select"
            value={startYear}
            onChange={(e) => {
              setStartYear(Number(e.target.value));
            }}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Slutår */}
        <div className="col-md-6">
          <label htmlFor="endYear" className="form-label">
            Slutår
          </label>

          <select
            id="endYear"
            className="form-select"
            value={endYear}
            onChange={(e) => {
              setEndYear(Number(e.target.value));
            }}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Diagram */}
      <LineChart
        width={800}
        height={400}
        data={filteredData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <XAxis dataKey="Year" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="Total"
          name="Totala CO₂-utsläpp"
          stroke="#198754"
        />
      </LineChart>
    </div>
  );
};