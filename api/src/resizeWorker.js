const gm = require('gm');
const {workerData, parentPort} = require('worker_threads');

gm(workerData.source).resize(100, 100).write(workerData.destination, (error) => {
    if (typeof error === "boolean") {
        parentPort.postMessage({resized : true});
        throw(error);
    }
});