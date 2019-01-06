function Alert() {
  var al = confirm("ARE YOU SURE ???");

  if (al == true) {
  	onc1();
    window.location.href = "q1sci.html";
  } else {
  }
}


function onc1(){
if (typeof(Storage) !== "undefined") {
  var tex=document.getElementById("m2").value;
  if(tex=="")
  {
    localStorage.setItem("lastnames","Anonymous");
  }
  else
  {
    localStorage.setItem("lastnames",tex);
  }
  
}
localStorage.setItem("date1",new Date().getTime());
var questions=[];
localStorage.setItem("ques",questions);
}

var ans=["Bromine","b","a","c","d","a","a","d","a","a"];
var b;

function myFunction1(browser,x) {
var temps = localStorage.getItem('ques');
temps = temps ? temps.split(',') : [];
temps[x]=browser;
localStorage.setItem("ques",temps);
}


function sum(k){
	b=localStorage.getItem('ques');
	var a = b.split(",");
	var i;
	for(i=0;i<a.length;i++)
	{
		if(a[i]==ans[i])
		{
			k+=10;
		}
	}

	localStorage.setItem("results",k);
	localStorage.setItem("date2",new Date().getTime());
	var existing = localStorage.getItem('array');
var existin = localStorage.getItem('array2');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
existing = existing ? existing.split(',') : [];
existin = existin ? existin.split(',') : [];

// Add new data to localStorage Array
existing.push(localStorage.getItem("lastnames")+"(Science)");
existin.push(localStorage.getItem("results"));

// Save back to localStorage
localStorage.setItem("array", existing);
localStorage.setItem("array2", existin);

var date1, date2;  

         date1 = localStorage.getItem('date1');
         date2 = localStorage.getItem('date2');

         var rest = Math.abs(date1 - date2) / 1000;
         localStorage.setItem("diff",rest);
     
var existi = localStorage.getItem('time');
existi = existi ? existi.split(',') : [];
existi.push(rest+" "+"s");
localStorage.setItem("time", existi);

}

function onc(){
document.getElementById("name").innerHTML ="Hello !!"+ ' '+ localStorage.getItem("lastnames");
document.getElementById("result2").value = localStorage.getItem("results");
}

function previous() {
  window.history.back();
}

function next() {
  window.history.forward()
}
