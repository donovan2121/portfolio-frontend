let visitor = document.querySelector("#visitor");

// let count = parseInt(localStorage.getItem('visitorCounter') || '0');
// fetch from API
const apiUrl = 'https://1xwja6qasb.execute-api.us-east-1.amazonaws.com/prod/visitors';

fetch(apiUrl + "?id=101")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let visitors = data;
        console.log(data);
        let count = visitors.visitorCount + 1;
        let visitorCount = document.createElement('span');
        visitorCount.innerText = `${count}`;
        visitor.appendChild(visitorCount);
        updateVisitors(count);
        }
    );


function getVisitors(){

}

function updateVisitors(count){
    fetch(apiUrl, {
        method: 'PATCH',
        body: JSON.stringify({
            "id": "101",
            "updateKey": "visitorCount",
            "updateValue": count
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        // .then((json) => console.log(json));
}