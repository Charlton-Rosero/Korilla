
function Receipt3 (props){
   const r3 = props.Receipt3.receipt3

    return(
        <div className="receipt3">
           { r3.paid ? <div></div> :
         <div><h1>{r3.person}</h1>
        <p><span>Main:</span> {r3.order.main}</p>
        <p><span>Protein:</span> {r3.order.protein}</p>
        <p><span>Rice:</span> {r3.order.rice}</p>
        <p><span>Sauce:</span> {r3.order.sauce}</p>
        <p><span>Toppings:</span> {r3.order.toppings}</p>
        <p><span>Drink:</span> {r3.order.drink}</p>
        <p><span>Cost:</span> {r3.order.cost}</p>
        <p><span>Status:</span> Unpaid</p> </div>}
        </div>
    )
}
export default Receipt3