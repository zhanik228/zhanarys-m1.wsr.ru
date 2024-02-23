const buttonAddPassenger = document.querySelector(".add-passenger-btn");
const buttonRemovePassenger = document.querySelector(".remove-passenger-btn");
const passengersWrapper = document.querySelector(".passengers");

buttonAddPassenger.addEventListener("click", (event) => {
  const node = document.createRange().createContextualFragment(`
    <div class="user-card">
        <div class="user-card__left">
            <div class="user-card__img-wrapper">
                <img class="user-card__img" width="64" height="64" src="./media1/fontawesome-free-5.14.0-web/svgs/regular/user-circle.svg" alt="user">
            </div>
            <div class="user-card__content">
                <h2 class="test-5-name user-card__name">Zhanarys <span class="test-5-last">Slamkhanuly</span></h2>
                <p class="user-card__role test-5-dob">Date of birth: 14.09.2004</p>
                <p class="user-card__role test-5-doc">Document number: 22</p>
            </div>
        </div>
    </div>`);
  passengersWrapper.appendChild(node);
});

buttonRemovePassenger.addEventListener("click", (event) => {
  if (passengersWrapper.children.length) {
    passengersWrapper.children[passengersWrapper.children.length - 1].remove();
  }
});
