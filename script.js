function generate(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumber").value
var title = document.getElementById("title").value
var amount = document.getElementById("amount").value
var word = document.getElementById("words").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNum").innerHTML = chqNumber;

document.getElementById("payTo").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrds").innerHTML = "<i>" + word + "</i>";

document.getElementById("amt").innerHTML = "<b><i>" + amount + "***</i></b>";

document.getElementById("barcode").innerHTML = "/" + chqNumber.slice(1) + "O0640054t1000000000420913/000a "


}
}








function generateMbl(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumberMbl").value
var title = document.getElementById("titleMbl").value
var amount = document.getElementById("amountMbl").value
var word = document.getElementById("wordsMbl").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumbrMbl").innerHTML =  chqNumber ;

document.getElementById("payToMbl").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsMbl").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtMbl").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodeMbl").innerHTML = "/" + chqNumber + "O0890414t0004140101139624/000a "


}
}












function generateHbl(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"


var chqNumber = document.getElementById("chqNumberHbl").value
var title = document.getElementById("titleHbl").value
var amount = document.getElementById("amountHbl").value
var word = document.getElementById("wordsHbl").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumHbl").innerHTML = "<b>"+chqNumber+"</b>";

document.getElementById("payToHbl").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsHbl").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtHbl").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodeHbl").innerHTML = "/" + chqNumber + "O0541152t0011522500074503/000a "


}
}









function generateHmb2(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"




var chqNumber = document.getElementById("chqNumberHmb2").value
var title = document.getElementById("titleHmb2").value
var amount = document.getElementById("amountHmb2").value
var word = document.getElementById("wordsHmb2").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumHmb2").innerHTML = chqNumber;

document.getElementById("payToHmb2").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsHmb2").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtHmb2").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodeHmb2").innerHTML = "/" + chqNumber.slice(1) + "O0640054t1000000000420913/000a "


}
}
















function generateHmb3(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumberHmb3").value
var title = document.getElementById("titleHmb3").value
var amount = document.getElementById("amountHmb3").value
var word = document.getElementById("wordsHmb3").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumHmb3").innerHTML = chqNumber;

document.getElementById("payToHmb3").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsHmb3").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtHmb3").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodeHmb3").innerHTML = "/" + chqNumber.slice(1) + "O0640054t1000000000420913/000a "


}
}















function generatenbp1(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumbernbp1").value
var title = document.getElementById("titlenbp1").value
var amount = document.getElementById("amountnbp1").value
var word = document.getElementById("wordsnbp1").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumnbp1").innerHTML =  "2&nbsp"+ chqNumber;

document.getElementById("payTonbp1").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsnbp1").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtnbp1").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodenbp1").innerHTML = "/" + chqNumber + "O0702034t2034004037212263/000a "


}
}



















function generatedib(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumberdib").value
var title = document.getElementById("titledib").value
var amount = document.getElementById("amountdib").value
var word = document.getElementById("wordsdib").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumdib").innerHTML =  "<b>"+chqNumber + "</b>";

document.getElementById("payTodib").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsdib").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtdib").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodedib").innerHTML = "/" + chqNumber + "O0130006t0000000121519017/000a "


}
}












function generateabl(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumberabl").value
var title = document.getElementById("titleabl").value
var amount = document.getElementById("amountabl").value
var word = document.getElementById("wordsabl").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumabl").innerHTML =  "<b>24&nbsp "+chqNumber + "</b>";

document.getElementById("payToabl").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsabl").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtabl").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodeabl").innerHTML = "/" + chqNumber + "O0140226t0010001169520029/000a "


}
}

























function generatedib06(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumberdib06").value
var title = document.getElementById("titledib06").value
var amount = document.getElementById("amountdib06").value
var word = document.getElementById("wordsdib06").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumdib06").innerHTML =  "<b>"+chqNumber + "</b>";

document.getElementById("payTodib06").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdsdib06").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtdib06").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodedib06").innerHTML = "/" + chqNumber + "O0130006t0000000121519006/000a "


}
}






















function generatesbl(){
document.getElementById("img").className = ""
document.getElementById("bankHeading").className = "hide"



var chqNumber = document.getElementById("chqNumbersbl").value
var title = document.getElementById("titlesbl").value
var amount = document.getElementById("amountsbl").value
var word = document.getElementById("wordssbl").value



if(chqNumber === "" || title === "" || amount === "" || word === "") {
alert("All input fields must be filled.")
}else{


document.getElementById("chqNumsbl").innerHTML =   chqNumber;

document.getElementById("payTosbl").innerHTML = "<b><i>" + title + "</b></i>";

document.getElementById("amtWrdssbl").innerHTML = "<i>" + word + "</i>";

document.getElementById("amtsbl").innerHTML = "<b><i>**" + amount + "***</i></b>";

document.getElementById("barcodesbl").innerHTML = "/" + chqNumber + "O0810030t6220311714112266/000a "


}
}