const progress = (currentSelector, totalSelector, lineSelector) => {
  const current = document.querySelector(currentSelector).innerHTML,
        total = document.querySelector(totalSelector).innerHTML,
        line = document.querySelector(lineSelector);
  
  const a = +current.replace(/\s/g, "").replace(/.$/, "").slice(0, total.replace(/\s/g, "").replace(/.$/, "").length)
  const b = +total.replace(/\s/g, "").replace(/.$/, "")

  if (a >= b) {
    line.style.width = "100%";
  } else {
    line.style.width = (a / b * 100) + "%";
  }
}

export default progress;