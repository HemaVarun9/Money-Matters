import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

function WeeklyChart({ data = [] }) {
  return (
    <section className="weekly-chart">
      <h2 className="weekly-chart__title">Weekly Overview</h2>

      <div className="weekly-chart__container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="credit"
              name="Credit"
              fill="#16bbaa"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="debit"
              name="Debit"
              fill="#ff5c5c"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default WeeklyChart