let request,request2;
if(window.XMLHttpRequest) { request= new XMLHttpRequest(); request2= new XMLHttpRequest(); }
else { request = new ActiveXObject("Microsoft.XMLHTTP");
request2 = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET","https://api.quotable.io/random");
//console.log(request);
request.send();
const containerEl=document.querySelector(".container");
const myfunction= function (containerEl,result) {
    let x=document.body;
    const div = document.createElement("div");
        let pEl= document.createElement("p");
        let pEl2= document.createElement("p");
        pEl.textContent="author name is: " + result.author;
        pEl2.textContent="content is: "  + result.content;
        div.append(pEl);
        div.append(pEl2);
         x.append(div);
}

request.onreadystatechange = function(event) {
//    
    if (this.readyState == 4 && this.status == 200) {
        document.write("1");
        let result= JSON.parse(request.responseText);
        //document.getElementById("demo").innerHTML = this.responseText;
    
          myfunction(containerEl,result);
    }
    }
       
request2.open("GET","https://api.quotable.io/random");
//console.log(request);
request2.send();

        request2.onreadystatechange = function(event) {
//    
    if (this.readyState == 4 && this.status == 200) {
         document.write("2");
        let result3= JSON.parse(request2.responseText);
        //document.getElementById("demo").innerHTML = this.responseText;
        myfunction(containerEl,result3);
  
    }
    
    }
