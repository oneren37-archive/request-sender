export function sendRequest(url, method, headers=null, body=null){
    return fetch(url,{
        method: method,
        body: method!=="GET" ? JSON.stringify(body) : null,
        headers: headers
    }).then(response => response.text())
}