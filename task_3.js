/*
Задание 6.6.5
Ваша задача — создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число 
от 1 до 100. Для создания задержки использовать setTimeout. Если сгенерированное число четное, 
Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject).

После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

1. «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. 
Вместо number подставить сгенерированное число.
2. «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой.
Вместо number подставить сгенерированное число.
*/
const MAX = 100;

function getValue(digit){    
    return Math.floor(Math.random() * digit + 1);
}

// console.log(getValue(MAX))

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = getValue(MAX)  
        if (result % 2){
            reject(result)
        } else {
            resolve(result)
        }
    }, 3000);
});

myPromise.then(
        (value) => {
            console.log(`Завершено успешно. Сгенерированное число — ${value}`)
    })
    .catch(
        (error) => {
            console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`)
});
