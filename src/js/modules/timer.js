const timer = (deadline) => {

  let days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds")

  let interval = setInterval(setUpdateTime, 1000)

  setUpdateTime();

  function getTimeRiming(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    return {
      total: t,
      days: Math.floor(t / (1000 * 60 * 60 * 24)),
      hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((t / 1000 / 60) % 60),
      seconds: Math.floor((t / 1000) % 60)
    }
  }

  function setUpdateTime() {
    let time = getTimeRiming(deadline);

    days.textContent = setTimeZero(time.days),
    hours.textContent = setTimeZero(time.hours),
    minutes.textContent = setTimeZero(time.minutes),
    seconds.textContent = setTimeZero(time.seconds)

    if (time.total <= 0) {
      clearInterval(interval);
    }
  }

  function setTimeZero(number) {
    if (number >= 0 && number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

}

export default timer;