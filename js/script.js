function init(){
//add your javascrip between these two lines of code
  
  var submit = document.getElementById('entrybutton');//creates variable for submission
  submit.addEventListener("click", action); //runs function when input occurs

  function action(){
    var input = document.getElementById("entryinput"); //var input retreives user entry
    document.getElementById("textoutput").innerHTML = input.value; //changes the text to show the input 
    alert('Leslie Esquivel: ' + input.value); //alert box
  
    var checkBox = document.getElementById("Sunday");
    // Get the output text
    var text = document.getElementById("Sunday");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  //action function completes tasks when entry is inputted 

}  
window.addEventListener('load', init);