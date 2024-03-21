// csvParserWorker.js (Web Worker File)
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"
);

// Event handler for receiving messages from the main thread
self.onmessage = function (e) {
  const csvData = e.data;

  // Parse the CSV data using Papaparse
  const parsedData = self.Papa.parse(csvData, { header: true }).data;

  // Send the parsed data back to the main thread
  self.postMessage(parsedData);
};
