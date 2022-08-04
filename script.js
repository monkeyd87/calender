
let currentDayEl = $('#currentDay');
let todaysdate = moment().format('LL')
let localData = JSON.parse(localStorage.getItem('data'));
let data = {}?localData:{}
let time = 0



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
    col1.textContent = moment().hour(time).format('hA')

    let col2 = document.createElement('textarea');
    col2.setAttribute('class','col past')
    col2.placeholder = localData[col1.textContent]?localData[col1.textContent]:""

   
    let col3 = document.createElement('div');
    col3.setAttribute('class','col-1 saveBtn');
    let icon  = document.createElement("i");
    icon.setAttribute('class','fa-solid fa-message-plus');
    col3.appendChild(icon)

    col3.addEventListener('click',event=>{
      let hour =  event.target.parentElement.querySelector('.hour').textContent;
      let content = event.target.parentElement.querySelector('textarea').value
      save(hour,content)
      
       
    })
    col3.appendChild(icon)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)

    

    element.appendChild(row)
    if(moment().hour(time).isBefore()){
        col2.setAttribute('class','col past')
    }
    else if(moment().hour(time).isAfter()){
        col2.setAttribute('class','col future')
    }else{
        col2.setAttribute('class','col present')
    }

    time++

}

for(let i = 0; i<12;i++) {
    makeElement(containerel)
    
}
