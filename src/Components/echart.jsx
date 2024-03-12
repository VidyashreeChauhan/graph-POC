import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import LineGraph from './linegraph';
import BarGraph from './Bargraph'


const Echart = () => {

    const [data, setData] = useState([]);
    const [selectedColumn, setSelectedColumn] = useState('#Open');
    const [graphType, setGraphType] = useState(<LineGraph />);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // Fetch the CSV file using a relative path
    //             const response = await fetch('/assets/file/data.csv');
    //             const csvData = await response.text();
    //             console.log(csvData);

    //             // Parse the CSV data
    //             const parsedData = Papa.parse(csvData, { header: true }).data;

    //             // Set the parsed data to state
    //             setData(parsedData);
    //         } catch (error) {
    //             console.error('Error fetching or parsing CSV data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the CSV file using a relative path
                const response = await fetch('assets/files/data.csv');
                const csvData = await response.text();

                // Parse the CSV data
                const parsedData = Papa.parse(csvData, { header: true }).data;

                // Set the parsed data to state
                debugger
                setData(parsedData.slice(0, 100));
            } catch (error) {
                console.error('Error fetching or parsing CSV data:', error);
            }
        };

        fetchData();
    }, []);

    const handleColumnChange = (event) => {
        setSelectedColumn(event.target.value);
    };

    const handleLineButtonClick = () => {
        setGraphType(<LineGraph />);
    };

    // Function to handle Bar button click
    const handleBarButtonClick = () => {
        setGraphType(<BarGraph />);
    };

    return (
        <div>
            <select value={selectedColumn} onChange={handleColumnChange}>
                <option value="#Open">#Open</option>
                <option value="#High">#High</option>
                <option value="#Low">#Low</option>
                <option value="#Close">#Close</option>
                <option value="#Volume">#Volume</option>
            </select>

            {/* Render the visualization based on the selected column */}
            {selectedColumn === '#Open' && <LineGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row.Open) }))} />}
            {selectedColumn === '#High' && <LineGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row.High) }))} />}
            {selectedColumn === '#Low' && <LineGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row.Low) }))} />}
            {selectedColumn === '#Close' && <LineGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row.Close) }))} />}
            {selectedColumn === '#Volume' && <BarGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row.Volume) }))} />}

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <button onClick={handleLineButtonClick}>Line</button>
                <button onClick={handleBarButtonClick}>Bar</button>
            </div>
        </div >

    );
};






// =======================================================================================================

//     const [data, setData] = useState([]);
//     const [selectedColumn, setSelectedColumn] = useState('#Open');

//     useEffect(() => {
//         // Read the CSV file from the assets folder


//         // const fetchData = async () => {
//         //     try {
//         //         // Assuming the assets folder is located in the public directory
//         //         const response = await fetch('/assets/files/dataset.csv');
//         //         if (!response.ok) {
//         //             throw new Error(`Failed to fetch dataset. Status: ${response.status} ${response.statusText}`);
//         //         }
//         //         const csvData = await response.text();
//         //         // Parse CSV data here
//         //         console.log(csvData);
//         //     } catch (error) {
//         //         console.error('Error fetching dataset:', error);
//         //     }
//         // };

//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/assets/files/dataset.csv');
//                 const csvData = await response.text();
//                 console.log("rnfrjr", csvData);


//                 // Parse CSV data
//                 const parsedData = parse(csvData, { header: true }).data;
//                 setData(parsedData);
//             } catch (error) {
//                 console.error('Error fetching dataset:', error);
//             }
//         };

//         //         const parsedData = window.Papa.parse(csvData, { header: true }).data;
//         //         setData(parsedData);

//         //     } catch (error) {
//         //         console.error('Error fetching dataset:', error);
//         //     }
//         // };

//         fetchData();
//     }, []);

//     const handleColumnChange = (event) => {
//         setSelectedColumn(event.target.value);
//     };

//     const getChartData = () => {
//         // Prepare data for LineGraph or BarGraph based on the selected column
//         return data.map(row => ({ x: row.Date, y: parseFloat(row[selectedColumn]) }));
//     };

//     const chartData = getChartData();

//     return (
//         <div>
//             <select value={selectedColumn} onChange={handleColumnChange}>
//                 <option value="#Open">Open</option>
//                 <option value="#High">High</option>
//                 <option value="#Low">Low</option>
//                 <option value="#Close">Close</option>
//                 <option value="#Volume">Volume</option>
//             </select>

//             {/* Render the selected column data using LineGraph or BarGraph */}
//             {selectedColumn === '#Open' && <LineGraph data={chartData} />}
//             {selectedColumn !== '#Open' && <BarGraph data={chartData} />}
//         </div>
//     );
// };


// ========================================================================================================




//     const [graphType, setGraphType] = useState('line');

//     const GraphData = {
//         xAxis: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//         yAxis: [150, 230, 224, 218, 135, 147, 260, 297, 184, 105, 80, 99]
//     };


//     const handleLineButtonClick = () => {
//         setGraphType('line');
//     };

//     const handleBarButtonClick = () => {
//         setGraphType('bar');
//     };

//     return (
//         <div >
//             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
//                 <button onClick={handleLineButtonClick}>Line Graph</button>
//                 <button onClick={handleBarButtonClick}>Bar Graph</button>
//             </div>
//             <div style={{ marginTop: '20px' }}>
//                 {graphType === 'line' ? <LineGraph data={GraphData} /> : <BarGraph data={GraphData} />}
//             </div>
//         </div>
//     );
// };


export default Echart;
