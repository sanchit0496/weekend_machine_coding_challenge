// Function to create the Labels of the chess board
const createLabelsOfBoard = () => {
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
};
// Function to create the HTML Layout of the chess board
const createBoardLayout = () => {
  const board = document.querySelector(".board");
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
};
// Helper Function to check wether the ID is valid or not
const isValidId = (id) => {
  const row = Math.floor(id / 10);
  const col = id % 10;
  return row >= 1 && row <= 8 && col >= 1 && col <= 8;
};
createBoardLayout();
createLabelsOfBoard();
// Helper function to add or remove the 'other' class to a square
const updateSquare = (id, add) => {
  const square = document.getElementById(`box${id}`);
  if (square && isValidId(id)) {
    square.classList[add ? "add" : "remove"]("other");
  }
};

// Main function to highlight squares that the bishop can attack
const highlightSquares = (selectedBox, isEntering) => {
  let modifier = isEntering ? 1 : -1; // Determines whether to add or remove the highlight
  // Diagonal directions: up-left, up-right, down-left, down-right
  let directions = [-11, -9, 9, 11]; //best to have an array of valid directions

  directions.forEach((direction) => {
    let nextSquare = parseInt(selectedBox, 10);
    // Use the isValidMove function to verify if the square is within bounds before highlighting
    while (isValidId(nextSquare)) {
      updateSquare(nextSquare, isEntering);
      nextSquare += direction * modifier;
    }
  });
};

// Attach event listeners to each square on the board, we just have to pass a boolean for the main function to manipulate the CSS classes

document.querySelectorAll(".box").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    const selectedBox = el.id.slice(3);
    console.log(selectedBox);
    el.classList.add("hover");
    highlightSquares(selectedBox, true); // Highlight squares when mouse enters
  });

  el.addEventListener("mouseleave", () => {
    const selectedBox = el.id.slice(3); //the ed.id returns box12, box23 etc, since we need the numbers 12, 23, only hence we are slicing the string to get the box number from the id of the box
    el.classList.remove("hover");
    highlightSquares(selectedBox, false); // Remove highlight when mouse leaves
  });
});
