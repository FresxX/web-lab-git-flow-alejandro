const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
  const dark = document.body.dataset.theme !== "dark";

  document.body.dataset.theme = dark ? "dark" : "light";

  button.setAttribute("aria-pressed", String(dark));
  button.textContent = dark ? "Light mode" : "Dark mode";
});