import { productCards } from "./products.js";

const productCardTemplate = document.getElementById('product-card-template');
const productCardsList = document.querySelector('.product-list');

function renderCards(productCards, count) {
    productCardsList.innerHTML = "";

    productCards.slice(0, count).forEach(productCard => {
        const productCardClone = productCardTemplate.content.cloneNode(true);

        productCardClone.querySelector('.card__image').src = `img/${productCard.image}.png`;
        productCardClone.querySelector('.card__image').alt = productCard.name;
        productCardClone.querySelector('.card__tags').textContent = productCard.tags;
        productCardClone.querySelector('.card__name').textContent = productCard.name;
        productCardClone.querySelector('.card__description').textContent = productCard.description;

        const ingridientList = productCardClone.querySelector(".card__ingridients");
        productCard.ingridients.forEach(ingridient => {
            const ingridientLi = document.createElement("li");
            ingridientLi.className = 'card__ingridient';
            ingridientLi.textContent = ingridient;
            ingridientList.appendChild(ingridientLi);
        });

        productCardClone.querySelector('.card__price__value').textContent = `${productCard.price} ₽`;

        productCardsList.appendChild(productCardClone);
    });
}


const descriptionArray = productCards.reduce((acc, productCard) => {
    acc.push({
        [productCard.name]: productCard.description
    });
    return acc;
},[]);

console.log(descriptionArray);


function getCardsCount() {
    const count = Number(prompt("Сколько карточек отобразить? от 1 до 5"));

    if (count >= 1 && count <= 5) {
        return count;
    }
    alert("Введите число от 1 до 5");

    return 5;
}


renderCards(productCards, getCardsCount());
