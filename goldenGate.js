var request = new XMLHttpRequest();
var output = '';
var data_json;

//request.open('GET', 'http://jsonplaceholder.typicode.com/posts/');
request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){

		if((request.status==200) && (request.readyState==4)){
			data_json = JSON.parse(request.response);
	        for(var i in data_json.data){
                var data = data_json.data[i];
                if(data[10] =="Golden Gate Bridge"){
               
                output += "<p>" +"Title: " + data[8] + "</p>";
                output += "<p>" +"Release Year: " + data[9] + "</p>";
                output += "<p>" +"Production Company: " + data[12] + "</p>";
                output += "</br>";
            }
                //output += "<p>" + data["body"] + "</p>";
                //output += "<h3>" + data["title"] + "</h3>";
                //output += "<p>" + data["body"] + "</p>";

	        }

            document.getElementById("result").innerHTML += output
            //document.getElementById("result").innerHTML += data_json


		}
}

request.send();