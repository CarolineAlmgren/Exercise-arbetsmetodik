import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//TODO
// enhance code
//fixa så att det blir 108 000 kr istf 108000 kr



class Car{
    constructor(name,type,color,fuel,year,img,price){
        this.name = name
        this.type = type
        this.color = color
        this.fuel = fuel
        this.year = year
        this.img = "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F" + img +  ".png"
        this.price = price
    }
}

var cars = []
//Generate 20 cars 
for(var i = 0; i < 10;i++){
    var name = faker.vehicle.vehicle()
    var type = faker.vehicle.type()
    var color = faker.vehicle.color()
    var fuel = faker.vehicle.fuel()
    var year = faker.number.int({min:1970, max:2023})
    var img = faker.number.int({min:1, max:100})
    var price = faker.number.int({min:30, max:200}) * 1000
    cars.push(new Car(name,type,color,fuel,year,img,price))
}

function r(){
    var c = document.getElementsByClassName('productgallery')[0]
    var x = `<div class="productcard">
    <img src="${cars[0].img}">
    <div class="information">
        <div class="name">${cars[0].name}</div>
        <div class="description">${cars[0].year}</div>
        <a class="ctabutton" href="#">${cars[0].price} kr</a>
    </div>`
    c.innerHTML += x
    var x2 = `<div class="productcard">
    <img src="${cars[1].img}">
    <div class="information">
        <div class="name">${cars[1].name}</div>
        <div class="description">${cars[1].year}</div>
        <a class="ctabutton" href="#">${cars[1].price} kr</a>
    </div>`
    c.innerHTML += x2

    var x3 = `<div class="productcard">
    <img src="${cars[2].img}">
    <div class="information">
        <div class="name">${cars[2].name}</div>
        <div class="description">${cars[2].year}</div>
        <a class="ctabutton" href="#">${cars[2].price} kr</a>
    </div>`
    c.innerHTML += x3

    var x4 = `<div class="productcard">
    <img src="${cars[3].img}">
    <div class="information">
        <div class="name">${cars[3].name}</div>
        <div class="description">${cars[3].year}</div>
        <a class="ctabutton" href="#">${cars[3].price} kr</a>
    </div>`
    c.innerHTML += x4


    var x5 = `<div class="productcard">
    <img src="${cars[4].img}">
    <div class="information">
        <div class="name">${cars[4].name}</div>
        <div class="description">${cars[4].year}</div>
        <a class="ctabutton" href="#">${cars[4].price} kr</a>
    </div>`
    c.innerHTML += x5



    var x6 = `<div class="productcard">
    <img src="${cars[5].img}">
    <div class="information">
        <div class="name">${cars[5].name}</div>
        <div class="description">${cars[5].year}</div>
        <a class="ctabutton" href="#">${cars[5].price} kr</a>
    </div>`
    c.innerHTML += x6

    

    var x7 = `<div class="productcard">
    <img src="${cars[6].img}">
    <div class="information">
        <div class="name">${cars[6].name}</div>
        <div class="description">${cars[6].year}</div>
        <a class="ctabutton" href="#">${cars[6].price} kr</a>
    </div>`
    c.innerHTML += x7




    var x8 = `<div class="productcard">
    <img src="${cars[7].img}">
    <div class="information">
        <div class="name">${cars[7].name}</div>
        <div class="description">${cars[7].year}</div>
        <a class="ctabutton" href="#">${cars[7].price} kr</a>
    </div>`
    c.innerHTML += x8

    var x9 = `<div class="productcard">
    <img src="${cars[8].img}">
    <div class="information">
        <div class="name">${cars[8].name}</div>
        <div class="description">${cars[8].year}</div>
        <a class="ctabutton" href="#">${cars[8].price} kr</a>
    </div>`
    c.innerHTML += x9



    var x10 = `<div class="productcard">
    <img src="${cars[9].img}">
    <div class="information">
        <div class="name">${cars[9].name}</div>
        <div class="description">${cars[9].year}</div>
        <a class="ctabutton" href="#">${cars[9].price} kr</a>
    </div>`
    c.innerHTML += x10


}

console.log(cars)
r()



