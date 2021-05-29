const modal = (openSelector, modalSelector, closeSelector) => {

    const open = document.querySelector(openSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    const offset = calcScroll();

    open.addEventListener("click", (event) => {
      event.preventDefault();

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${offset}px`;
    })

    close.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    })

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      }
    })

    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px";
      }
    })

  function calcScroll() {
    const div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);

    const width = div.offsetWidth - div.clientWidth;
    div.remove();

    return width;
  }

}

export default modal;