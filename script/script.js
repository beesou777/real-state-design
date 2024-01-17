window.addEventListener("load", () => {
    const buttonList = document.querySelectorAll("button");
    const content = document.querySelector(".slides");
  
    buttonList.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev" ? -1 : 1;
        const scrollAmount = (content.clientWidth * direction) / 4;
        content.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  });