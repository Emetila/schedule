class IconButton extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<div class='wrap'><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#797bd4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#797bd4" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#797bd4" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg> Back to list</div>`;
    }
  }

  customElements.define("app-backwards-icon", IconButton);

  class ItemWrap extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = '<div class="wrapper"></div>';
    }
  }
  customElements.define("item-wrapper", ItemWrap);

  class HeaderWrap extends HTMLElement {
    constructor() {
      super();
      this.innerHTML =
        '<div class="header"><h1>Today</h1><svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#0f0f0f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-464.000000, -1087.000000)" fill="#797bd4"> <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z" id="plus-circle" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></div>';
    }
  }

  customElements.define("header-wrapper", HeaderWrap);

  class ProgressBar extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
       <div class="progress-wrap">
        <div class="bg-blue"></div>
       </div>
       `;
    }
  }
  customElements.define("progress-bar", ProgressBar);

  class ProgressBarValue extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
       <div class="progress-value">
         <h3>33% complete</h3>
       </div>
       `;
    }
  }
  customElements.define("progress-bar-value", ProgressBarValue);

  class OptionsWrap extends HTMLElement {
    constructor() {
      super();
      this.isClicked = true;
      const text = this.getAttribute("text");
      this.innerHTML = `
       <div class="option-wrap">
        ${
          this.isClicked === true
            ? '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#97e88d"></path> </g></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#d5daec" stroke-width="1.5"></circle> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#d5daec" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
        }
         <style> font-weight: lighter </style> <h3>${text}</h3>
       </div>
       `;

      // Define onclick function
      this.onclick = () => {
        // Call a method or perform an action when the button is clicked
        this.handleClick();
      };
    }
    handleClick() {
      // Toggle the state of isClicked variable
      this.isClicked = !this.isClicked;
      console.log("Button clicked:", this.isClicked);
      console.log("Button clicked:", this.getAttribute("text"));
    }
  }
  customElements.define("options-wrap", OptionsWrap);

  class OccurBtn extends HTMLElement {
    constructor() {
      super();
      const text = this.getAttribute("text");
      let buttonClass = "";
      // Add dynamic styles based on the value of the text attribute
      if (text === "Daily") {
        buttonClass = "btn-value1";
      } else if (text === "Weekly") {
        buttonClass = "btn-value2";
      } else if (text === "Monthly") {
        buttonClass = "btn-value3";
      } else {
        buttonClass = "btn-default";
      }

      this.innerHTML = `
        <button class="${buttonClass}">${text}</button>
        `;
    }
  }
  customElements.define("occur-btn", OccurBtn);