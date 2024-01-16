import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//TODO
// enhance code
//fixa så att det blir 108 000 kr istf 108000 kr

class Car {
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

var cars = [];
// Generera 10 bilar
for (var carIndex = 0; carIndex < 10; carIndex++) {
    var name = faker.vehicle.vehicle();
    var type = faker.vehicle.type();
    var color = faker.vehicle.color();
    var fuel = faker.vehicle.fuel();
    var year = faker.number.int({ min: 1970, max: 2023 });
    var img = faker.number.int({ min: 1, max: 100 });
    var price = faker.number.int({ min: 30, max: 200 }) * 1000;
    cars.push(new Car(name, type, color, fuel, year, img, price));
}

function generateCarCards(cars)  {
   return `<div class="productcard">
    <img src="${cars.img}">
    <div class="information">
        <div class="name">${cars.name}</div>
        <div class="description">${cars.year}</div>
        <a class="ctabutton" href="#">${cars.price} kr</a>
        </div>
    </div>`;
}
const productGallery = document.getElementsByClassName('productgallery')[0];
for (let productIndex = 0; productIndex < cars.length; productIndex++) {
  const productCard = generateCarCards(cars[productIndex]);
  productGallery.innerHTML += productCard;
}
