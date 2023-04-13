import { Card, Metric, ProgressBar, Title } from '@tremor/react'
import React from 'react'

export function CountPostByTagCard({ countPosts, tag }) {
    return (
        <Card className='text-center'>
            <Title>Posts {tag ? `con tag ${tag}` : 'totales'}</Title>
            <ProgressBar percentageValue={countPosts} label={`${countPosts} ${tag ? `posts de ${tag}` : 'posts totales'}`} />
        </Card>
    )
}
