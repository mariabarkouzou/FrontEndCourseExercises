function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
  
    const info = document.createElement("p");
    info.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident similique accusantium nemo autem.";
  
    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "images/restaurant.png";
    restaurantLocation.alt = "Para Todos restaurant location";
  
    contact.appendChild(info);
    contact.appendChild(restaurantLocation);
  
    return about;
  }
  
  function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
  }
  
  export default loadAbout;