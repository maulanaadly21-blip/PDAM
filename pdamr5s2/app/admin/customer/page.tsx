'use server'
import { DropCustomer, GetCustomerApi } from "@/services/customer";
import FormCustomer from "./formCustomer";
import { GetService } from "@/services/service";
import DropCustomerButton from "./dropCustomer";
import Searching from "./searching";
import Pagination from "@/components/pagination";

type Props = {
    searchParams: Promise<{
        page?: number
        quantity?: number
        search?: string
    }>
}
    
const CustomerPage = async (prop:Props) => {
    const searchParams = await prop.searchParams;
    const {page = 1, quantity = 10, search = ""} = searchParams;
    const response = await GetCustomerApi({page,quantity,search});
    const serviceList = await GetService();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Customer Page</h1>
            <p>Welcome to the customer page!</p>
            <FormCustomer label="Tambah Customer" className="bg-blue-500 text-white px-4 p-2 rounded
             mb-4" serviceList={serviceList.data || undefined}/>
             <Searching search={search} />
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-700">
                        <th className="border border-gray-300 p-2 ">Customer Number</th>
                        <th className="border border-gray-300 p-2 ">Name</th>
                        <th className="border border-gray-300 p-2 ">Phone</th>
                        <th className="border border-gray-300 p-2 ">Address</th>
                        <th className="border border-gray-300 p-2 ">Service Name</th>
                        <th className="border border-gray-300 p-2 ">Username</th>
                        <th className="border border-gray-300 p-2 ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {response.data && response.data.map((customer) => (
                        <tr key={customer.id}>
                            <td className="border border-gray-300 p-2">{customer.customer_number}</td>
                            <td className="border border-gray-300 p-2">{customer.name}</td>
                            <td className="border border-gray-300 p-2">{customer.phone}</td>
                            <td className="border border-gray-300 p-2">{customer.address}</td>
                            <td className="border border-gray-300 p-2">{customer.service.name}</td>
                            <td className="border border-gray-300 p-2">{customer.user.username}</td>
                            <td className="border border-gray-300 p-2">
                                <div className="flex flex-row gap-2">
                                    <FormCustomer label="Edit" id={customer.id} formData={customer}
                                        className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700
                                        px-2 py-1 rounded" serviceList={serviceList.data || undefined}/>
                                    <DropCustomerButton customerId={customer.id} />  
                                    
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={page} count={response.count||0} perPage={quantity}
            colorActive="bg-slate-800" colorPage="bg-slate-500" optionPerPage={[10, 50, 100,1000]}
            id=""/>
            </div>
    )
}
export default CustomerPage;