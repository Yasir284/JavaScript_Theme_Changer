// Theme Changer:
//  Users can select if they want dark or light mode on selection immediate selection must occur.

let themeBtn = document.querySelector(".themeChanger");
let icon = document.querySelector(".material-symbols-outlined");
let theme = "light";
function change() {
  if (theme === "light") {
    addChange("#e8f9fd", "#212121", "dark_mode", "Dark mode");
    theme = "dark";
  } else {
    addChange("#212121", "#e8f9fd", "light_mode", "Light mode");
    theme = "light";
  }
}

function addChange(txtColor, bgColor, iconName, themeName) {
  themeBtn.style.background = txtColor;
  themeBtn.style.color = bgColor;
  icon.textContent = iconName;
  themeBtn.querySelector("p").textContent = themeName;
  document.body.style.background = bgColor;
  document.body.style.color = txtColor;
}
