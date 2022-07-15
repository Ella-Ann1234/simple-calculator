let screen = document.querySelector(".screen");


const buttons = document.querySelectorAll(".btn");
let equalButton = document.querySelector(".btn-equal");
const delButton  = document.querySelector(".del")
const clearButton = document.querySelector(".btn-clear"); 
const percentButton = document.querySelector(".percent");

    buttons.forEach(function(button) {
      button.addEventListener("click", function(e){
          let value = e.target.dataset.num;
          screen.value = screen.value + value;
         
      })
       
    })

delButton.addEventListener("click", function(e){
    screen.value = screen.value.slice(0, -1);

})


equalButton.addEventListener("click", function(e){
    try {
        let answer = eval(screen.value);
       screen.value = answer;
    }
    catch(err) {
        screen.value  = "invalid operation"
       
    }


})


clearButton.addEventListener("click", function(e){
    screen.value = "";
})

    
