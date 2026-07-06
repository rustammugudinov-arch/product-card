function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}

showWeather('Москве', '26');
showWeather('Лондоне', '25');
showWeather('Париже', '30');


const LIGHT_SPEED = 299792458;

function testSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log('Сверхсветовая скорость');
    } else if (speed < LIGHT_SPEED) {
        console.log('Субсветовая скорость');
    } else {
        console.log('Скорость света');
    }
}

testSpeed(333000000);


const phone = 'Xiaomi 17 Pro';
const phonePrice = 1000;

const buyPhone = (budjet) => {
    if (budjet >= phonePrice) {
        console.log(`${phone} приобретен. Спасибо за покупку.`);
    } else {
        const differencePrice = phonePrice - budjet;
        console.log(`Вам не хватает ${differencePrice}$, пополните баланс.`);
    }
}

buyPhone(1000);



function showCompChar(processor, ram, videocard) {
    console.log(`Процессор: ${processor}, ОЗУ: ${ram}, Видеокарта: ${videocard}`);
}

showCompChar('AMD Rizen 9', 'Kingston DDR5 512 Gb', 'NVIDIA Geforce 3070');