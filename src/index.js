console.log("Hello World");

// TODO
import WishList from "./wishlist";

const form = document.getElementById("submitForm");
const carMakeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const makeDisplay = document.querySelector("#car-make");
const modelDisplay = document.querySelector("#car-model");
const yearDisplay = document.querySelector("#car-year");
const removeBtn = document.querySelector("#removeBtn");
const wishlistUl = document.querySelector("#wishListContainer > ul");

form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

let wishlist = new WishList();

function updateDOMList() {
  wishlistUl.textContent = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}
function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function addCar(e) {
  e.preventDefault();
  let make = carMakeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;
  wishlist.add(make, model, year);
  updateDOMList();
}

function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);

  updateDOMList();
  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}
