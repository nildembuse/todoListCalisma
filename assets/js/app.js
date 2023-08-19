const urlPrefix = 'https://todorestapi-20432433159e.herokuapp.com/api/todos'

const requesUrl = urlPrefix + 'todos';
const requesUsersUrl = urlPrefix + 'users';
let todos = [];

fetch(urlPrefix)
      .then(response => response.json())
      .then (json => {
        todos = json;

      });


async function loadDetailPage(todosId) {
     const todosDetail = await fetch(urlPrefix + 'todos/' + todosId).then(x => x.json());
     const todosUpdate = await fetch(`${urlPrefix}  todos/ ${postId} /update`).then(x => x.json());
    
        renderDetailPage(todosDetail, todosUpdate);
}

function renderDetailPage(todosDetail, todosUpdate) {

    const updates = todosUpdate.map(x => `<div class="update"><h5>${x.name}</h5><p>${x.body}</p></div>`);

    container.innerHTML = `
    <h1>${todosDetail.title}</h1>
    <p>${todosUpdate.body}</p>
    <div class="updates">${updates.join('')}</div>`;
}