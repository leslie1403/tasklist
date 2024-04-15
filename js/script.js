 function displayRadioValue() {
            var ele = document.getElementsByName('gender');
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    document.getElementById("result").innerHTML
                        = "Gender: " + ele[i].value;
            }
        }


/*function init(){
//add your javascrip between these two lines of code
  
  var submit = document.getElementById('entrybutton');//creates variable for submission
  submit.addEventListener("click", action); //runs function when input occurs

  function action(){
    var input = document.getElementById("entryinput"); //var input retreives user entry
    document.getElementById("textoutput").innerHTML = input.value; //changes the text to show the input 
    alert('Leslie Esquivel: ' + input.value); //alert box
  
    var checkJB = document.getElementById("JB");
    var textJB = "Jannesa"

    // If the checkbox is checked, display the output text
    if (checkJB.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  //action function completes tasks when entry is inputted 

}  
window.addEventListener('load', init);