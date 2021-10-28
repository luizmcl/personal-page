function onClickButton(){
    var elemento = document.getElementById("first-paragraph");
    
    
    

  console.log(elemento.style.backgroundColor)

   if ( elemento.style.backgroundColor === "blue") {
        elemento.style.backgroundColor = "white";

        console.log("oi Cliquei", elemento)
    } else {
        elemento.style.backgroundColor ="blue";
    }
    
   
}