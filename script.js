let div = document.getElementById("div");

let btn = document.getElementById("btn");

function thankYou() {
  div.innerText = "Thank you for reading my resume";
  console.log("awesome");
}

btn.addEventListener("click", thankYou);
btn.style.color = "chocolate";
