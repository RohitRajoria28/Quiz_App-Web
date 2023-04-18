import { render } from "@testing-library/react";
import UserForm from "../UserForm";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
    const JavascriptText=await wrapper.findAllByText('JavaScript')
    expect(JavascriptText).toBeTruthy();

    const Reactjs=await wrapper.findAllByText('Reactjs')
    expect(Reactjs).toBeTruthy(); 
})
test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
     
    const Reactjs=await wrapper.findAllByText('Reactjs')
    expect(Reactjs).toBeTruthy(); 
})

test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
     
    const JAVA=await wrapper.findAllByText('JAVA')
    expect(JAVA).toBeTruthy(); 
})

test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
     
    const Name=await wrapper.findAllByText('Name:')
    expect(Name).toBeTruthy(); 
})


test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
     
    const Email=await wrapper.findAllByText('Email:')
    expect(Email).toBeTruthy(); 
})

test('function test', async () => { 
    const wrapper=render(
        <Router>
            <UserForm/>
        </Router>
     
    )
     
    const PhoneNumber=await wrapper.findAllByText('Phone Number:')
    expect(PhoneNumber).toBeTruthy(); 
})




test('should first', () => {
    expect(12).toBe(12);
})

