import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Footer from '../Footer';

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
    render(<Footer footerText="Footer Test Text" />, container);
  });
  expect(container.textContent).toBe("Footer Test Text");


});

it("renders a footer tag", () => {
 

  act(() => {
    render(<Footer footerText="Footer Test Text" />, container);
  });
  expect(container.children[0].tagName).toBe("FOOTER");


});