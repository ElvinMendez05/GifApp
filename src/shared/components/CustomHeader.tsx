interface Props {
    name: string;
    description?: string;
}

export const CustomHeader = ({name, description}: Props) => {
  return (
    <div>
         {/*Navbar*/}
         <div className="navbar">
         <div className="logo">
            🖼️ <span>GifApp</span>
         </div>
         <nav>
            <a href="#">🏠 Home</a>
         </nav>
         </div>

         {/* Header */}         
         <div className="content-center">
            <h1>{name}</h1>
            <p>{description}</p>
            {/* <p>Discoverd and share the perfect gif</p> */}
         </div>

    </div>
  )
}
