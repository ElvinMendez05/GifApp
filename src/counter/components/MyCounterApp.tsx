import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {
     
    //This is how to use custom hooks 
    const {counter, handleAdd, handleSubtract, handleReset} = useCounter()
   
    return (
    <div 
         style={{display:'flex', flexDirection:'column', alignItems:'center' }}>
         
         <h1>counter: {counter}</h1>
         
         <div style={{ display: 'display', gap: '20px'}}>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSubtract}>-1</button>
         </div>
        
    </div>
  )
}
