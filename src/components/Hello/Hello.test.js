import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Hello from './index';


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

it('Testing Hello.js', () => {
    act(() => {
        render(<Hello />, container);
      });
      expect(container.textContent).toBe("Hey, stranger");

      act( () => {
        render(<Hello name="Cihan"/> ,container)
      }
      )
      expect(container.textContent).toBe("Hello, Cihan!")

      act( () => {
          render(<Hello name="Cinobili"/>, container);
      })

      expect(container.textContent).toBe("Hello, Cinobili!")


} )