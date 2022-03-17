

function Receipt2 (props){
   
const r2 =props.Receipt2.receipt2

    return(
        <div className="receipt2">
        
        { r2.paid ? <div></div> :
         <div><h1>{r2.person}</h1>
        <p><span>Main:</span> {r2.order.main}</p>
        <p><span>Protein:</span> {r2.order.protein}</p>
        <p><span>Rice:</span> {r2.order.rice}</p>
        <p><span>Sauce:</span> {r2.order.sauce}</p>
        <p><span>Toppings:</span> {r2.order.toppings}</p>
        <p><span>Drink:</span> {r2.order.drink}</p>
        <p><span>Cost:</span> {r2.order.cost}</p>
        <p><span>Status:</span> Unpaid</p> </div>}
    </div>
    )


}

export default Receipt2