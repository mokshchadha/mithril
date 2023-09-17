"use strict";

const m = require("mithril");

let model = {
  count: 0,
};

const Button = {
  view: function () {
    return m(
      "button",
      {
        onclick: function () {
          model.count++;
        },
      },
      "Count Up"
    );
  },
};

const Counter = {
  view: function (vnode) {
    return vnode.attrs.count;
  },
};

const MyComponent = {
  view: function (vnode) {
    const message = `Hello ${vnode.attrs.name}`;
    return [m("h1", message), m(Counter, model), m(Button)];
  },
};

m.mount(document.body, {
  view: function () {
    return m(MyComponent, { name: "moksh" });
  },
});
