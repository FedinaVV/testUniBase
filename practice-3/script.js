const url = "https://jsonplaceholder.typicode.com/posts";
const tbody = document.getElementById('tbody');
const thUserId = document.getElementById('thUserId');
const thId = document.getElementById('thId');
const thTitle = document.getElementById('thTitle');
const thBody = document.getElementById('thBody');
const filter = document.getElementById('filter');

let posts = [];
let isSortUserIdAscending = false;
let isSortIdAscending = false;
let isSortTitleFromAToZ = true;
let isSortBodyFromAToZ = true;

let request = new Request(url, {
    method: 'GET'
});

/**
 * Создание таблицы
 * @param posts - посты
 */
function createTableBody(posts) {
    tbody.innerHTML = "";
    posts.forEach(post => {
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

        tdUserId.innerText = post.userId;
        tdId.innerText = post.id;
        tdTitle.innerText = post.title;
        tdBody.innerText = post.body;
    });
}

/**
 * Получение постов с сервера и вывод их в таблице
 */
function getData() {
    fetch(request)
        .then(response => {
            const promise = response.json();
            promise.then(data => {
                posts = data;
                createTableBody(posts);
            })
        })
}

/**
 * Сортировка постов по UserId
 */
thUserId.addEventListener('click', function sortUserId() {
    let sortedPosts = [];

    if (isSortUserIdAscending) {
        sortedPosts = posts.sort((a, b) => (a.userId - b.userId));
    } else {
        sortedPosts = posts.sort((a, b) => (b.userId - a.userId));
    }

    isSortUserIdAscending = !isSortUserIdAscending;
    createTableBody(sortedPosts);
});

/**
 * Сортировка постов по Id
 */
thId.addEventListener('click', function sortId() {
    let sortedPosts = [];

    if (isSortIdAscending) {
        sortedPosts = posts.sort((a, b) => (a.id - b.id));
    } else {
        sortedPosts = posts.sort((a, b) => (b.id - a.id));
    }

    isSortIdAscending = !isSortIdAscending;
    createTableBody(sortedPosts);
});

/**
 * Сортировка постов по Title
 */
thTitle.addEventListener('click', function sortTitle() {
    let sortedPosts = [];

    if (isSortTitleFromAToZ) {
        sortedPosts = posts.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    } else {
        sortedPosts = posts.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }

    isSortTitleFromAToZ = !isSortTitleFromAToZ;
    createTableBody(sortedPosts);
});

/**
 * Сортировка постов по Body
 */
thBody.addEventListener('click', function sortBody() {
    let sortedPosts = [];

    if (isSortBodyFromAToZ) {
        sortedPosts = posts.sort((a, b) => {
            if (a.body.toLowerCase() < b.body.toLowerCase()) {
                return -1;
            }
            if (a.body.toLowerCase() > b.body.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    } else {
        sortedPosts = posts.sort((a, b) => {
            if (a.body.toLowerCase() > b.body.toLowerCase()) {
                return -1;
            }
            if (a.body.toLowerCase() < b.body.toLowerCase()) {
                return 1;
            }
            return 0;
        });
    }

    isSortBodyFromAToZ = !isSortBodyFromAToZ;
    createTableBody(sortedPosts);
});

filter.addEventListener('input', function filterPosts() {
    if (filter.value.length > 2) {
        console.log('dkjfisdjfks')
        let filteredPosts = posts.filter(post => {
            return post.title.includes(filter.value) || post.body.includes(filter.value);
        })
        createTableBody(filteredPosts);
    }
    if (filter.value.length === 0) {
        createTableBody(posts);
    }
})

function clearFilter() {
    filter.value = "";
    createTableBody(posts);
}

getData();





