import React from 'react';
import Body from '../Body';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from "react-dom";


describe("This suit is to test the Body component", ()=>{
    test('Snapshot of Body', () => {
        const {asFragment} = render(<Body title="hello world"/>);
        expect(asFragment()).toMatchSnapshot()
    });
    test("finding title", ()=>{
        const {getByText} = render(<Body title="Jay Rocks"/>);
        expect(getByText("Jay Rocks")).toBeInTheDocument("Jay Rocks")
    })
    test("finding title with test ID", () => {
        const {getByTestId} = render(<Body title="Jay Rocks"/>);
        expect(getByTestId("title2")).toHaveTextContent("Jay Rocks");
    })
    test("check Counter initial value", ()=>{
        const {getByTestId} = render(<Body title="Jay Rocks"/>);
        expect(getByTestId("counter")).toHaveTextContent("0")
    })
    test("check Counter value after a tap", ()=>{
        const {getByTestId} = render(<Body title="I Love Kavinie"/>);
        const button = getByTestId("button5");
        userEvent.click(button)
        expect(getByTestId("counter")).toHaveTextContent("1")
    })
    test("control new system", () => {
       
    })
})