const urlPrefix = 'https://todorestapi-20432433159e.herokuapp.com/api/users'

const requesUrl = urlPrefix + 'users';
const requesCretaUrl = urlPrefix + 'creta';
let users = [];

fetch(urlPrefix)
      .then(response => response.json())
      .then (json => {
        users = json;

      });


async function loadDetailPage(usersId) {
    const usersDetail = await fetch(urlPrefix + 'users/' + usersId).then(x => x.json());
        renderDetailPage(todosDetail, );
   }


fetch('https://todorestapi-20432433159e.herokuapp.com/api/todos/create/', {
        method: 'POST',
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
