import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//TODO
// enhance code
//fixa så att det blir 108 000 kr istf 108000 kr

class Car {
  constructor(name, type, color, fuel, year, img, price) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.fuel = fuel;
    this.year = year;
    this.img = "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F" + img +  ".png";
    this.price = price;
   }
}

const cars = [];
// Generera 10 bilar
for (let carIndex = 0; carIndex < 10; carIndex++) {
  const name = faker.vehicle.vehicle();
  const type = faker.vehicle.type();
  const color = faker.vehicle.color();
  const fuel = faker.vehicle.fuel();
  const year = faker.number.int({ min: 1970, max: 2023 });
  const img = faker.number.int({ min: 1, max: 100 });
  const price = faker.number.int({ min: 30, max: 200 }) * 1000;
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
