import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  
   const {gifs, handleSearch, previousTerms, handleTermsClicked} = useGifs()   
  
   return (
    <> 
         {/* Header and Navbar */}
         <CustomHeader name={'GifsApp'} description={'Discoverd and share the perfect gif'}/>
         {/* Search */}  
          <SearchBar placeholder="Search your gifs" onQuery={handleSearch} />
         {/* previous searches */}
         <PreviousSearches searches={previousTerms} 
          onLabelClicked={handleTermsClicked}
         />
         {/* gifs container */}
         <GifsList gifs={gifs} />
    </>
  )
};
