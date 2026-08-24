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
        className="w-100 rounded-3"
        style={{
          height: "280px",
          backgroundColor: "#fff0cf",
          padding: "12px 8px 4px 4px",
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
              height={35}
              tickMargin={7}
              tick={{
                fontSize: 10,
              }}
            />

            <YAxis
              width={55}
              tickMargin={5}
              tick={{
                fontSize: 10,
              }}
            />

            <Tooltip
              contentStyle={{
                fontSize: "11px",
              }}
            />

            <Line
              type="monotone"
              dataKey="Total"
              name="CO₂-utsläpp"
              stroke="#d95b27"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p
        className="text-center mt-3 mb-2"
        style={{
          fontSize: "0.7rem",
        }}
      >
        Anpassa diagrammet
      </p>

      <div className="row g-2 justify-content-center">
        <div className="col-6">
          <select
            className="form-select form-select-sm"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
            style={{
              fontSize: "0.7rem",
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
              fontSize: "0.7rem",
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