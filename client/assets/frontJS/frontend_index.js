import '/assets/frontJS/vue.js';

async function request (url, method='GET', data = null){
    try{
        data = null;
        const headers = {};
        let body;
        if(data){
            headers['Content-type'] = 'application/json';
            body = JSON.stringify(data);
        }
        const response = await fetch(url,{
            method,
            headers,
            body
        });
        return await response.json();
    } catch(e){
        console.warn('Error: ', e.message);
    }
};

let res = request('/hello', 'GET');