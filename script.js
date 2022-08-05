
let currentDayEl = $('#currentDay');
let todaysdate = moment().format('LL')
let time = 9
let localData =localStorage.data?JSON.parse(localStorage.data):localStorage.setItem('data',JSON.stringify({'name':'dennis'}))
console.dir(localData)




currentDayEl.text(todaysdate);

let containerel = document.querySelector('.container-fluid');
// save function
function save(time,content){
    
    if(localStorage.data){
        data = JSON.parse(localStorage.getItem('data'))
        data[time]=content
        localStorage.setItem('data',JSON.stringify(data))
        // alert('if')
        
    }else{
        
        let data = {}
         data[time]=content
         localStorage.setItem('data',JSON.stringify(data))
         alert('else')
    
    }
    // localStorage.setItem('data',JSON.stringify(data))
    
    // data[time] = content
    // localStorage.setItem('data',JSON.stringify(data))
}



function makeElement(element){
    let row = document.createElement('div');
    row.setAttribute('class','row')
    

    let col1 = document.createElement('div');
    col1.setAttribute('class','col-1 hour flex')
    col1.textContent = moment().hour(time).format('hA')

    let col2 = document.createElement('textarea');
    col2.setAttribute('class','col past')
    col2.placeholder = localData[col1.textContent]?localData[col1.textContent]:''

   
    let col3 = document.createElement('div');
    col3.setAttribute('class','col-1 saveBtn');
    let icon  = document.createElement("i");
    icon.setAttribute('class','fa-solid fa-message-plus');
    col3.appendChild(icon)

    col3.addEventListener('click',event=>{
      let hour =  event.target.parentElement.querySelector('.hour').textContent;
      let content = event.target.parentElement.querySelector('textarea').value;
      save(hour,content);
      conttent = 0
      
      
      
       
    })
    col3.appendChild(icon)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    time++

    

    element.appendChild(row)
    if(moment().hour(time).isBefore()){
        col2.setAttribute('class','col past')
    }
    else if(moment().hour(time).isAfter()){
        col2.setAttribute('class','col future')
    }else{
        col2.setAttribute('class','col present')
    }

    

}

for(let i = 0; i<9;i++) {
    makeElement(containerel)
    
}
