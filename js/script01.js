// Task#1
/*Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
Дані виводяться в стилізований список,  можете підключити bootstrap чи написати свої стилі. При введені більше 5 пунктів,
перший пункт видаляється. В пункті який добавляється повино бути данні які введено і час створення в форматі день,
номер місяця, рік і час години хвилини.
*/


window.onload = () => {

    document.getElementById('send').onclick = () => {
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let number = document.getElementById('number').value
        let address = document.getElementById('address').value
        document.getElementById('table').innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${number}</td>
                <td>${address}</td>
                <td>${new Date().toLocaleString()}</td>
            </tr>`

        let list = document.getElementById("table")
        let firstItem = list.firstElementChild
        if (list.children.length > 5) {
            list.removeChild(firstItem);
        }
    }

}

