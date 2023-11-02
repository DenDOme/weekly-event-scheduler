
let dateDisp = document.getElementById('week__content');
let timeDisp = document.querySelectorAll('.time__content');
let windowWidth = document.querySelector('.main__top').getBoundingClientRect().width;
let dots = document.querySelectorAll('.time-dots')
let timeSec = document.querySelectorAll('.time__section');
let showDays;

let allBlock = [
    {
        day: 'ПТ',
        id: 1,
        type: 'Pole Dance',
        username: 'Иванова Екатерина',
        max: 2,
    },
]
function chechWindowLenght(){
    if(windowWidth >= 910){
        showDays = 5;
    }
}
function createBlock(){
    let newEllone = document.createElement('div');
    let newElltwo = document.createElement('div');
    let newPone = document.createElement('span');
    let newPtwo = document.createElement('span');
    let newPthr = document.createElement('span');
    let newPfou = document.createElement('span');
    newEllone.classList.add('block__cover');
    newElltwo.classList.add('block');
    newPone.innerHTML =  '09:00 - 10:00'
    newPtwo.innerHTML = allBlock[0].type;
    newPthr.innerHTML = allBlock[0].username;
    if(allBlock[0].max !== 8){
        newPfou.innerHTML = 'Свободно: '+allBlock[0].max+' из 8'
    }
    newElltwo.append(newPone)
    newElltwo.append(newPtwo)
    newElltwo.append(newPthr)
    newElltwo.append(newPfou)

    newEllone.appendChild(newElltwo);
    return newEllone;
}
function getDayName(day,month,year, locale){   
    comp =  month+'/'+day+'/'+year;
    var date = new Date(comp);
    return date.toLocaleDateString(locale, { weekday: 'short' });        
}
function getMonthName(day,month,year, locale){   
    comp =  month+'/'+day+'/'+year;
    var date = new Date(comp);
    return date.toLocaleDateString(locale, { month: 'long' });        
}
let date = new Date()
let dayone = String(date.getDate());
let monthone = String(date.getMonth()+1);
let year = String(date.getFullYear());
for(let i = 0 ; i < 5 ; i++){
    let day = getDayName(dayone,monthone,year, "ru-Ru").toLocaleUpperCase();
    let month = getMonthName(dayone,monthone,year,"ru-RU").toLocaleUpperCase();
    let trueDay;
    if(dayone.length == 1){
        trueDay = '0'+dayone;
    }
    console.log(trueDay,day,month);
    dayone++
    dayone = String(dayone);
}
function loadDay(){
    let noew = timeDisp[0];
    for(let i = 0 ; i < 5 ; i++){
        let newEll = createBlock();
        timeDisp[0].appendChild(newEll);
    }
    if(timeSec[0].offsetHeight == 164){
        console.log(timeSec[0].offsetHeight);
        dots[0].style.height = '151px';
        dots[1].style.height = '151px';
        console.log(dots);
    }
}
loadDay()
