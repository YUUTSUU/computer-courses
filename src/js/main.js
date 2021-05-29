import timer from "./modules/timer";
import progress from "./modules/progress";
import modal from "./modules/modal";
import form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
  timer("2021-06-30");
  progress("[data-current]", "[data-total]", "[data-line]");
  modal("[data-open]", "[data-modal]", "[data-close]");
  modal("[data-open-account]", "[data-modal-account]", "[data-close-account]");
  form("[data-form]", "[data-input]", "[data-modal]", "input[name='user__name']", "input[name='user__phone']");
  form("[data-form-account]", "[data-input-account]", "[data-modal-account]");
  form("[data-form-sub]", "[data-input-sub");
})