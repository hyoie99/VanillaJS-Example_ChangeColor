const colorBtn = document.querySelector("button");

function changeColor() {
  const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, 
  ${Math.random() * 256})`;
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
}

colorBtn.addEventListener("click", changeColor);
