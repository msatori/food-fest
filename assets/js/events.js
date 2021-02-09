require("bootstrap");
const createLoremIpsum = require("./helpers");
const createEl = require("./domMethods");


if (window.location.href.indexOf("event") > -1) {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    }
}