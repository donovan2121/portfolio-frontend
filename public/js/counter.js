let visitor = document.querySelector("#visitor");

// let count = parseInt(localStorage.getItem('visitorCounter') || '0');
// fetch from API
const apiUrl = 'https://1xwja6qasb.execute-api.us-east-1.amazonaws.com/prod/visitors';


function getVisitors(){
    fetch(apiUrl + "?id=101")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let visitors = data;
            console.log(data);
            let count;
            if (visitors.visitorCount != NaN){
                count = visitors.visitorCount + 1;
            }
            else {
                postVisitors();
            }
            let visitorCount = document.createElement('span');
            visitorCount.innerText = `${count}`;
            visitor.appendChild(visitorCount);
            updateVisitors(count);
            }
        )
}

function postVisitors(){
    let data = {
        "id": "101",
        "visitorCount": 30
      };
    
    let fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        }
    };
      
    fetch(apiUrl, fetchData,)
        .then((response) => response.json())
        // .then(res => console.log(res)); 
}

function updateVisitors(count){
    let fetchData = 
    {
        method: 'PATCH',
        body: JSON.stringify({
            "id": "101",
            "updateKey": "visitorCount",
            "updateValue": count
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    

    fetch(apiUrl, fetchData)
        .then((response) => response.json())
        // .then((json) => console.log(json));
}

getVisitors();