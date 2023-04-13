import React, { useEffect, useState } from 'react'
import { Grid, Col, Card, Text, Metric, TabList, Tab } from "@tremor/react";
import axios from 'axios';
import { CommonTagsGraph } from '../components/CommonTagsGraph';
import { CounUsersCard } from "../components/CounUsersCard";
import { CountPostByTagCard } from '../components/CountPostByTagCard';

export default function DashboardAdmin() {
    const [siteUsers, setSiteUsers] = useState(0)
    const [sitePosts, setSitePosts] = useState(0)
    const [siteTags, setSiteTags] = useState([])
    const [selectedView, setSelectedView] = useState(1)

    const countUsers = async (isPremium) => {
        let query = isPremium ? `?isPremium=${isPremium}` : ""
        const res = await axios.get(`/countUsers${query}`)
        if (res.data) {
            setSiteUsers(res.data)
        }
    }
    const countPostByTag = async (tag) => {
        let query = tag ? `?tag=${tag}` : ""
        const res = await axios.get(`/countPosts${query}`)
        if (res.data) {
            setSitePosts(res.data)
        }
    }
    const commonTags = async () => {
        const res = await axios.get("/commonTags")
        if (res.data) {
            setSiteTags(res.data)
        }
    }
    useEffect(() => {
        countUsers()
        countPostByTag()
        commonTags()
    }, [])
    console.log(selectedView);
    return (
        <div className='m-auto text-center'>
            <Text className='text-center text-2xl'>Dashboard admin</Text>
            <TabList defaultValue={selectedView}
                className='w-screen mt-6'
                onValueChange={value => setSelectedView(Number(value))}>
                <Tab value={1} text='Principal' />
                <Tab value={2} text='Detalles' />
            </TabList>
            {
                selectedView === 1 ? (
                    <>
                        <Grid className="gap-5 mt-3"
                            numCols={1}
                            numColsMd={2}
                            numColsLg={2}>
                            <Col>
                                <CounUsersCard countUsers={siteUsers} />
                            </Col>
                            <Col>
                                <CountPostByTagCard countPosts={sitePosts} />
                            </Col>
                        </Grid>
                        <CommonTagsGraph data={siteTags} />
                    </>
                ) : (
                    <></>
                )
            }
        </div>
    )
}
