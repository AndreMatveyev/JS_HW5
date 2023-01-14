// Задача 1
// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
// при втором - суммирует переданый параметр с тем, что передали первый раз и тд. 
// Запрещается использовать глобальные переменные как хранилище результатов счетчика.

const getCounter = (a) => (b) => a = a + b;
const counter = getCounter(0);

// Задача 2
// Создать функцию которая будет возвращать массив в котором будут лежать все значения - 
// аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то 
//массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

const getUpdate = (arr) => function (b) {
    if (b === undefined) {
        arr = [];
    } else {
        arr.push(b);
    }
    return arr;
} 
const getUpdatedArr = getUpdate([]);

// Задача 3
// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем 
// когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. 
// Запрещается использовать глобальные переменные как хранилище значений.

const getTimeAll = (date) => function () {
    if (date === 0) {
        date = new Date();
        return 'Enabled';
    } else {
        const seconds  = Math.floor((new Date() - date) / 1000);
        date = new Date();
        return seconds;
    }
}

const getTime = getTimeAll(0);

// Задача 4
// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. 
// Где MM - количество минут, SS - количество секунд. При этом когда закончится время, 
// нужно вывести в console строку "Timer End".

const time = 65; 

const timer = time => {
    const startDate = new Date();
    return setInterval(() => {
        const date = new Date();
        console.clear();
        let seconds = time - Math.floor((date - startDate) / 1000);
        if (seconds > 0) {
            const minutes = (seconds - seconds % 60) / 60;
            seconds = seconds % 60;
            console.log(`${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`);
        } else {
            console.log("Time End");
        }
    }, 1000);
}
// timer(time);
