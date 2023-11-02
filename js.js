
let dateDisp = document.getElementById('week__content');
let timeDisp = document.querySelectorAll('.time__content');
let windowWidth = document.querySelector('.main__top').getBoundingClientRect().width;

let showDays;
let allBlock = {
    0:{
        id: 2,
        type: 'pole',
        username: 'anastasia',
        max: 8,
    }
}
function chechWindowLenght(){
    console.log(windowWidth);
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
    let noew = timeDisp[0].id;
    for(let i = 0 ; i < 5 ; i++){
        let newEll = document.createElement('div');
        newEll.style.width = '155px';
        newEll.style.height = '138px';
        newEll.style.backgroundColor = '#000'
        timeDisp[0].appendChild(newEll);
    }
}
loadDay()
