import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
const colors = ['#23606E', '#FACFCE', "#008F8C", "#015958", "#023535"];

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
        return {
          name: genre,
          value: filteredEvents.length
        }});

    setData(data);
  }, [events]);

  

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;

    const fillColor = colors[index % colors.length]; // added this line

    return percent ? (
      <text
        x={x}
        y={y}
        fill={fillColor} //changed this line
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}    
        >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))} 
        </Pie>  
      </PieChart>
    </ResponsiveContainer>
  );

}

export default EventGenresChart;