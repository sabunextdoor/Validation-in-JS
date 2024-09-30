function validate(){
    var x=document.forms["myform"]["myname"].value;
    if(x==""){
        alert("Name must be filled out");
        return false;
    }
}