var images=["Dad.JPG","Mom.JPG","Me.JPG.jpeg","Sister.JPG","Brother.JPG"];
var names=["Khalid","Aika","Eldar","Arzu","Elmar"];
var i=0;
function NextSlide(){
    if(i==5)
    {
i=0;

    
    }
    var updateimage=images[i];
    var updatename=names[i];
    document.getElementById ("image").src=updateimage;
    document.getElementById ("Family_Member_Name").innerHTML=updatename;
    i++
}