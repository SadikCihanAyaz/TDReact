import react from 'react'
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Event from './index';

let container = null;
beforeAll(()=> {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('Evet testing', () => {
    const onChange = jest.fn();

    act(() => {
        render(<Event onChange={onChange}/>,container)
    })

    expect(container.textContent).toContain('Turn on');
})