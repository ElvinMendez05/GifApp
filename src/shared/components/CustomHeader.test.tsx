import {describe, expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('CustomHeader', () => { 

    const name = 'GifApp';
    const description = 'Search and find out the perfect gif';
    
    test('should render title correctly', ()=> {
         render(<CustomHeader name={name} />)
          screen.debug();

          //expect(screen.getByText(name)).toBeDefined();
    })

    test('should render description when provided', ()=> {
        
         render(<CustomHeader name={name} description={description} />)
          screen.debug();

          expect(screen.getByText(description)).toBeDefined()
          expect(screen.getByRole('paragraph')).toBeDefined()
          expect(screen.getByRole('paragraph').innerHTML).toBeDefined()
    })

     test('should render description when not provided', ()=> {
        
          const {container} = render(<CustomHeader name={name} />)
           
          const divElement = container.querySelector('.content-center'); 
          
          const h1 =  divElement?.querySelector('h1');
          expect(h1?.innerHTML).toBe(name);  

          //const p = divElement?.querySelector('p')
          //expect(p).toBeNull();
        })
})

 
      
