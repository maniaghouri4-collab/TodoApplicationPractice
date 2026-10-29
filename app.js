let input = document.querySelector("#inputt");
let button = document.querySelector("#btn");
let OrderList =document.querySelector("#list");

button.addEventListener("click" , () =>{
    let value = input.value;

if(value === ""){
    alert("please write somthing")
}else{
 let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center py-3 mb-2 border rounded-3 shadow-sm"

     li.innerHTML = `<span>${value}</span><button class=""  id="edt-btn" >Edit</button>
    <button  class = ""  id="dlt-btn" >Delete</button>`

let dltBtn = li.querySelector("#dlt-btn");
dltBtn.addEventListener("click" ,() =>{
  li.remove()
});
let EditBtn = li.querySelector("#edt-btn");
EditBtn.addEventListener("click" , () => {
  let span = li.querySelector("span");
  let update = prompt("Edit your task " , span.innerHTML);
  if(update !== null  && update !== ""){
    span.innerHTML = update
  }

});
OrderList.appendChild(li);

input.value = "";
}
});




//saving  data  in  local storage
// var ArrayTask = [];
// button.addEventListener("click" , () =>{
// var  val  = input.value;
// if(val !== ""){
//   ArrayTask.push(val);}

// localStorage.setItem("MyTask" , JSON.stringify(ArrayTask));

// localStorage.getItem("MyTask" ,JSON.parse(ArrayTask));

// console.log(ArrayTask);

// })