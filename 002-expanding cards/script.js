
// 🚀 Text Reveal on Hover - Made by Gaurav 🚀  
//   🔹 Instagram: https://www.instagram.com/the_gaurav_codes/  
//   🔹 GitHub: https://github.com/the-gaurav-codes  
//   ⚡ Feel free to use & modify, but give credit! ⚡

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};


// 🚀  Made by Gaurav 🚀  
//   🔹 Instagram: https://www.instagram.com/the_gaurav_codes/  
//   🔹 GitHub: https://github.com/the-gaurav-codes  
//   ⚡ Feel free to use & modify, but give credit! ⚡