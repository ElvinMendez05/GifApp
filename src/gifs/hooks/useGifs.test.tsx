import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";

describe('useGifs', ()=> {
    
    test('should return defaul values and methods', ()=> {
        const {result} = renderHook(()=> useGifs())
        
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleTermsClicked).toBeDefined();
    
    })

    test('should return a list of gifs', async()=> {
       const {result } = renderHook(()=> useGifs());
       
       await act(async() => {
        await result.current.handleSearch('key')
       })

       expect(result.current.gifs.length).toBe(10);
      
    });

    test('should return a list of gifs when handleTermsClicked is called', async()=> {
       const {result } = renderHook(()=> useGifs());
       
       await act(async() => {
        await result.current.handleTermsClicked('key')
       })

       expect(result.current.gifs.length).toBe(10);
      
    });


})