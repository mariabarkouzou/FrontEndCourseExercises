function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const homeImage = document.createElement("img");
    homeImage.src = "images/home.jpg";
    homeImage.alt = "Spices";
  
    home.appendChild(createParagraph("Spain's most famous place!"));
    home.appendChild(createParagraph("With you since 1982"));
    home.appendChild(homeImage);
  
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;