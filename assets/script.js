let currentDayEl = $('#currentDay');

currentDayEl.text(moment().format('LL'));

let containerel = document.querySelector('.container-fluid')

function makeElement(element){
    let row = document.createElement('div');
    row.setAttribute('class','row')
    

    let col1 = document.createElement('div');
    col1.setAttribute('class','col-1 hour')

    let col2 = document.createElement('textarea');
    col2.setAttribute('class','col')

    let col3 = document.createElement('div');
    col3.setAttribute('class','col-1 saveBtn');
    let icon  = document.createElement("span");
    icon.setAttribute('class',"glyphicon glyphicon-floppy-disk");

    col3.addEventListener('click',event=>{
        console.log(event.target)
    })
    col3.appendChild(icon)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)

    element.appendChild(row)

}

for(let i = 0; i<9;i++) {
    makeElement(containerel)
}



let rows =document.querySelectorAll('.row');
let time = 8
for(let row of  rows){
    time ++
    row.querySelector('.hour').textContent =  moment().hour(time).minute(0).format('hA')
    if(moment().isBefore( moment().hour(time))){
        row.querySelector('textarea').style.backgroundColor ='green'
    }
    if(moment().isSame( moment().hour(time))){
        row.querySelector('textarea').style.backgroundColor ='red'
    }
    if(moment().isAfter( moment().hour(time))){
        row.querySelector('textarea').style.backgroundColor ='grey'
    }
    
    

}