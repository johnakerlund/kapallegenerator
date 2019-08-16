function generator(){
    var first = ["Anal","Bög","Bajs","Kuk","Snopp","Kiss","Mini","Anus","Fitt","Bullemi","Blöj","CP","Samba",
    "Disco","Downs","Runk","Dvärg","Euro","Hiv","Mjölk","Downs","Damp","Mes","Stor","Mini","Pung",
    ,"Sagg","Fubba","Timmer","Brall","Sprut","Kräm","Hink","Kamel","Skäggbiffs"];

var second =["Bögen","Röven","Mackan","Kissarn","Runkaren","Fittan","Bullen","Bajsarn","Sovarn","Lover","Hivet","Aidset","Ninen",
   "Bingo","Pajsarn","Lådan","Hålet","Limbo","Skrammel","Lådda","Ölen","Sunken","Påsen","Knullet"];
var names = ["Lasse","Janne","Hasse","Bjögga","Berra","Viggo"]
    var namemath = Math.floor(Math.random()*7)
    var double = Math.floor(Math.random()*8);
   
    var textBox = document.getElementById('TEXTBOX_ID').value;

    console.log(double);
    if(namemath == 3 ){

        var name = names[Math.floor(Math.random()* names.length)]+ first[Math.floor(Math.random()* first.length)]
    }
    
    else if(double == 1){

        var name = first[Math.floor(Math.random()* first.length)]+ first[Math.floor(Math.random()* first.length)] + "-"+second[Math.floor(Math.random()* second.length)];  
    }
    else if(double == 2){
        var name = first[Math.floor(Math.random()* first.length)] + "-"+ textBox
     
    }
    else if (double ==7 ){

        var name = first[Math.floor(Math.random()* first.length)]+ first[Math.floor(Math.random()* first.length)] + "-"+ textBox
    }
    else{
    var name = first[Math.floor(Math.random()* first.length)] + "-"+second[Math.floor(Math.random()* second.length)];
    }
    

    if (document.getElementById("name")) {
		document.getElementById("placeholder").removeChild(document.getElementById("name"));
	}
    var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name));
	document.getElementById("placeholder").appendChild(element);

  
}
