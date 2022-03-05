import react from 'react'
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Account from './index'

let container = null;
beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

})

afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it('account testing', async()=>{
/*
    act(()=>{
        render(<Account/> ,container)
    })

    expect(container.textContent).toBe('loading')

    const value = 'test'
    act(()=>{
        render(<Account list={value}/> ,container)
    })

    expect(container.text).toContain(value + 'sa')*/

    const account = {
        name: 'abdulkerim',
        prodCode: 'KTLM'
    }

    jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(account)
    })
  );

    await act(async()=> {
        render(<Account id={'12'} />, container)
    });

    expect(container.textContent).toContain(account.prodCode)




})
