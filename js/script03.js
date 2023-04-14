// Task#3
/*  Створити таблицю за допомогою js з полями імя, місто,  курс і заповнити її даними також за допомогою js.
 В таблиці повино бути мінімум 2 рядки
*/
window.onload = () => {
    const Information_Stud = [
        {name: "Oksana", city: "Lviv", course: "Go"},
        {name: "Ivan", city: "Kiev", course: "css"},
        {name: "Kateryna", city: "Odesa", course: "html"},
        {name: "Alex", city: "Lviv", course: "js"},
    ]
    const Head =  ["Name", "City", "Course"]

    let table = document.createElement("table")
    table.classList.add('information')

    let tr = document.createElement("tr");
    for (let s of Head) {
        let th = document.createElement("th");
        th.textContent = s
        tr.appendChild(th)
    }
    table.appendChild(tr)


    for (let data of Information_Stud) {
        let tr = document.createElement("tr");


        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td1.textContent = data.name
        td2.textContent = data.city
        td3.textContent = data.course

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)


        table.appendChild(tr)
    }

    document.querySelector('.content').appendChild(table)

}