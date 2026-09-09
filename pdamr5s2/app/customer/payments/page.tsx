import { BillByCustomer } from "@/services/bill"
import CardPayment from "./card"


const PaymentsPage = async() => {
    const billsCustomer = await BillByCustomer({page:1, quantity:1000})
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Payments Page</h1>    
            <p>Welcome to the Payments page!</p>
            <div className="grid grid-cols-3 gap-4">
                {billsCustomer.data && billsCustomer.data.map((bill)=>(
                    <CardPayment key={bill.id} bill={bill||undefined}/>
                ))}
            </div>
        </div>
    )
}
export default PaymentsPage
