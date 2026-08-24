import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
      <div
        className="w-100 rounded"
        style={{
          height: "280px",
          backgroundColor: "#e9f8df",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{
              top: 15,
              right: 15,
              left: 10,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="Year"
              tickMargin={8}
              height={35}
              tick={{
                fontSize: 11,
              }}
            />

            <YAxis
              width={55}
              tickMargin={6}
              tick={{
                fontSize: 11,
              }}
            />

            <Tooltip
              contentStyle={{
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="Total"
              name="CO₂-utsläpp"
              stroke="#198754"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p
        className="text-center mt-3 mb-2"
        style={{
          fontSize: "12px",
        }}
      >
        Anpassa diagrammet
      </p>

      <div className="row g-2">
        <div className="col-6">
          <select
            className="form-select form-select-sm"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
            style={{
              fontSize: "12px",
            }}
          >
            {years.map((year) => (
              <option
                key={`start-${year}`}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6">
          <select
            className="form-select form-select-sm"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
            style={{
              fontSize: "12px",
            }}
          >
            {years.map((year) => (
              <option
                key={`end-${year}`}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};