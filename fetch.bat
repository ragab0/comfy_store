GET:
    ## sendHttpRequest("GET", "URL").then;
    || fetch("URL").then(res => res.json()).then(transformedUsableData => log(transformedUsableData));

POST:
    ## sendHttpRequest("POST", "URL", dataInTheSameFormatOfApi).then;
    && fetch("URL", {method: "POST", headers: {}, body: JSON.stringify(dataInTheSameFormatOfApi)})



Response Object
===============
Consists of:
    - body: ReadableStream;
    - ok: true || false;
    - status: 200 || 500 || ..;

Consists of Mehtods:
    .json(): Returns a promise of transformed coding in json format that can used with JS;
    .text(): Returns a prom;






========================================
FULL DYNAMIC_EXAMPLE for all cases =====
========================================
function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: data ? {"Content-Type":"application/json"} : {} @rem empty object: no speciall header
    })
}