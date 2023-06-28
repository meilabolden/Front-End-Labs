// let id = 0;

// document.getElementById('addChore').addEventListener('click', () => {
//     let createdDate = new Date();
//     let table = document.getElementById('list');
//     let row = table.insertRow(1);
//     row.setAttribute('id', `item-${id}`);
//     row.insertCell(0).innerHTML = document.getElementById('new-name').value;
//     row.insertCell(1).innerHTML = document.getElementById('new-task').value;
//     row.insertCell(2).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
//     row.insertCell(3).innerHTML = document.getElementById('new-start-date').value;
//     row.insertCell(4).innerHTML = document.getElementById('new-end-date').value;
//     let actions = row.insertCell(5);
//     actions.appendChild(createDeleteButton(id++));
//     document.getElementsById('new-task').value = " ";
// });

// function createDeleteButton(id) {
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-info';
//     btn.id = id;
//     btn.innerHTML = 'Complete';
//     btn.onclick = () => {
//         console.log(`Deleting row with id: item-${id}`);
//         let elementToDelete = document.getElementById(`item-${id}`);
//         elementToDelete.parentNode.removeChild(elementToDelete);
//     };
//     return btn;
// };


const URL_ENDPOINT = 'http://localhost:3000/familyChores';

$.get(URL_ENDPOINT).then(data => {
    data.map(chore => {
        $('body').append(
            $(`
            <tr>
                <td>${chore.id}</td>
                <td>${chore.name}</td>
                <td>${chore.chore}</td>
                <td>${chore.createdDate}</td>
                <td>${chore.startDate}</td>
                <td>${chore.dueDate}</td>
                <td><button id="deleteChore" onclick="deleteChore(${chore.id})" class="btn btn-danger">Delete</button>
            </tr>`)
        )
    })
})

$('#addChore').on('click' ,function () {

    $.post(URL_ENDPOINT, {
        name: $('#new-name').val(),

        startDate: $('#new-start-date').val(),
        dueDate: $('#new-end-date').val(),
        chore: $('#new-task').val()
    })
})


function deleteChore(id) {
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'DELETE'
    })
}



function updateChore(id) {
    let choreId = $('#updateChore').val()

    $.ajax(`${URL_ENDPOINT}/${choreId}`, {
        method: 'PUT',
        data: {
            name: $('#new-name').val(),
           
            startDate: $('#new-start-date').val(),
            dueDate: $('#new-end-date').val(),
            chore: $('#new-task').val()
        }
    })
    
}

$('#updateChore').click(updateChore);

