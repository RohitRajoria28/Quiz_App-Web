import { render } from "@testing-library/react";
import Utils from "../Utils";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
test('Util test', () => { 
    let wrapper=render(
        <Router>
            
                <Utils />
            
        </Router>
    )

    const Util=wrapper.findAllByText('Utils')
    expect(Util).toBeTruthy();
 })