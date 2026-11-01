class Drink {
    #temperature;

    constructor(name, size, price) {

    if (new.target === Drink) {
        throw new Error('Нельзя создать экземпляр абстрактного класса Drink');
    }
    
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = 20;
    }

    getInfo() {
        return `Напиток: ${this.name} | Объём: ${this.size}мл | Цена: ${this.price}₽ | Температура: ${this.#temperature}°C`;
    }

    getTemperature() {
        return this.#temperature;
    }
    
    setTemperature(temp) {
        if (temp >= 0 && temp <= 100) {
            this.#temperature = temp;
        } else {
            console.log('Ошибка: температура должна быть в диапазоне от 0 до 100 градусов Цельсия.');
        }
    }

    #prepare() {
        console.log(`Приготовление напитка ${this.name}... Готово!`);
    }

    serve() {
        this.#prepare();
        console.log(`Подаём: ${this.getInfo()}`);
    }
}

class Coffee extends Drink {
    constructor(size, price, roast = 'средняя') {
        super('Кофе', size, price);
        this.roast = roast;
    }

    getInfo() {
        return `${super.getInfo()} | Обжарка: ${this.roast}`;
    }

    serve() {
        console.log(`Готовим кофе (обжарка: ${this.roast}) через эспрессо-машину`);
    }
}

const coffee = new Coffee('400ml', 250, 'средняя');
coffee.setTemperature(85);

class Tea extends Drink {
    constructor(size, price, teaType = 'зелёный') {
        super('Чай', size, price);
        this.teaType = teaType;
    }

    getInfo() {
        return `${super.getInfo()} | Вид чая: ${this.teaType}`;
    }

    serve() {
        console.log(`Завариваем ${this.teaType} чай...`);
    }
}

const tea = new Tea('250ml', 150, 'зелёный');
tea.setTemperature(80);

class Juice extends Drink {
    constructor(size, price, fruit = 'Манго') {
        super('Сок', size, price);
        this.fruit = fruit;
    }

    getInfo() {
        return `${super.getInfo()} | Фрукт: ${this.fruit}`;
    }

    serve() {
        console.log(`Готовим сок со вкусом ${this.fruit}`);
        this.setTemperature = 5;
    }
}

const juice = new Juice('400ml', 300, 'Манго');
juice.setTemperature(5);

class Cafe {
    constructor(cafeName, cafeLocation) {
        this.cafeName = cafeName;
        this.cafeLocation = cafeLocation;
        console.log(`Кафе "${cafeName}" открыто по адресу: ${cafeLocation}`);
    }

    getInfo() {
        return `Кафе: "${this.cafeName}", адрес: ${this.cafeLocation}`;
    }

    orderDrink(drink) {
        console.log(`Новый заказ в кафе "${this.cafeName}"`);
        console.log(`Заказ: ${drink.getInfo()}`);
    
        drink.serve();
    
        console.log(`К оплате: ${drink.price}₽`);
        console.log(`Спасибо за заказ!\n`);
    }
}

const cafe = new Cafe('Cappuchino', 'ул.Мира д.89');

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(juice);