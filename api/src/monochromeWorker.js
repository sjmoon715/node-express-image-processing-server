const gm = require('gm');
const {workerData, parentPort} = require('worker_threads');

gm(workerData.source).monochrome().write(workerData.destination, (error) => {
    if (typeof error === "boolean"){
        parentPort.postMessage({monochrome : true});
        throw(error);
    }
});