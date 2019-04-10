import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders successfully", () => {
    //render returns objects using helper methods to find items in the DoM
    render(<App />);
  });
  //HELPERS
  // it("renders hello world", () => {
  //   const helpers = render(<App />);
  //   console.log('helpers', helpers);
  // });
  it("renders hi world", () => {
    //for each getby there will be a query by
    const { getByText, queryByText } = render(<App />);
    // getByText('Hi World');
    queryByText(/hi world/i);
    //or (/hi world/i) to find the content, not the exact casing
  });
});
