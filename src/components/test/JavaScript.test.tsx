import { render } from "@testing-library/react";
import JavaScript from "../JavaScript";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
test('first test ', () => { 
    const wrapper=render(
        <Router>
             <JavaScript/>
        </Router>
    )

    const fillIntheBank=wrapper.findAllByText('Fill the Blank')
    expect(fillIntheBank).toBeTruthy();
 })