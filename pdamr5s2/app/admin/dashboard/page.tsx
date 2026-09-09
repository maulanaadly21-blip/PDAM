
import  GetMeApi from "@/services/getMe"
import { Data,getMe } from "@/types/getMe"
import { redirect } from "next/navigation"

const DashboardPage = async () => {
  let name = "";
  let role = "";
  const response = await GetMeApi()
  if (!response.status){
    redirect('/admin/login')
  } else {
    name = response.data?.name||'';
    role = response.data?.user.role||'';
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard</p>
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