document.getElementById("burger").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
});

const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown");

dropdownToggle.addEventListener("click", function (event) {
  event.preventDefault();
  dropdown.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (
    !dropdown.contains(event.target) &&
    !dropdownToggle.contains(event.target)
  ) {
    dropdown.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll(".menu li a");

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPath) {
      item.classList.add("active");
    }
  });
});

document
  .getElementById("info-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputs = this.querySelectorAll("input[required], select[required]");
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false;
      }
    });

    if (allFilled) {
      alert("Success! All fields are filled.");
      location.reload(true);
    } else {
      alert("Error! Please fill in all required fields.");
    }
  });
