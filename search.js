const selectedToThereDisplay = document.getElementById(
  "display-selected-there"
);
const selectedToReturnDisplay = document.getElementById(
  "display-selected-return"
);
const flightCards = document.querySelectorAll(".flight-card");
const flightCardsWrapper = document.querySelector(".flight-cards__wrapper");

flightCards.forEach((flight) => {
  console.log(flight.textContent);
  flight.addEventListener("click", () => {
    const isReturn = confirm("is it selected for there?");

    if (!isReturn) {
      if (selectedToReturnDisplay.children.length) {
        if (
          selectedToReturnDisplay.children[0].classList.contains("flight-card")
        ) {
          flightCardsWrapper.prepend(selectedToReturnDisplay.children[0]);
        }
      }
      selectedToReturnDisplay.appendChild(flight);
    } else {
      if (selectedToThereDisplay.children.length) {
        if (
          selectedToThereDisplay.children[0].classList.contains("flight-card")
        ) {
          flightCardsWrapper.prepend(selectedToThereDisplay.children[0]);
        }
      }
      selectedToThereDisplay.appendChild(flight);
    }
  });

  flight.setAttribute("draggable", true);

  flight.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  flight.addEventListener("drop", (event) => {
    event.preventDefault();
  });
});

selectedToThereDisplay.addEventListener("drop", handleThereDrop);
selectedToThereDisplay.addEventListener("dragover", handleDragOver);

selectedToReturnDisplay.addEventListener("drop", handleReturnDrop);
selectedToReturnDisplay.addEventListener("dragover", handleDragOver);

function handleThereDrop(event) {
  event.preventDefault();
  event.target.style.height = "auto";
  selectedToThereDisplay.appendChild(
    document.getElementById(event.dataTransfer.getData("text/plain"))
  );
}

function handleReturnDrop(event) {
  event.preventDefault();
  event.target.style.height = "auto";
  selectedToReturnDisplay.appendChild(
    document.getElementById(event.dataTransfer.getData("text/plain"))
  );
}

function handleDragOver(event) {
  event.preventDefault();
}
