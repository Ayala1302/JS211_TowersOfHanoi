
let stone = null;

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row");

  console.log("Yay, we clicked an item", row);
  console.log("Here is the row's id: ", row.id);
  console.log("Here is the row's data-row: ", currentRow);

  // pickUpStone(row.id);
  if (!stone) {
    pickUpStone(row.id);
  } else {
    dropStone(row.id, stone);
  }
};

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  console.log(selectedRow);
  stone = selectedRow.lastElementChild;
  selectedRow.removeChild(stone);
  console.log(stone);
};
console.log(stone);
// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID, stone) => {
  document.getElementById(rowID).appendChild(stone);
  stone = null;
};

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
