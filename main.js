const btn = document.getElementById("toggle");
const month = document.getElementById("month");
let data = element.getAttribute('data-year')



/*card.forEach( item => {
    item.addEventListener('mouseover', (event) => {
    //event.target.style.backgroundColor = "blue";
})
     
}) */
 /*
for ( i of years){
    i.addEventListener('click', function(){
        if(year.style.display === 'none'){
        month.style.display = "none";
        year.style.display = "block";
        year.style.fontSize = '36px';
        year.style.padding = '2rem';
    }else{
        year.style.display = "none";
        month.style.display = "block";
    }
})
} */

function myFunction(event){
   let x = event.getAttribute("data-year");
    if(x.style.display === 'none'){
      
        x.style.display = "block";
       x.style.fontSize = '36px';
        x.style.padding = '2rem';
    }else{
        x.style.display = "none";
     
    }
}

console.log(myFunction());