import type { FC } from "react";

interface Props {
  searches: string[];
  onLabelClicked: (terms: string) => void; //This is a funtion with parameters
}

//This is a functional component, you need to use "FC<Pros>" and then import it 
export const PreviousSearches: FC<Props> = ({searches, onLabelClicked}) => {
  return (
    <div>
         <div className="previous-searches">
            <h2>previous searches</h2>
            <ul className="previous-searches-list"> 
                {searches.map((term) => (
                   <li key={term} onClick={() => onLabelClicked(term)}>{term}</li>
                ))}
            </ul>
         </div>
    </div>
  )
}
