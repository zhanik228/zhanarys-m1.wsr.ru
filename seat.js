const seats = document.querySelectorAll('.plane-seat')
const seatDisplay = document.getElementById('select-seat-display')

seats.forEach((seat) => {
    seat.addEventListener('click', (event) => {
        if (event.target.classList.contains('chosen')) {
            event.target.classList.remove('chosen')
            seatDisplay.textContent = 'Select a seat'
        } else {
            seats.forEach((seat) => {
                if (seat.classList.contains('chosen')) {
                    seat.classList.remove('chosen')
                }
            })
            seatDisplay.textContent = `Selected Seat: ${event.target.id}`
            event.target.classList.add('chosen')
        }
    })
})