// hello.test.js, again

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ReactTestUtils from "react-dom/test-utils";

import ListOfLinks from "../ListOfLinks";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a greeting", () => {
  act(() => {
    render(<ListOfLinks />, container);
  });

  expect(ReactTestUtils.isDOMComponent(container.firstChild)).toBe(true);
});
