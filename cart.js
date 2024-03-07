var cartArr=JSON.parse(localStorage.getItem("cartitem"))|| [];
displayTable(cartArr);
function  displayTable(cartArr){
document.querySelector("#main").innerHTML ="";

cartArr.map(function(ele,index){
var div = document.createElement("div");

var image = document.createElement("img");
image.setAttribute("src", ele.image_url);

var name = document.createElement("p");
name.textContent = ele.name;

var div2 = document.createElement("div");
div2.setAttribute("id", "sub");

var p1 = document.createElement("p");
p1.textContent = ele.price;

var p2 = document.createElement("p");
p2.textContent = ele.strikedoffprice;

div2.append(p1, p2);
var place = document.createElement("h4");
place.textContent = ele.placeName;

var btn = document.createElement("button");
btn.setAttribute("class","del")
btn.textContent="DELETE"
btn.addEventListener("click",function(){
deleteTask(index);
});
