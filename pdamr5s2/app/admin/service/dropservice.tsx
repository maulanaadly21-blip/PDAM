'use client'
import { useRouter } from 'next/navigation';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { DropService } from '@/services/service';


const DropServiceButton = ({serviceId}: {serviceId: number}) => {
    const router = useRouter()
    const handleDelete = async () => {
        confirmAlert({
            title: 'Confirm to delete', 
            message: 'Are you sure to delete this service?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await DropService(serviceId);
                        router.refresh()
                    }
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ]
        });
    }
    return (
        <div>
            <button onClick={() => handleDelete()} className="bg-red-500 text-white cursor-pointer hover:bg-red-700 px-2 py-1 rounded">
                Drop
            </button>
        </div>
    );
}
export default DropServiceButton
