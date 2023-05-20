




let Table=({coins})=>{






    return(
        <>
         <table>
            <thead>
                <th>#</th>
                <th>Coin</th>
                <th>Icon</th>
                <th>Symbol</th>
                <th>Current Price</th>
                <th>Total Volume</th>
            </thead>
            <tbody>
                 {
            coins.map((coin,index) =>{
              return(
                <tr key={index}>


                <td>{index+1}</td>
                <td >{coin.name}</td>
                <td><img className="images" src={coin.image}></img></td>
                <td>{coin.symbol}</td>
                <td>${coin.current_price}</td>
                <td>${coin.total_volume}</td>
 
              </tr>)

            })
        }
            </tbody>
        </table>
        
        </>
    )
}

export default Table