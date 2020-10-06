export class Menu {
  constructor(menuClass, triggerClass) {
    this.menuClass = menuClass;
    this.triggerClass = triggerClass;
    this.trigger = document.querySelector(`.${this.triggerClass}`);
    this.menu = document.querySelector(`.${this.menuClass}`);

    this.isOpened = false;
  }

  init() {
    this.onTriggerClick = (evt) => this.toggle(evt);
    this.trigger.addEventListener('click', this.onTriggerClick);
  }
  
  toggle(evt) {
    evt.preventDefault();

    document.body.classList.toggle('page--menu-opened')

    this.trigger.classList.toggle(`${this.triggerClass}--opened`);
    if (this.isOpened) {
      this.trigger.setAttribute('aria-expanded', true);
      this.menu.setAttribute('aria-hidden', true);
    } else {
      this.trigger.setAttribute('aria-expanded', false);
      this.menu.setAttribute('aria-hidden', false);
    }
  }
}