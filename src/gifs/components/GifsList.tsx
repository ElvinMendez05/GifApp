import type {FC} from 'react';
import type {Gif} from '../interface/gif.interface' 

interface Props {
    gifs: Gif[];
    
}
//This is a functional component, you need to use "FC<Pros>" and then import it 
export const GifsList: FC<Props>= ({gifs}) => {  
    return (
    <div className="gifs-container">
        {gifs.map((gif) => (
            <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
                {gif.width} x {gif.height} (1.5mb)
            </p>
         </div>
        ))}
    </div>
  )
}
