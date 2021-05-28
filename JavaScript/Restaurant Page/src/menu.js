function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Gazpacho",
        "Gazpacho is made with fresh Spanish tomatoes bursting with flavor."
             )
    );
    menu.appendChild(
      createMenuItem(
        "Pisto",
        "Pisto is a Spanish ratatouille dish. Usually eaten as a tapa, appetizer."
      )
    );
    menu.appendChild(
      createMenuItem(
        "Salmorejo",
        "Thought Spain was famous for only one cold soup?Not a chance, it gets even better."
      )
    );
   
    menu.appendChild(
      createMenuItem(
        "Chorizo",
       "This delicious Spanish food can be added to practically any dish."    
         )
    );

    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;