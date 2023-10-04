export default class ElementSelected {
    constructor(open , headerContainer , cancel , abouthText , activeBoxOne , activeBoxElementTitle) {
      this.open = document.querySelector(open);
      this.headerContainer = document.querySelector(headerContainer);
      this.cancel = document.querySelector(cancel);
      this.abouthText = document.querySelector(abouthText);
      this.activeBoxOne = document.querySelector(activeBoxOne);
      this.activeBoxElementTitle = document.querySelector(activeBoxElementTitle);
    }
  }
  export function addStyle(element) {
    const addStyleArray = [
      {element : element.open},
      {element : element.headerContainer},
      {element : element.cancel},
      {element : element.abouthText},
      {element : element.activeBoxOne}
    ];
    return addStyleArray;
  }
  