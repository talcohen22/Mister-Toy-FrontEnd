import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { toyService } from '../services/toy.service';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function ToyDashboard() {

    const [labelsMapByPrice, setLabelsMapByPrice] = useState(null)
    const [labelsMapByInStock, setLabelsMapByInStock] = useState(null)

    useEffect(() => {
        toyService.getAvgByLabelFor('price').then(setLabelsMapByPrice)
        toyService.getAvgByLabelFor('inStock').then(setLabelsMapByInStock)
    }, [])

    if (labelsMapByPrice) {
        var data = {
            labels: labelsMapByPrice.labels,
            datasets: [
                {
                    label: 'Avg Price $',
                    data: labelsMapByPrice.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }

    if (labelsMapByInStock) {
        var data2 = {
            labels: labelsMapByInStock.labels,
            datasets: [
                {
                    label: 'In Stock ',
                    data: labelsMapByInStock.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }

    if (!labelsMapByPrice || !labelsMapByInStock) return <div>Loading...</div>
    return (
        <section className='dashboard-container'>
            <h1>Avg Price By Label</h1>
            <Doughnut data={data} />
            <h1>Avg InStock By Label</h1>
            <Pie data={data2} />
        </section>
    )
}

