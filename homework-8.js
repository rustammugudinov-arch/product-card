//3. Создал объект user.

const user = {
    name: "Рустам",
    surname: "Мугудинов",
    email: "Rustam85@mail.ru",
    phone: "+79285258558",
    age: 43,
    city: "Избербаш",
    country: "Россия",
    gender: "Мужской",
    job: "Оператор РБУ",
    company: "ООО РБУ"
}

console.log(user);


//4. Создал объект car и добавил в него дополнительное свойство owner со значением объект user.

const car = {
    brand: "Mercedes-Benz",
    model: "C-class",
    year: 2014,
    color: "White",
    transmission: "Robot"
}

car.owner = user;
console.log(car);


//5. Написал функцию для проверки свойства в объекте car.

function ensureMaxSpeed() {
    if (!Object.hasOwn(car, "mахSpeed")) {
        car.maxSpeed = 235;
    }
}

ensureMaxSpeed();


//6. Написал функцию вывода значений объекта

function showUserJob(object, job) {
    console.log(job);
}

showUserJob(user, user.job);


//7. Создал массив.

const products = ["молоко", "сыр", "творог", "сметана", "кефир"];

console.log(products);


//8. Создал массив состоящий из объектов.

const books = [
    {
        bookTitle: "Хоббит",
        author: "Дж.Р.Р. Толкиен",
        year: 1937,
        coverColor: "Золотистая",
        genre: "Фэнтези"
    },

    {
        bookTitle: "Сталкер",
        author: "Борис Стругацкий",
        year: 2013,
        coverColor: "Черная",
        genre: "Фантастика"
    },

    {
        bookTitle: "Алхимик",
        author: "Пауло Коэльо",
        year: 1988,
        coverColor: "Красная",
        genre: "Роман"
    },

    {
        bookTitle: "Гарри Поттер",
        author: "Джоанн Роулинг",
        year: 1997,
        coverColor: "Желтая",
        genre: "Фэнтези"
    },
]

books.push({
    bookTitle: "Рита Хэйуорт",
    author: "Стивен Кинг",
    year: 1982,
    coverColor: "Синяя",
    genre: "Повесть"
});

console.log(books);


//9. Создал ещё один массив и объединил с предыдущим.

const booksLordOfTheRings = [
    {
        bookTitle: "Властелин колец. Хранители кольца",
        author: "Дж.Р.Р. Толкиен",
        year: 1954,
        coverColor: "Зеленая",
        genre: "Фэнтези"
    },

    {
        bookTitle: "Властелин колец. Две твердыни",
        author: "Дж.Р.Р. Толкиен",
        year: 1954,
        coverColor: "Зеленая",
        genre: "Фэнтези"
    },

    {
        bookTitle: "Властелин колец. Возвращение короля",
        author: "Дж.Р.Р. Толкиен",
        year: 1955,
        coverColor: "Зеленая",
        genre: "Фэнтези"
    },
]

const mergeBooksArrays = [...books, ...booksLordOfTheRings];

console.log(mergeBooksArrays);

//10. Добавил дополнительное свойство в массив используя метод массива map.

function showRareBooks(object) {
    if (object.year > 2000) {
        object.isRare = true
    } else {
        object.isRare = false
    }
    return object;
}

mergeBooksArrays.map(showRareBooks);

console.log(mergeBooksArrays);