import react from 'react';
import { unmountComponentAtNode, render} from 'react-dom';
import { act } from 'react-dom/test-utils';
import War from './index'

let container = null;
beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('War test case is written', () => {
    act(() => {
        render(<War /> , container)
    })
    expect(container.textContent).toBe('War doesnt exist')

    act(() => {
        render(<War war='bahar' />, container)
    })
    expect(container.textContent).toBe('War exist!  bahar')
})