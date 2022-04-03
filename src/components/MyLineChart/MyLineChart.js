import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2410,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4230,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7260,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6700,
            "revenue": 61000
        },
        {
            "month": "Sep",
            "investment": 80000,
            "sell": 7700,
            "revenue": 69000
        },
        {
            "month": "Oct",
            "investment": 90000,
            "sell": 7900,
            "revenue": 71000
        },
        {
            "month": "Nov",
            "investment": 110000,
            "sell": 8700,
            "revenue": 81000
        },
        {
            "month": "Dec",
            "investment": 120000,
            "sell": 9600,
            "revenue": 91000
        }
    ]
    return (
        <div>
            <h2 className='text-4xl my-9'>Fiscal year 2021</h2>
            <div className='grid gap-3 md:grid-cols-2 mx-auto items-center'>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey={'investment'} stroke="#4169e1" />
                    <Line type="monotone" dataKey={'sell'} stroke="#FF7F50" />
                    <Line type="monotone" dataKey={'revenue'} stroke="#9b1c31" />
                    <CartesianGrid stroke='#ccc' strokeDasharray="5 5"></CartesianGrid>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>

                <BarChart width={500} height={300} data={data}>
                    <Bar dataKey={'investment'} fill="#4169e1" />
                    <Bar dataKey={'sell'} fill="#FF7F50" />
                    <Bar dataKey={'revenue'} fill="#9b1c31" />
                    <CartesianGrid stroke='#ccc'></CartesianGrid>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

        </div>
    );
};

export default MyLineChart;