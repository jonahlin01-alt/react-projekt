
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
        className="w-100"
        style={{ height: "250px" }}
        background-
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 10,
            }}
          >
            <XAxis dataKey="Year" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="Total"
              name="CO₂-utsläpp"
              stroke="#198754"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

     
      <p className="text-center small mb-2">
        Anpassa diagrammet
      </p>

      
      <div className="row g-2">

        <div className="col-6">
          <select
            className="form-select form-select-sm"
            value={startYear}
            onChange={(e) =>
              setStartYear(Number(e.target.value))
            }
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6">
          <select
            className="form-select form-select-sm"
            value={endYear}
            onChange={(e) =>
              setEndYear(Number(e.target.value))
            }
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

      </div>

    </div>
  );
};