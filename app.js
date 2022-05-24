//I have modified this file.

global.setTimeout (() => {
    console.log ('I set a timeout for 3 seconds');
}, 3000);

setInterval (() => {
    console.log("Then, I reoccur every 5 seconds, till infinity");
}, 5000);

setInterval (() => {
    console.log('To stop me, press ctr + C');
}, 7000);

