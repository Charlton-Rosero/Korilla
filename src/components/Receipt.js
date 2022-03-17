


function Receipt (props){
    const r1 = props.Receipt.receipt1

    return(
        
        <div className="receipt1">
           { r1.paid ? <div></div> :
         <div><h1>{r1.person}</h1>
        <p><span>Main:</span> {r1.order.main}</p>
        <p><span>Protein:</span> {r1.order.protein}</p>
        <p><span>Rice:</span> {r1.order.rice}</p>
        <p><span>Sauce:</span> {r1.order.sauce}</p>
        <p><span>Toppings:</span> {r1.order.toppings}</p>
        <p><span>Drink:</span> {r1.order.drink}</p>
        <p><span>Cost:</span> {r1.order.cost}</p>
        <p><span>Status:</span> Unpaid</p> </div>}
        </div>
    )
}
export default Receipt