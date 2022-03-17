



function Receipt4(props){
    const r4 = props.receipt
  
    return(
       <div>
           
           <div><h1>{r4.person}</h1>
        <p><span>Main:</span> {r4.order.main}</p>
        <p><span>Protein:</span> {r4.order.protein}</p>
        <p><span>Rice:</span> {r4.order.rice}</p>
        <p><span>Sauce:</span> {r4.order.sauce}</p>
        <p><span>Toppings:</span> {r4.order.toppings}</p>
        <p><span>Drink:</span> {r4.order.drink}</p>
        <p><span>Cost:</span> {r4.order.cost}</p>
        <p><span>Status:</span> Unpaid</p> </div>

       </div>
             
     
    )

}

export default Receipt4