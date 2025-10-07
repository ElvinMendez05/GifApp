import { useRef, useState } from "react"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"
import type { Gif } from "../interface/gif.interface"

 // const gifsCache: Record<string, Gif[]> = {}

export const useGifs = () => {
  
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])
    
    const gifsCache =  useRef<Record<string, Gif[]>>({}) 
       
    const handleTermsClicked = async(term: string) => {
           
          if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]) 
            return;
           }  
          
           const gifs = await getGifsByQuery(term)
           setGifs(gifs);
           gifsCache.current[term] = gifs;
       }
    
       const handleSearch = async (query: string) => {
          // 1. you need to become the query to lowercase and delete white space 
          query = query.trim().toLowerCase();
          // 2. Valid that query is not empty
         if (query.length === 0) return
         // 3. you need to avoid duplicate searches checking if it is the term already exist in previousTerms ( if it exist, don't do nothing )
          if (previousTerms.includes(query)) {
             return query;
          } 
          // 4. Update previousTerms adding the new term at the beginning and limiting to 8 elements, it can be an array of more 8 elements.
          setPreviousTerms([query, ...previousTerms].splice(0, 8))
    
          const gifs = await getGifsByQuery(query)
          setGifs(gifs);

          gifsCache.current[query] = gifs;
          console.log(gifsCache);
       }

    return {
        //Values
        gifs, 
        previousTerms,
        //Methods 
        handleTermsClicked,
        handleSearch,
  }
}
