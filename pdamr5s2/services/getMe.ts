import { APP_KEY } from "@/global";
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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/admins/me`, {
            headers: {
                "Content-Type": "application/json",
                'app-key': APP_KEY,
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