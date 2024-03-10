console.log("Welcome to travelo");

document.getElementById("swiss").onclick = function () {
  window.location.href = "swiss.html";
};
document.getElementById("india").onclick = function () {
  window.location.href = "india.html";
};
document.getElementById("sweden").onclick = function () {
  window.location.href = "sweden.html";
};
document.getElementById("carebian").onclick = function () {
  window.location.href = "carebian.html";
};
document.getElementById("indonesia").onclick = function () {
  window.location.href = "indonesia.html";
};
document.getElementById("france").onclick = function () {
  window.location.href = "france.html";
};
var buttons = document.getElementsByClassName("view");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    window.location.href = "learn.html";
  };
}

function amount() {
  var tour = document.querySelector("#tour");
  var guests = document.querySelector("#guests").value;
  var tourPrice = tour.options[tour.selectedIndex].value;
  // var checkInDate = document.querySelector("#check-in").valueAsDate;
  // var checkOutDate = document.querySelector("#check-out").valueAsDate;
  // var timeDiff = checkOutDate - checkInDate;
  // var days = timeDiff / (1000 * 3600 * 24);
  var total = tourPrice * guests * 2;
  document.querySelector("#totalAmount").innerText = total;
}

function paymentMethod() {
  var option = document.querySelector("#select").value;

  document.querySelector("#upi").style.display = "none";
  document.querySelector("#qr").style.display = "none";

  if (option === "upi") {
    document.querySelector("#upi").style.display = "block";
  } else if (option === "qr") {
    document.querySelector("#qr").style.display = "block";
  }
}
