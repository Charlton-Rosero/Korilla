import receipts from "../ReceiptData2";
import Receipt4 from "./Receipt4";
import { useState } from 'react'




function Main(){
    const [r4, setReceipt4] = useState(receipts)

    return(
        <div>
            {
                receipts.map((r4, index) =>{
                    return <Receipt4 receipt={r4} key={index} />
                })
            }
        </div>
    )

}

export default Main