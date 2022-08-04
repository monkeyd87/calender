
let currentDayEl = $('#currentDay');
let todaysdate = moment().format('LL')
let localData = JSON.parse(localStorage.getItem('data'));
let data = localData = JSON.parse(localStorage.getItem('data'))
console.log('running')



currentDayEl.text(todaysdate);

let containerel = document.querySelector('.container-fluid');

function save(time,content){
    data[time] = content
    localStorage.setItem('data',JSON.stringify(data))
}
function makeElement(element){
    let row = document.createElement('div');
    row.setAttribute('class','row')
    

    let col1 = document.createElement('div');
    col1.setAttribute('class','col-1 hour flex')

    let col2 = document.createElement('textarea');
    col2.setAttribute('class','col')

    let col3 = document.createElement('div');
    col3.setAttribute('class','col-1 saveBtn');
    let icon  = document.createElement("i");
    icon.setAttribute('class','fa-solid fa-message-plus');
    col3.appendChild(icon)

    col3.addEventListener('click',event=>{
      let hour =  event.target.parentElement.querySelector('.hour').textContent;
      let content = event.target.parentElement.querySelector('textarea').value
       save(hour,content)
      console.log(data)
       
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
    row.querySelector('textarea').placeholder = localData[moment().hour(time).minute(0).format('hA')]? localData[moment().hour(time).minute(0).format('hA')]:''
    row.querySelector('.hour').textContent =  moment().hour(time).minute(0).format('hA')
    if(moment().isBefore( moment().hour(time))){
        row.querySelector('textarea').className += ' future'
    }
    if(moment().isSame( moment().hour(time))){
        row.querySelector('textarea').className += ' present'
    }
    if(moment().isAfter( moment().hour(time))){
        row.querySelector('textarea').className += ' past'
    }
    

}


