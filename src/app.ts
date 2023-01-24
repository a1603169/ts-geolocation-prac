import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;

const addressInput = document.getElementById("address")! as HTMLInputElement;
const GOOGLE_API_KEY = "AIzaSyBteCxlFUOSX3f6Zj4xUPCYxmmCG56zFhA";
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value; // get user input

  // send this to Google's API!
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}
form.addEventListener("submit", searchAddressHandler);
