const urlPrefix = 'https://todorestapi-20432433159e.herokuapp.com/api/todos'

const requesUrl = urlPrefix + 'todos';
const requesdeletUrl = urlPrefix + 'delete';
const requesUpdatUrl = urlPrefix + 'update';

let todos = [];
let deletes = [];
let update = [];

fetch(urlPrefix)
      .then(response => response.json())
      .then (json => {
        todos = json;

      });


async function loadDetailPage(todosId) {
     const todosDetail = await fetch(urlPrefix + 'todos/' + todosId).then(x => x.json());
        renderDetailPage(todosDetail, );
}

fetch(`https://todorestapi-20432433159e.herokuapp.com/api/todos/delete/${id}/`, {
    method: 'DELETE'
});

fetch(`https://todorestapi-20432433159e.herokuapp.com/api/todos/update/${id}/`, {
    method: 'PUT',
    body: JSON.stringify({
        title: string,
        completed: boolean,
        actor: actorId,
        assignee: assigneeId
    }),
    headers: {
        'Content-type': 'application/json;'
    }
});