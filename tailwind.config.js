/** @type {import('tailwindcss').Config} */

let colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
colors = { ...colors, ...{ transparent: "transparent" } };

module.exports = {
  content: ["./src/**/*{html,js,jsx}"], // purge es reemplazado por content
  theme: {
    extend: {
      color: {
        ...colors,
      },
    },
  },
};
