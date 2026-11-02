let input = document.querySelector("#inputt");
let button = document.querySelector("#btn");
let OrderList =document.querySelector("#list");

let CurrentSpan = null;
var ArrayTask = [];

button.addEventListener("click" , () =>{
    let value = input.value;

if(value === ""){
    alert("please write somthing");
    return;
}
if(CurrentSpan  !== null){
  CurrentSpan.innerHTML = value;
  CurrentSpan = null;
  button.innerHTML = "Add";
  input.value = "";
  return;
}

ArrayTask.push(value);

localStorage.setItem("MyTask" , JSON.stringify(ArrayTask));


 let li = document.createElement("li");
     li.innerHTML = `<span>${value}</span>
                     <button  id="edt-btn" >Edit</button>
                     <button id="dlt-btn" >Delete</button>`

let dltBtn = li.querySelector("#dlt-btn");
dltBtn.addEventListener("click" ,() =>{
  li.remove()
});
let EditBtn = li.querySelector("#edt-btn");
EditBtn.addEventListener("click" , () => {
  let span = li.querySelector("span");
  input.value = span.innerHTML;
  CurrentSpan =  span;
  button.innerHTML =" update";
  input.focus()

  //let update = prompt("Edit your task " , span.innerHTML);
  // if(update !== null  && update !== ""){
  //   span.innerHTML = update
  // }

});
OrderList.appendChild(li);

input.value = "";

});




//saving  data  in  local storage

// button.addEventListener("click" , () =>{
// var  val  = input.value;
// if(val !== ""){
  
// localStorage.getItem("MyTask" ,JSON.parse(ArrayTask));

// console.log(ArrayTask);

// })