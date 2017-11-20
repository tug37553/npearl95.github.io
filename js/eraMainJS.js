function Validation() {
    var x, text;
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
    if (!isNaN(x)&& x >0  && x < 10) {
        text = "You worked less then 10 hours. Work more!";
    }else if(!isNaN(x)&& x >=10  && x <= 20){
        text="You worked more then 10 hours. Good job!";
    }else {
        document.getElementById("numb").value = "";
        text = "Re-enter input";
    }
     document.getElementById("numberValidation").innerHTML = text;   
}
/*getTodayDate*/
function getDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        }
function getEmployee1(){
    var name;
    name=document.getElementsByTagName("getEmployee").selectedIndex;
    alert(document.getElementsByTagName("option")[x].value);
}
function getEmployee() {
    var name = document.getElementById("getEmployee").selectedIndex;
    alert(document.getElementsByTagName("option")[name].value);
}
/*login*/
function loginJS(){  
var x, y;
    x = document.getElementById("userInput1").value;
    y=document.getElementById("passWord1").value;
    document.getElementById("userInput1").value = "";
    document.getElementById("passWord1").value = "";    
}