
var row = 1; 

document.querySelector("button").addEventListener("click",displayDetails);






function displayDetails()
{
    var myName = document.getElementById("name").value;
    var myAge = document.getElementById("age").value;
    var myCom = document.getElementById("comp").value;
    var myLoc = document.getElementById("loc").value;
    
/*NAME*/
    if(myName=="")
    { 
        document.getElementById("errormsg").innerHTML="**Name field should not be empty";
        return;
    }
    if  ((myName.length<=2)||(myName>20))
    {
        document.getElementById("errormsg").innerHTML="**Name must be between 2 to 20 character";
        return ;
    }
    if  (!isNaN(myName))
    {
        document.getElementById("errormsg").innerHTML="**Only Characters are allowed";
        return ;
    }
/*Age*/
if(myAge=="")
    { 
        document.getElementById("errorage").innerHTML="**Age Field should not be empty";
        return;
    }
    if((myAge<=18) || (myAge>55))
    {
        document.getElementById("errorage").innerHTML="**Please enter valid age";
        return;
    }
    if(isNaN(myAge))
    { 
        document.getElementById("errorage").innerHTML="**Please add number only";
        return;
    }
    /*Company*/
    if(myCom=="")
    { 
        document.getElementById("errorcom").innerHTML="**Company name Field should not be empty";
        return;
    }
    
    /*Loc*/
    if(myLoc=="")
    { 
        document.getElementById("errorloc").innerHTML="**Location Field should not be empty";
        return;
    }
    var display = document.getElementById("display");

    var newRow=display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML= myName;
    cell2.innerHTML= myAge;
    cell3.innerHTML= myCom;
    cell4.innerHTML= myLoc;

    row++;

    $("#name").val("");
    $("#age").val("");
    $("#comp").val("");
    $("#loc").val("");

    
}