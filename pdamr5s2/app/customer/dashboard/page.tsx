
import  getMecustomerapi from "@/services/getMecustomerapi"
import { redirect } from "next/navigation"

const DashboardPage = async () => {
  let name = "";
  let role = "";
  const response = await getMecustomerapi()
  if (!response.status){
    redirect('/customer/login')
  } else {
    name = response.data?.name||'';
    role = response.data?.user.role||'';
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customer Dashboard</h1>
      <p>Welcome to the Customer Dashboard</p>
      <div className="border border-gray-500 rounded-md p-2">
        <div>Nama Anda</div>
        <div>{name}</div>
        <div>Role Anda</div>
        <div>{role}</div>
      </div>
    </div>
  )
}

export default DashboardPage  