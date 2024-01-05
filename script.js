// Get DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Event listener for each option image
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // Add "active" class to the clicked option image
    image.classList.add("active");

    // Set initial images and result text
    userResult.src = cpuResult.src =
      "https://drive.google.com/uc?export=view&id=1_1QksyMi1preMVYLovC397sJNetdz2U-";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    // Add "start" class to the game container
    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      // Remove "start" class from the game container
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "/images/rock.png",
        "/images/paper.png",
        "/images/scissors.png"
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Your device",
        RS: "You",
        PP: "Draw",
        PR: "You",
        PS: "Your device",
        SS: "Draw",
        SR: "Your device",
        SP: "You"
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Its a tie" : `${outComeValue} won!!`;
    }, 2500);
  });
});
