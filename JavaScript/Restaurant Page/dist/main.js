(() => {
  "use strict";
  function e(e) {
    const t = document.createElement("p");
    return (t.textContent = e), t;
  }
  const t = function () {
    const t = document.getElementById("main");
    (t.textContent = ""),
      t.appendChild(
        (function () {
          const t = document.createElement("div");
          t.classList.add("home");
          const n = document.createElement("img");
          return (
            (n.src = "images/home.png"),
            (n.alt = "Spices"),
            t.appendChild(e("Spain's most famous place!")),
            t.appendChild(e("With you since 1982")),
            t.appendChild(n),
            t
          );
        })()
      );
  };
  function n(e, t) {
    const n = document.createElement("div");
    n.classList.add("menu-item");
    const a = document.createElement("h2");
    a.textContent = e;
    const o = document.createElement("p");
    o.textContent = t;
    const c = document.createElement("img");
    return (
      (c.src = `images/${e.toLowerCase()}.png`),
      (c.alt = `${e}`),
      n.appendChild(c),
      n.appendChild(a),
      n.appendChild(o),
      n
    );
  }
  function a() {
    const e = document.createElement("header");
    e.classList.add("header");
    const a = document.createElement("h1");
    return (
      a.classList.add("restaurant-name"),
      (a.textContent = "Para Todos"),
      e.appendChild(a),
      e.appendChild(
        (function () {
          const e = document.createElement("nav"),
            a = document.createElement("button");
          a.classList.add("button-nav"),
            (a.textContent = "Home"),
            a.addEventListener("click", (e) => {
              e.target.classList.contains("active") || (o(a), t());
            });
          const c = document.createElement("button");
          c.classList.add("button-nav"),
            (c.textContent = "Menu"),
            c.addEventListener("click", (e) => {
              e.target.classList.contains("active") ||
                (o(c),
                (function () {
                  const e = document.getElementById("main");
                  (e.textContent = ""),
                    e.appendChild(
                      (function () {
                        const e = document.createElement("div");
                        return (
                          e.classList.add("menu"),
                          e.appendChild(
                            n(
                              "Gazpacho",
                              "Gazpacho is made with fresh Spanish tomatoes bursting with flavor."     
                               )
                              )
                          ),
                          e.appendChild(
                            n(
                              "Pisto",
                              "Pisto is a Spanish ratatouille dish. Usually eaten as a tapa, appetizer."
                              )
                          ),
                          e.appendChild(
                            n(
                              "Salmorejo",
                              "Thought Spain was famous for only one cold soup?Not a chance, it gets even better."
                              )
                          ),
                          e.appendChild(
                            n(
                              "Chorizo",
                              "This delicious Spanish food can be added to practically any dish."    
                              )
                          ),
                          
                          e
                        ;
                      })()
                    );
                })());
            });
          const i = document.createElement("button");
          return (
            i.classList.add("button-nav"),
            (i.textContent = "About"),
            i.addEventListener("click", (e) => {
              e.target.classList.contains("active") ||
                (o(i),
                (function () {
                  const e = document.getElementById("main");
                  (e.textContent = ""),
                    e.appendChild(
                      (function () {
                        const e = document.createElement("div");
                        e.classList.add("about");
                        const t = document.createElement("p");
                        t.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio, eaque rerum! Provident similique accusantium nemo autem.";
          
                        const a = document.createElement("img");
                        return (
                          (a.src = "images/restaurant.png"),
                          (a.alt = "Para Todos restaurant"),
                          e.appendChild(t),
                      
                          e.appendChild(a),
                          e
                        );
                      })()
                    );
                })());
            }),
            e.appendChild(a),
            e.appendChild(c),
            e.appendChild(i),
            e
          );
        })()
      ),
      e
    );
  }
  function o(e) {
    document.querySelectorAll(".button-nav").forEach((e) => {
      e !== this && e.classList.remove("active");
    }),
      e.classList.add("active");
  }
  !(function () {
    const e = document.getElementById("content");
    e.appendChild(a()),
      e.appendChild(
        (function () {
          const e = document.createElement("main");
          return e.classList.add("main"), e.setAttribute("id", "main"), e;
        })()
      ),
      e.appendChild(
        (function () {
          const e = document.createElement("footer");
          e.classList.add("footer");
          const t = document.createElement("p");
          t.textContent = "Copyright © 2021 Maria Barkouzou";
          
          return (
           
            e.appendChild(t),
            e
          );
        })()
      ),
      o(document.querySelector(".button-nav")),
      t();
  })();
})();
