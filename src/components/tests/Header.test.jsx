import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from '../Header';

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

it("renders with a string", () => {
 

  act(() => {
    render(<Header title="Title Test Text" />, container);
  });
  expect(container.textContent).toBe("Title Test Text");
});

it("renders header tag", () => {

    act(() => {
      render(<Header title="Title Test Text" />, container);
    });
    expect(container.children[0].tagName).toBe("HEADER");
  });