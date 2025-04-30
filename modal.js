const modal = document.getElementById("loginModal");

const openModalBtns = document.querySelectorAll("#login-button");

const closeModal = document.querySelector(".close");

openModalBtns.forEach((button) => {
  button.addEventListener("click", function () {
    modal.style.display = "flex";
  });
});

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Login Form

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("users.json");
      const users = await response.json();

      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        switch (username) {
          case "Sukhpreet Singh Sandhu":
            window.location.href = "index.html";
            break;
          case "Sumit Dhiman":
            window.location.href = "index1.html";
            break;
          case "Vedant Jain":
            window.location.href = "index2.html";
            break;
   
          default:
            document.getElementById("errorMessage").textContent =
              "User not recognized";
            break;
        }
      } else {
        document.getElementById("errorMessage").textContent =
          "Invalid username or password";
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      document.getElementById("errorMessage").textContent =
        "Error loading data. Please try again later.";
    }
  });

window.addEventListener("load", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);

    switch (user.username) {
      case "Sukhpreet":
        window.location.href = "index.html";
        break;
      case "Sumit":
        window.location.href = "index1.html";
        break;
      case "Vedant":
        window.location.href = "index2.html";
        break;
    
      default:
        localStorage.removeItem("loggedInUser");
        break;
    }
  }
});
