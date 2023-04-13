import { Card, Metric, ProgressBar, Text, Title } from '@tremor/react'
import React from 'react'

export function CounUsersCard({ countUsers }) {
    return (
        <Card className='text-center w-[50%]'>
            <Title>Usuarios del sitio</Title>
            <ProgressBar percentageValue={countUsers} label={`${countUsers} usuarios`} />
        </Card>
    )
}
