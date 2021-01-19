const btn = document.getElementById("toggle");
const month = document.getElementById("month");

const year1 = document.getElementById("year1");
const year2 = document.getElementById("year2");
const year3 = document.getElementById("year3");

const month1 = document.getElementById("month1")
const month2 = document.getElementById("month2")
const month3 = document.getElementById("month3")






function myFunction(){
    if((month1.classList.contains("show")) && 
    (month2.classList.contains("show")) && 
    (month3.classList.contains("show")) ){
        
        month1.style.display = "none";
        month2.style.display = "none";
        month3.style.display = "none";
        year1.classList.add("show");
        year2.classList.add("show");
        year3.classList.add("show");
        
       

    }else{
        year1.classList.remove("show");
        year2.classList.remove("show");
        year3.classList.remove("show");
        month1.classList.add("show");
        month2.classList.add("show");
        month3.classList.add("show");



    }
}




console.log(myFunction());




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

/*function myFunction(event){
   let x = event.getAttribute("data-year");
    if(x.style.display === 'none'){
      
        x.style.display = "block";
       x.style.fontSize = '36px';
        x.style.padding = '2rem';
    }else{
        x.style.display = "none";
     
    }
}

console.log(myFunction()); */


