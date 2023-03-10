import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const statistics = useLoaderData();
    console.log(statistics.data)
    return (
        <div>
            <h2 className='font-mono text-3xl font-bold my-6 text-orange-600'>Statistics</h2>
            <div className='inline-block mt-20'>

                <LineChart
                    width={500}
                    height={400}
                    data={statistics.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="name" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>

            </div>
            <p className='font-mono text-center mt-3 mb-5'>Fig: Showing statistics against Quiz name and total questions</p>
        </div>
    );
};

export default Statistics;