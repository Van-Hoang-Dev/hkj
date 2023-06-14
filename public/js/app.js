// const clock = document.querySelector('.clock');
// console.log(clock);
// let timeID = setTimeout(function hello(){
//     let currentDate = new Date();
//     let time = (currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
//     clock.textContent = time;
//     timeID = setTimeout(hello, 1000);
// }, 1000);

const handSecond = document.querySelector('.hand-second');
const handMinute = document.querySelector('.hand-minute');
const handHour = document.querySelector('.hand-hour');

let timeID = setTimeout(function setSecond(){
    let currentDate = new Date();
    handSecond.style.transform = 'rotate( '+(currentDate.getSeconds() * 6) +'deg)';
    handMinute.style.transform = 'rotate( '+(currentDate.getMinutes() * 6) +'deg)';
    handHour.style.transform = 'rotate( '+(currentDate.getHours() * 30 * 0.5  * currentDate.getMinutes()) +'deg)';
    second = setTimeout(setSecond, 1000);
}, 1000);