import React from 'react'
import { Card, DonutChart, ProgressBar, Text, Title } from "@tremor/react";
const cities = [
    {
        name: "New York",
        sales: 9800,
    },
    {
        name: "London",
        sales: 4567,
    },
    {
        name: "Hong Kong",
        sales: 3908,
    },
    {
        name: "San Francisco",
        sales: 2400,
    },
    {
        name: "Singapore",
        sales: 1908,
    },
    {
        name: "Zurich",
        sales: 1398,
    },
];
export const CommonTagsGraph = ({ data }) => {
    // console.log(data);

    return (
        <Card className='mt-3'>
            <Title>Tags mas usados</Title>
            <DonutChart
                data={data.map(d => ({ tag: d.tag, cantidad: Number(d.cantidad) }))}
                category='cantidad'
                variant='pie'
                index='tag'
                colors={data.map(d => d.cantidad >= 1 && d.cantidad <= 3 ? 'indigo'
                    : d.cantidad >= 4 && d.cantidad <= 6 ? 'blue'
                        : d.cantidad >= 7 && d.cantidad <= 10 ? 'red' : 'yellow')} />
        </Card>
    )
}