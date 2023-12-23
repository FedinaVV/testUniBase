const url = "https://jsonplaceholder.typicode.com/posts";
const tbody = document.getElementById('tbody');

let request = new Request(url, {
    method: 'GET'
});

function getData() {
    fetch(request)
        .then(response => {
            const promise = response.json();
            promise.then(data => {
                console.log(data)
                data.forEach(item => {
                    const tr = document.createElement('tr');
                    const tdUserId = document.createElement('td');
                    const tdId = document.createElement('td');
                    const tdTitle = document.createElement('td');
                    const tdBody = document.createElement('td');

                    tbody.append(tr);
                    tr.append(tdUserId);
                    tr.append(tdId);
                    tr.append(tdTitle);
                    tr.append(tdBody);

                    tdUserId.innerText = item.userId;
                    tdId.innerText = item.id;
                    tdTitle.innerText = item.title;
                    tdBody.innerText = item.body;
                })
            })
        });
}

getData();





