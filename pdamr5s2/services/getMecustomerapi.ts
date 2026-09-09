import { getCookie } from "@/lib/client-cookie"
import { getServerCookie } from "@/lib/server-cookie";
import { Data } from "@/types/getMe";
import axios from "axios";

type ResponseData ={
    status: boolean
    message: string
    data?: Data
}

const GetMeApi = async (): Promise<ResponseData> => {
    try {
        const token = await getServerCookie("token");
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/customers/me`, {
            headers: {
                "Content-Type": "application/json",
                'app-key': '757bdc7aa834d9e4e585bf6541c7e90891ee0e3b',
                Authorization: `Bearer ${token}`
            }
        });
        const data= response.data;
        return{
            status:true,
            message: "User data fetched successfully",
            data: data.data       
        };
    } catch (error) {
        return{
            status:false,          
            message: "Failed to fetch user data",          
        };
    }
}
export default GetMeApi;