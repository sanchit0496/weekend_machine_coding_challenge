const board = document.querySelector(".board");
const chess = document.querySelector(".chess");
const bottom = document.createElement("div");
const left = document.createElement("div");
bottom.className = "bottom";
left.className = "left";
for (let i = 0; i < 8; i++) {
  console.log(i, String.fromCharCode(i + 97));
  const div = document.createElement("div");
  const div1 = document.createElement("div");
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  p.textContent = String.fromCharCode(i + 97);
  div.appendChild(p);
  bottom.appendChild(div);
  p1.textContent = 8 - i;
  div1.appendChild(p1);
  left.appendChild(div1);
}
chess.appendChild(bottom);
chess.appendChild(left);
console.log(board);
for (let i = 0; i < 8; i++) {
  const block = document.createElement("div");
  block.className = "block";
  for (let j = 0; j < 8; j++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box` + (i + 1) + "" + (j + 1);
    block.appendChild(box);
  }
  board.appendChild(block);
}
const check = (upper) => {
  const num = upper.toString();
  if (
    Number(num[0]) >= 1 &&
    Number(num[0]) <= 8 &&
    Number(num[1]) >= 1 &&
    Number(num[1]) <= 8
  ) {
    return true;
  } else {
    return false;
  }
};
document.querySelectorAll(".box").forEach((el) => {
  const selectedBox = el.id.slice(3, el.id.length);
  el.addEventListener("mouseenter", () => {
    el.classList.add("hover");
    let upperLeft = selectedBox - 11;
    while (upperLeft > 0 && check(upperLeft)) {
      document.querySelector("#box" + upperLeft).classList.add("other");
      upperLeft -= 11;
    }
    let upperRight = selectedBox - 9;
    while (upperRight > 10 && check(upperRight)) {
      document.querySelector("#box" + upperRight).classList.add("other");
      upperRight -= 9;
    }
    let bottomLeft = Number(selectedBox) + 9;
    console.log(bottomLeft);
    while (bottomLeft <= 88 && check(bottomLeft)) {
      document.querySelector("#box" + bottomLeft).classList.add("other");
      bottomLeft += 9;
    }
    let bottomRight = Number(selectedBox) + 11;
    while (bottomRight <= 88 && check(bottomRight)) {
      document.querySelector("#box" + bottomRight).classList.add("other");
      bottomRight += 11;
    }
  });
  // el.removeEventListener()
  el.addEventListener("mouseleave", () => {
    el.classList.remove("hover");
    let upperLeft = selectedBox - 11;
    while (upperLeft > 0 && check(upperLeft)) {
      document.querySelector("#box" + upperLeft).classList.remove("other");
      upperLeft -= 11;
    }
    let upperRight = selectedBox - 9;
    while (upperRight > 10 && check(upperRight)) {
      document.querySelector("#box" + upperRight).classList.remove("other");
      upperRight -= 9;
    }
    let bottomLeft = Number(selectedBox) + 9;
    while (bottomLeft <= 88 && check(bottomLeft)) {
      document.querySelector("#box" + bottomLeft).classList.remove("other");
      bottomLeft += 9;
    }
    let bottomRight = Number(selectedBox) + 11;
    while (bottomRight <= 88 && check(bottomRight)) {
      document.querySelector("#box" + bottomRight).classList.remove("other");
      bottomRight += 11;
    }
  });
});
