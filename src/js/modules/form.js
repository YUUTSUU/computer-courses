import postData from "../services/service";

const form = (formSelector, inputSelector, modalSelector, nameSelector, phoneSelector) => {
  const form = document.querySelector(formSelector),
        input = document.querySelectorAll(inputSelector),
        modal = document.querySelector(modalSelector),
        name = document.querySelector(nameSelector),
        phone = document.querySelector(phoneSelector);

  if (name || phone) {
    name.addEventListener("input", () => {
      name.value = name.value.replace(/\d/, "")
    })

    phone.addEventListener("input", () => {
      phone.value = phone.value.replace(/\D/, "")
    })
  }

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    error: "Что-то пошло не так..."
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = document.createElement("div");
    status.classList.add("status");
    form.appendChild(status);

    if (form.getAttribute("data-form") === "status") {
      status.textContent = message.loading;
    }

    const formData = new FormData(form);
    const data = JSON.stringify(Object.fromEntries(formData.entries()));

    postData(data)
      .then(res => {
        console.log(res);
        if (form.getAttribute("data-form") === "status") {
          status.textContent = message.success;
        }
      })
      .catch(() => {
        if (form.getAttribute("data-form") === "status") {
          status.textContent = message.error;
        }
      })
      .finally(() => {
        input.forEach(item => item.value = "");

        if (form.getAttribute("data-form") === "status" || form.getAttribute("data-form-account") === "modal") {
          setTimeout(() => {
            status.remove();
  
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = "0px";
          }, 3000);
        }

        
      });
  })
}

export default form;