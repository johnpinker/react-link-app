import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Link from '../Link';

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

const testData = { id: "1",
    name: "testName",
    href: "testUrl"
};

it("renders link with correct name", () => {
  act(() => {
    render(<Link link={testData}/>, container);
  });
  expect(container.textContent).toBe(testData.name);
});

it("renders link with correct href", () => {
    act(() => {
      render(<Link link={testData}/>, container);
    });
    expect(container.firstChild.firstChild.getAttribute("href")).toBe(testData.href);
  });