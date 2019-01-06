function myFunction1(browser) {
var cnt=0;
if(browser==2)
{

    cnt +=1;
    }
        
        localStorage.setItem("resul",cnt);
        document.getElementById("result1").value = localStorage.getItem("resul");
}