import { commentsList } from "./comments.js";

// 1.2 Создал массив чисел и отфильтровал

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number > 4);

console.log(filteredNumbers);

// 1.3 Создал массив и использовал метод includes.

const fruitGarden = ['Яблоня', 'Груша', 'Черешня', 'Абрикос', 'Инжир'];

console.log(fruitGarden.includes('Инжир'));

// 1.4 Создал функцию reverse и перевернул массивы.

function reverseArray(array) {
    return array.reverse();
}

reverseArray(numbers);
reverseArray(fruitGarden);

console.log(numbers);
console.log(fruitGarden);


// 2.7 Выбрал коментарии с почтой com

const commentsCom = commentsList.filter(comment => comment.email.includes('.com'));

console.log(commentsCom);

// 2.8 Перебрал массив.

const commentsUpdatedPostId = commentsList.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));

console.log(commentsUpdatedPostId);

// 2.9 Перебрал массив, оставив только свойства id и name.

const commentNames = commentsList.map(comment => ({
    id: comment.id,
    name: comment.name
}));

console.log(commentNames);

// 2.10 Добавил свойство isInvalid в массив.

const validatedComments = commentsList.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

console.log(validatedComments);

// 3.11 Использовал метод массива Reduce и Map.

const emailsByReduse = commentsList.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emailsByReduse);

const emailsByMap = commentsList.map(comment => comment.email);
console.log(emailsByMap);

// 3.12 Использовал методы toString() и join().

const emailsToString = emailsMap.toString();
console.log(emailsToString);

const emailsByJoin = emailsMap.join(', ');
console.log(emailsByJoin);