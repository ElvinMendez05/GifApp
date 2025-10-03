import { describe, expect, test } from "vitest";
import axiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";

import { giphySearchResponseMock } from "../../test/mocks/giphy.response.data";

describe('getGifsByQquery', ()=> {
    
    const mock = new axiosMockAdapter(giphyApi);
    
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

        expect(gifs.length).toBe(10);

        gifs.forEach((gif) => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        })
         
    })
})