const input = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.type == "text") {
    input.type = "password";
    btn.innerHTML = `<i class="material-icons h-[24px] w-[24px]">visibility_off</i>`;
  } else {
    input.type = "text";
    btn.innerHTML = `<i class="material-icons h-[24px] w-[24px]">visibility_on</i>`;
  }
});
