"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showPopup(msg, type) {
    const popup = document.createElement("div");
    popup.className = `popup`;
    popup.innerText = msg;
    if (!document.querySelector(".standard")) {
        const container = document.createElement("div");
        container.className = "standard";
        container.id = type;
        container.innerHTML = popup.outerHTML + "<img class=\"x_image\" src=\"X.png\" alt=\"Image\" onclick='closeAlert()'/> \n <span class=\"info_text\" onclick='showMoreInfo()'>more</span>";
        document.body.appendChild(container);
        console.log("noob");
    }
    else {
        const standardElement = document.querySelector(".standard");
        if (standardElement) {
            standardElement.innerHTML = popup.outerHTML + "<img class=\"x_image\" src=\"X.png\" alt=\"Image\" onclick='closeAlert()'/> \n <span class=\"info_text\" onclick='showMoreInfo()'>more</span>";
        }
        console.log("feinous");
    }
}
function closeAlert() {
    console.log("close");
    const standardElement = document.querySelector(".standard");
    if (standardElement) {
        standardElement.remove();
    }
}
function showMoreInfo() {
}
//# sourceMappingURL=popup.js.map