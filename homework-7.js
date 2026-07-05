function forecastWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}

forecastWeather('Москве', '26');
forecastWeather('Лондоне', '25');
forecastWeather('Париже', '30');


const LIGHT_SPEED = 299792458;
const testSpeed = 159792458;

if (testSpeed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
} else if (testSpeed < LIGHT_SPEED) {
    console.log('Субсветовая скорость');
} else {
    console.log('Скорость света');
}


const phone = 'Xiaomi 17 Pro';
const phonePrice = 1000;

const buyPhone = (budjet) => {
    if(budjet >= phonePrice) {
        return `${phone} приобретен. Спасибо за покупку.`;
    }
    const differencePrice = phonePrice - budjet;
    return `Вам не хватает ${differencePrice}$, пополните баланс.`;
}

console.log(buyPhone(1000));



function compChar(processor, ram, videocard) {
    console.log(`Процессор: ${processor}, ОЗУ: ${ram}, Видеокарта: ${videocard}`);
}

compChar('AMD Rizen 9', 'Kingston DDR5 512 Gb', 'NVIDIA Geforce 3070');