const { useState, use } = require("react");

async function getData(url) {
    const e = await fetch(url);
    const r = await e.json();
    return(r)
}

export default getData