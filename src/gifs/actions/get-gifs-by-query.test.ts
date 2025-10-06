import { beforeEach, describe, expect, test, vi } from "vitest";
import axiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";

import { giphySearchResponseMock } from "../../test/mocks/giphy.response.data";

describe('getGifsByQquery', ()=> {
    
    let mock = new axiosMockAdapter(giphyApi);
    
    beforeEach(() => {
        // mock.reset();
        mock = new axiosMockAdapter(giphyApi);
    })
    // test('should return a list of gifs', async()=> {
    //     const gifs = await getGifsByQuery('lewis hamilton');
    //     const [gif1] = gifs;

    //     expect(gifs.length).toBe(10);

    //     expect(gif1).toStrictEqual({
    //         id: expect.any(String),
    //         height: expect.any(Number),
    //         with: expect.any(Number),
    //         title: expect.any(String),
    //         url: expect.any(String)
    //     })
    // })

    test('should return a list of gifs', async()=> {
        
        mock.onGet('/search').reply(200, giphySearchResponseMock);
        const gifs = await getGifsByQuery('f1');

        expect(gifs.length).toBe(25);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        })         
    })

    test('should return an empty list of gifs, if gif is empty', async()=> {
        
        //mock.onGet('/search').reply(200, giphySearchResponseMock);
        mock.restore();

        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);        
    })

    test('should handle error when the API returns an error', async()=> {
        
        //This is a spy from vi
        const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
        
        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Requiest'
            }});
     

        const gifs = await getGifsByQuery('the bear');

        expect(gifs.length).toBe(0); 
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toBeCalledTimes(1);
        expect(consoleErrorSpy).toBeCalledWith(expect.anything());       
    })

})
