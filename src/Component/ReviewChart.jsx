import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useMobileApps from "../Hooks/useMobileApps";

const ReviewChart = () => {
  const [mobileApps, loading, error] = useMobileApps();
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  const reviews=mobileApps[0].ratings;
  const data = reviews.slice().reverse()
  return (
    <>
      <h2 className="text-lg font-semibold text-[#001931] mb-4">Ratings</h2>
      <div className="w-full md:w-8/12 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 10, left: 0, right: 40, bottom: 10 }}
          >
            <XAxis type="number" tick={{ fill: "#4B5563" }} />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#4B5563" }}
              width={70}
            />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar
              dataKey="count"
              fill="#FF8C00"
              radius={[0, 5, 5, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default ReviewChart;
