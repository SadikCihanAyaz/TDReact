
import react from 'react'
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from './index';

let container = null;
beforeAll(() => {

    container = document.createElement('div');
    document.body.appendChild(container)
})

afterAll(() => {
    unmountComponentAtNode(container)
    container.remove();
    container = null;
})

it('fetch test is written', async() => {
    const userFake = {
        name: 'cihan',
        surname: 'ayaz',
        address: 'london'
    }
    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(userFake)
    })
  );

    await act(async ()=> {
        render(<User id='123'/>, container)
    })

    expect(container.textContent).toContain(userFake.address)

})