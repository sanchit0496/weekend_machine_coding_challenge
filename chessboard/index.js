

const container = document.getElementById("chess-container");

const createBoard = () => {
    for (let i = 0; i < 8; i++) {
        container.insertAdjacentHTML("beforeend", `<div>
        <span id=${i * 8 + 0}></span>
        <span id=${i * 8 + 1}></span>
        <span id=${i * 8 + 2}></span>
        <span id=${i * 8 + 3}></span>
        <span id=${i * 8 + 4}></span>
        <span id=${i * 8 + 5}></span>
        <span id=${i * 8 + 6}></span>
        <span id=${i * 8 + 7}></span>
        </div>`);
    }
}

createBoard();

container.addEventListener("mouseover", (event) => {
    const hoveredSpanId = Number(event.target.id);
    const row = Math.floor(hoveredSpanId / 8);
    const col = hoveredSpanId % 8;
    
    for (i = 0; i < 8; i++) {
        const rowDif = Math.abs(row - i);
        // right side diagnol elements on each row, except hovered element row      
        if (i !== row && i * 8 + (col + rowDif) < (i + 1) * 8) {
            document.getElementById(`${i * 8 + (col + rowDif)}`).className = "highlight"
        }
        // left side diagnol elements on each row, except hovered element row
        if (i !== row && i * 8 + (col - rowDif) >= i * 8) {
            document.getElementById(`${i * 8 + (col - rowDif)}`).className = "highlight"
        }
    }

});

container.addEventListener("mouseout", (event) => {
    document.querySelectorAll(".highlight").forEach((eachEle) => {
        eachEle.className = "";
    })
})