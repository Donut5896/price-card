let btn = document.getElementById("checkbox");

let year = document.getElementsByClassName("year");

let month = document.getElementsByClassName("month");




function myFunction(){
    for(let i=0; i < year.length; i++){
        if(btn.checked === true){
            year[i].style.display = "block";
            month[i].style.display = "none"
        }else if(btn.checked === false){
            year[i].style.display = "none";
            month[i].style.display = "block";
        }
    }
}


myFunction();







