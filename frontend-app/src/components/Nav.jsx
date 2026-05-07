 
const Nav=()=>{
    return(
       <nav style={{backgroundcolor:"blue",height:"90px"}}>
        <ol style={ListStylings.orderedList}>
            <li style={ListStylings.List}>home</li>
            <li style={ListStylings.List}>Login</li>
            <li style={ListStylings.List}>About</li>
            <li style={ListStylings.List}>register</li>
        </ol>
       </nav>
    )
}
const ListStylings={
   List:{
      backgroundColor:"magenta",
      fontStyle:"italic",
      fontSize:"22px",
      padding:"5px 5px",
      fontWeight:"bold",
      listStyle:"none",
      borderRadius:"20px",
      boxShadow:"5px 5px 5px black",
   } ,
   orderedList:{
            display:"flex",
            justifyContent:"space-evenly",
            alignItems:"center",
            height:"80px",
           border:"5px solid grey",
            backgroundColor:"grey",
           padding:"10px 30px"
            
   }
}


export default Nav;


