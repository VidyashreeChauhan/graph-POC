import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import LineGraph from './linegraph';
import BarGraph from './Bargraph';
import Worker from './csvParserWorker'; // Import the web worker file


const Echart = () => {

    const [data, setData] = useState([]);
    const [selectedColumn, setSelectedColumn] = useState('Open');
    const [graphType, setGraphType] = useState('line');
    const [worker, setWorker] = useState(null);


    useEffect(() => {
        // Initialize the web worker
        const newWorker = new Worker();

        // Listen for messages from the worker
        newWorker.onmessage = function (e) {
            const parsedData = e.data;
            setData(parsedData);
        };

        setWorker(newWorker);

        return () => {
            // Terminate the worker when component unmounts
            newWorker.terminate();
        };
    }, []);


    const handleColumnChange = (event) => {
        setSelectedColumn(event.target.value);
    };

    const handleLineButtonClick = () => {
        setGraphType('line');
    };

    // Function to handle Bar button click
    const handleBarButtonClick = () => {
        setGraphType('bar');
    };

    const fetchCSVFile = async () => {
        try {
            // Fetch the CSV file using a relative path
            const response = await fetch('assets/files/data.csv');
            const csvData = await response.text();

            // Send the CSV data to the web worker for parsing
            worker.postMessage(csvData);
        } catch (error) {
            console.error('Error fetching or parsing CSV data:', error);
        }
    };

    useEffect(() => {
        // Fetch the CSV file when component mounts
        fetchCSVFile();
    }, []);

    return (
        <div>
            <select value={selectedColumn} onChange={handleColumnChange}>
                <option value="Open">#Open</option>
                <option value="High">#High</option>
                <option value="Low">#Low</option>
                <option value="Close">#Close</option>
                <option value="Volume">#Volume</option>
            </select>

            {/* Render the visualization based on the selected column */}
            {graphType === 'line' && <LineGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row[selectedColumn]) }))} />}
            {graphType === 'bar' && <BarGraph data={data.map(row => ({ x: row.Date, y: parseFloat(row[selectedColumn]) }))} />}


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <button onClick={handleLineButtonClick}>Line</button>
                <button onClick={handleBarButtonClick}>Bar</button>
            </div>
        </div >

    );
};


export default Echart;  