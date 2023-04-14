// Task#2
/*  створити массив обєктів і на ocнові нього вивести на сторінку лінки в яких знаходяться зображення і alt
для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3
    let images = [
        {
            imgPath:'img/image.png',
            alt:'png image'
            href:'https://img.com/60903073638.jpg'
        }
        ...
    ]
*/
let images = [
    {
        imgPath: 'img/mountaints.jpg',
        alt: 'mountaints image',
        href: 'https://t.ly/qmv_'
    },
    {
        imgPath: 'img/lake.jpg',
        alt: 'lake image',
        href: 'https://t.ly/qmv_'
    },
    {
        imgPath: 'img/forest.jpg',
        alt: 'forest image',
        href: 'https://t.ly/qmv_'
    },
    {
        imgPath: 'img/river.jpg',
        alt: 'river image',
        href: 'https://t.ly/qmv_'
    },
    {
        imgPath: 'img/garden.jpg',
        alt: 'garden image',
        href: 'https://t.ly/qmv_'
    }
]

window.onload = () => {
    let list = document.querySelector(".list");
    for (let image of images) {
        let li=document.createElement("li")
        let a=document.createElement("a")
        a.href=image.href
        let img=document.createElement("img")
        img.classList.add('image')
        img.src=image.imgPath
        img.alt=image.alt

        a.appendChild(img)
        li.appendChild(a)
        list.appendChild(li)


    }
}