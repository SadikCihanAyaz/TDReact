import react from 'react';

import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TestContent from './index';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('TestContent testing progress', () => {

    act(() => {
        render(<TestContent />, container)
    })
    expect(container.textContent).toBe('TestContent1')

})