import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table"


let Coin= () =>{
    let[coinList,setCoinList]=useState([])

useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",{crossDomain:'true'})
.then(response => {
    console.log(response.data);
   setCoinList(response.data)
     })
.catch(error => console.log("error",error))

},[])




    return(
        <>
         <div>
           <h1>Crypto Currency</h1>
        </div>
        
      
<Table coins={coinList} />
        
        </>
       
    )
}


export default Coin