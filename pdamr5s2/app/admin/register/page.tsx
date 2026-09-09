"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    const [nama, setNama] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [customer_number, setCustomerNumber] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [service_id, setServiceId] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();
        // Implement registration logic here
        const url = '${BASE_API_URL}/admins';
        const payload = JSON.stringify({ nama, phone, username, password });
        try {
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                    'app-key': '757bdc7aa834d9e4e585bf6541c7e90891ee0e3b'
                },
            });
            const data = response.data;
            if (data.success) {
                toast(data.message, { hideProgressBar: true, containerId: `toastRegister`, type: "success", autoClose: 2000 });
                setTimeout(() => router.replace(`/admin/login`), 1000);
            } else {
                toast(data.message, { hideProgressBar: true, containerId: `toastRegister`, type: "warning" });
            }
        }catch (error) {
          
        }
        
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ToastContainer containerId={`toastRegister`} />
        <div className="w-3/6 p-8 bg-white rounded-2xl shadow-md ">
            <h1 className="text-2xl text-black font-bold mb-4">Admin Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Nama</label>
                    <input onChange={e=>setNama(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="Nama" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Address</label>
                    <input onChange={e=>setAddress(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="Address" />
                </div>
                 <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Customer Number</label>
                    <input onChange={e=>setCustomerNumber(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="Customer Number" />
                </div>
                 <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">service id</label>
                    <input onChange={e=>setServiceId(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="service_id" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Phone</label>
                    <input onChange={e=>setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="Phone" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input onChange={e=>setUsername(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="text" id="username" name="username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input onChange={e=>setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded text-black" type="password" id="password" name="password" />
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Register</button>
            </form>
            <div>
                <p className="mt-4 text-center text-gray-600">Sudah punya akun? <Link href="/admin/login" className="text-blue-500 hover:underline">Login disini</Link></p>
            </div>
        </div>
        
    </div>
  )
};
export default RegisterPage;