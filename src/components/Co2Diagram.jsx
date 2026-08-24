import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Co2Diagram = ({ myData }) => {
  const years = myData.map((item) => Number(item.Year));

  const [startYear, setStartYear] = useState(Math.min(...years));
  const [endYear, setEndYear] = useState(Math.max(...years));

  const filteredData = myData.filter((item) => {
    const year = Number(item.Year);
    return year >= startYear && year <= endYear;
  });

  return (
    <div>
      <div
        className="w-100 rounded-3 p-2"
        style={{
          height: "300px",
          backgroundColor: "#fff0cf",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="Year"
              height={45}
              tickMargin={8}
            />

            <YAxis
              width={70}
              tickMargin={6}
            />

            <Tooltip />

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

      <p className="text-center mt-3 mb-2">
        Anpassa diagrammet
      </p>

      <div className="row g-2">
        <div className="col-6">
          <select
            className="form-select"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
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
            className="form-select"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
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