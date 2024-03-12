


import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineGraph = ({ data }) => {
    // Prepare data for the line chart
    const chartOptions = {
        xAxis: {
            type: 'category',
            data: data.map(row => row.x)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'line',
            data: data.map(row => row.y)
        }]
    };

    return <ReactECharts option={chartOptions} />;
};

export default LineGraph;




// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const LineGraph = ({ data }) => {
//     const option = {
//         xAxis: {
//             type: 'category',
//             data: data.map(item => item.x)
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             type: 'line',
//             data: data.map(item => item.y)
//         }]
//     };

//     return <ReactECharts option={option} />;
// };

// export default LineGraph;

// =====================================================================

// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const LineGraph = ({ data }) => {
//     const { xAxis, yAxis } = data;

//     const option = {
//         title: {
//             text: "LineGraph",
//         },
//         xAxis: {
//             type: 'category',
//             data: xAxis
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             type: 'line',
//             data: yAxis
//         }]
//     };

//     return (
//         <div style={{ width: '100%', height: '400px' }}>
//             <ReactECharts option={option} />
//         </div>
//     );
// };

// export default LineGraph;
