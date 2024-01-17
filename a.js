import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//TODO
// enhance code
//fixa så att det blir 108 000 kr istf 108000 kr

class Car {
  constructor(name, year, img, price) {
    this.name = name;
    this.year = year;
    this.img = "https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F" + img + ".png";
    this.price = price;
  }
}

const cars = [];
for (let carIndex = 0; carIndex < 10; carIndex++) {
  const name = faker.vehicle.vehicle();
  const year = faker.number.int({ min: 1970, max: 2023 });
  const img = faker.number.int({ min: 1, max: 100 });
  const price = faker.number.int({ min: 30, max: 200 }) * 1000;
  cars.push(new Car(name, year, img, price));
}

function generateCarCards(car) {
  return `<div class="productcard">
    <img src="${car.img}">
    <div class="information">
        <div class="name">${car.name}</div>
        <div class="description">${car.year}</div>
        <a class="ctabutton" href="#">${car.price} kr</a>
        </div>
    </div>`;
}
const productGallery = document.getElementsByClassName('productgallery')[0];
for (let productIndex = 0; productIndex < cars.length; productIndex++) {
  const productCard = generateCarCards(cars[productIndex]);
  productGallery.innerHTML += productCard;
}
