const sections = document.querySelectorAll(".section ");
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

(function () {
  //Button click active class
  for (let i = 0; i < sectionButton.length; i++) {
    sectionButton[i].addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      //   let currentButton = document.querySelectorAll(".active-btn");
      //   currentButton[0].className = currentButton[0].className.replace(
      //     "active-btn",
      //     ""
      //   );
      //   console.log(currentButton);
      //   this.className += "active-btn";
    });
  }
  allSections.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      if (id) {
        sectionButtons.forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
    document.querySelector(".theme-button").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
 
})();

//How not to code to remove property 
// allSections.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     sectionButtons.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     sections.forEach((section) => {
//       section.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });