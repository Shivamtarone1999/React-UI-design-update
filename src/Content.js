import React from 'react';
import Card from './Card';
import TableStoryList from './StoryList';
import './Content.css';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
// import BarChart from 'react-bar-chart';
import TablePublicationList from './PublicationList';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

import image1 from './Images/1.svg';
import image__active__users from './Images/active__users.svg';
import image__categories from './Images/categories.svg';
import image__number__stories from './Images/number__stories.svg';
import image__podcasts from './Images/podcasts.svg';
import image__publications from './Images/publications.svg';
import image__total__playing from './Images/total__playing.svg';

function Content() {

    const data = [
        {
            color: "steelblue",
            points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }, { x: 15, y: 20 }]
        }
    ];

    const data2 = [{ name: 'Category 1', uv: 100, pv: 500, amt: 2400 }, { name: 'Category 2', uv: 600, pv: 2400, amt: 2400 }, { name: 'Category 3', uv: 300, pv: 2400, amt: 2400 }];



    return (
        <div className="main__content">
            <div className="content__items">
                <div className="content__heading">
                    <h2>Main - Dashboard</h2>
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Download Report
                </Button>
                </div>
            </div>

            {/* Date Picker */}

            <div className="date__picker">

                <p>Select Date</p>

                <form noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2020-10-02"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>

                <form noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2020-10-02"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div><br />


            <div className="cards">
                <div className="card__align">
                    <Card cardHead="No. of Subscriber" cardContent={54566} image={image1} />
                    <Card cardHead="Active Users" cardContent={10245} image={image__active__users} />
                    <Card cardHead="No. of Stories" cardContent={1000} image={image__number__stories}
                    />
                </div>

                <div className="card__align">
                    <Card cardHead="No. of Publications" cardContent={125} image={image__publications} />
                    <Card cardHead="No. of Categories" cardContent={895} image={image__categories} />
                    <Card cardHead="No. of Podcasts" cardContent={750} image={image__podcasts} />
                </div>

                <div className="" style={{
                    marginLeft: '26px'
                }}>
                    <Card cardHead="Total Playing Today" cardContent={125} image={image__total__playing} />
                </div>


            </div>
            <br />
            <hr />

            {/* Date Picker */}

            <div className="date__picker">

                <p>Select Date</p>

                <form noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2020-10-02"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>

                <form noValidate>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2020-10-02"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>

            {/* Charts */}

            <div className="charts">
                {/* <div className="pieChart">
                    <PieChart className="pie__chart"
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />
                    <p>Publications</p>
                </div> */}

                {/* <div className="bar__graph">
                    <BarChart style={{ marginTop: '25px' }} width={600} height={300} data={data2}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={30} />

                    </BarChart>
                    <p style={{ textAlign: 'center' }}>Categories</p>
                </div> */}

            </div>

            <br /><br />

            {/* <div className="Line__chart">
                <LineChart
                    width={800}
                    height={400}
                    data={data}
                />
                <p>Stories (by date)</p>
            </div> */}

            <br /><br /><br />

            {/* Story List */}
            <div className="TableStoryList">
                <TableStoryList />
            </div>

            <br /><br />
            {/* Publication List */}
            {/* <div className="TablePublicationList">
                <TablePublicationList />
            </div> */}

        </div>
    )
}

export default Content;