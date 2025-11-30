      const menuBtn = document.getElementById("menuBtn");
      const sideMenu = document.getElementById("sideMenu");
      const closeMenu = document.getElementById("closeMenu");

      if (menuBtn && sideMenu && closeMenu) {
          menuBtn.addEventListener("click", () => {
              sideMenu.classList.add("open");
          });

          closeMenu.addEventListener("click", () => {
              sideMenu.classList.remove("open");
          });

          // Fechar menu ao clicar fora dele
          document.addEventListener("click", (event) => {
              if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
                  sideMenu.classList.remove("open");
              }
          });
      } else {
          console.error("Elementos do menu lateral não encontrados");
      }