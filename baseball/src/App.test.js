import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "react-testing-library";
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
    const { getByText, queryByText, debug } = render(<App />);
    //will break test on fail
    // getByText('Hi World');
    //will not break, will null instead
    // queryByText(/hi world/i);
    //add expect and .not(invert method)
    expect(queryByText(/hi world/i)).not.toBeNull();
    //or (/hi world/i) to find the content, not the exact casing
    //debugging shows how component is being rendered
    // debug();
  });
  it('welcoming greeting to the user', () => {
    //default method of testing and rendering
    const {getByText} = render(<App />)
    //fire event, method, element
    //define button
    const button = getByText(/ahoy there/i);
    fireEvent.click(button);
    //after even look for new state
    getByText(/ho there wanderer/i); 
  })
  it('goodbye greeting to the user', () => {
    //default method of testing and rendering
    const {getByText} = render(<App />)
    //fire event, method, element
    //define button
    const button = getByText(/departure/i);
    fireEvent.click(button);
    //after even look for new state
    getByText(/so long wanderer/i); 
  })
});
