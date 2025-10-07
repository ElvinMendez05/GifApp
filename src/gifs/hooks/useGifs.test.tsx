import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { act } from "react";
import * as gifsActions from "../actions/get-gifs-by-query.action";

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

     test('should return a list of gifs from cache', async()=> {
       const {result} = renderHook(()=> useGifs());
       
       await act(async() => {
           await result.current.handleTermsClicked('key')
       })

       vi.spyOn(gifsActions, 'getGifsByQuery').mockRejectedValue(
        new Error('This is a custom error')
       );

       expect(result.current.gifs.length).toBe(10);

        await act(async() => {
            await result.current.handleTermsClicked('key')
       })

       expect(result.current.gifs.length).toBe(10);      
    });

    // test('should return no more than 8 previous terms', async()=> {
    //    const {result} = renderHook(()=> useGifs());
    
    //    vi.spyOn(gifsActions, 'getGifsByQuery').mockResolvedValue([]);
       
    //     await act(async() => {
    //         await result.current.handleSearch('key1')
    //    })

    //     await act(async() => {
    //         await result.current.handleSearch('key2')
    //    })

    //     await act(async() => {
    //         await result.current.handleSearch('key3')
    //    })

    //     await act(async() => {
    //         await result.current.handleSearch('key4')
    //     })

    //     await act(async() => {
    //         await result.current.handleSearch('key5')
    //     })

    //     await act(async() => {
    //         await result.current.handleSearch('key6')
    //     })

    //     await act(async() => {
    //         await result.current.handleSearch('key7')
    //     })

    //     await act(async() => {
    //         await result.current.handleSearch('key8')
    //     })

    //     await act(async() => {
    //         await result.current.handleSearch('key9')
    //     })

    //    expect(result.current.previousTerms.length).toBe(8);    
    //    expect(result.current.previousTerms).toStrictEqual([
    //     'key1',
    //     'key2',
    //     'key3',
    //     'key4',
    //     'key5',
    //     'key6',
    //     'key7',
    //    ])
    });
    


