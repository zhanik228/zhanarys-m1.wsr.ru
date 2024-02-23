const flights = [
  {
    date: "2024-02-23",
    passengersBooked: 30,
    price: 120,
  },
  {
    date: "2024-02-24",
    passengersBooked: 15,
    price: 130,
  },
  {
    date: "2024-02-25",
    passengersBooked: 2,
    price: 140,
  },
  {
    date: "2024-02-26",
    passengersBooked: 30,
    price: 160,
  },
  {
    date: "2024-02-27",
    passengersBooked: 55,
    price: 160,
  },
  {
    date: "2024-02-28",
    passengersBooked: 40,
    price: 160,
  },
  {
    date: "2024-02-29",
    passengersBooked: 37,
    price: 160,
  },
];

const departureDateInput = document.getElementById("departure-date");
const priceDisplay = document.getElementById("price-display");
const departureProbabilityDisplay = document.getElementById(
  "departure-probability-display"
);
const bookingCountDisplay = document.getElementById("booking-count-display");
const flightInfo = document.querySelectorAll(".flight-info");

departureDateInput.addEventListener("change", () => {
  const selectedDate = departureDateInput.value;

  const flight = flights.find((flight) => {
    return flight.date == selectedDate;
  });

  if (flight) {
    const price = flight.date == selectedDate ? flight.price : null;

    if (price !== undefined) {
      priceDisplay.textContent = `${price}$`;
    } else {
      priceDisplay.textContent = "No price available for selected date";
    }

    const departureProbability = calculateDepartureProbability(
      flight.passengersBooked,
      60
    );
    departureProbabilityDisplay.textContent = departureProbability + "%";

    bookingCountDisplay.textContent = flight.passengersBooked;

    flightInfo.forEach((info) => {
      info.style.display = "flex";
    });
  }
});

function calculateDepartureProbability(passengersBooked, flightCapacity) {
  const fullnessPercentage = (passengersBooked / flightCapacity) * 100;

  let departureProbability = 0;

  if (fullnessPercentage >= 50) {
    departureProbability = 100;
  } else if (fullnessPercentage >= 25) {
    departureProbability = 50;
  } else if (fullnessPercentage > 0) {
    departureProbability = 25;
  }

  return departureProbability;
}
