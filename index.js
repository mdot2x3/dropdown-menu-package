/**
 * attaches dropdown menu logic to specified buttons and menu
 * @param {Object} options
 * @param {string} options.buttonSelector - css selector for menu toggle buttons
 * @param {string} options.menuSelector - css selector for the dropdown menu
 */

function attachDropdownMenu({ buttonSelector, menuSelector }) {
  let activeButton = null;

  const buttons = document.querySelectorAll(buttonSelector);
  const menu = document.querySelector(menuSelector);
  const body = document.body;

  if (!menu || buttons.length === 0) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (activeButton === button && !menu.classList.contains("hidden")) {
        hideMenu();
        return;
      }
      activeButton = button;
      menu.classList.remove("hidden");
      const rect = button.getBoundingClientRect();
      const windowMid = window.innerWidth / 2;

      if (rect.left < windowMid) {
        menu.style.top = `${rect.bottom + window.scrollY}px`;
        menu.style.left = `${rect.left + window.scrollX}px`;
      } else {
        menu.style.top = `${rect.bottom + window.scrollY}px`;
        menu.style.left = `${rect.right + window.scrollX - menu.offsetWidth}px`;
      }
      setTimeout(() => menu.classList.add("visible"), 10);

      body.style.pointerEvents = "none";
      menu.style.pointerEvents = "auto";
      button.style.pointerEvents = "auto";
    });
  });

  document.addEventListener("mousedown", (event) => {
    if (
      !menu.classList.contains("hidden") &&
      !menu.contains(event.target) &&
      event.target !== activeButton
    ) {
      hideMenu();
    }
  });

  function hideMenu() {
    menu.classList.remove("visible");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 150);
    body.style.pointerEvents = "";
    if (activeButton) activeButton.style.pointerEvents = "";
    menu.style.pointerEvents = "";
    activeButton = null;
  }
}

// export for npm usage
module.exports = { attachDropdownMenu };
