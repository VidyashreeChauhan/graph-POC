

import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarGraph = ({ data }) => {
    // Prepare data for the bar chart
    const chartOptions = {
        xAxis: {
            type: 'category',
            data: data.map(row => row.x)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'bar',
            data: data.map(row => row.y)
        }]
    };

    return <ReactECharts option={chartOptions} />;
};

export default BarGraph;




// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const BarGraph = ({ data }) => {
//     const option = {
//         xAxis: {
//             type: 'category',
//             data: data.map(item => item.x)
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             type: 'bar',
//             data: data.map(item => item.y)
//         }]
//     };

//     return <ReactECharts option={option} />;
// };

// export default BarGraph;

// =============================================================================

// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const BarGraph = ({ data }) => {
//     const { xAxis, yAxis } = data;

//     const option = {
//         title: {
//             text: "BarGraph",
//         },
//         xAxis: {
//             type: 'category',
//             data: xAxis
//         },
//         yAxis: {
//             type: 'value'
//         },
//         series: [{
//             type: 'bar',
//             data: yAxis
//         }]
//     };

//     return (
//         <div style={{ width: '100%', height: '400px' }}>
//             <ReactECharts option={option} />
//         </div>
//     );
// };

// export default BarGraph;
