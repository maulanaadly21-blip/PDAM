'use client'
import Modal from "@/components/modal"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { useRouter } from 'next/navigation'
import { UploadPayment } from "@/services/payment"

type PropsFormAdd = {
    id?: number
    label:string
    className:string
}

const FormPayment=({id, label, className}: PropsFormAdd)=>{
    const [isOpen, setIsOpen] = useState(false);
const [file, setFile] = useState<File|null>();
const router = useRouter()
const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!file) {
                toast("Please select a file", { hideProgressBar: true, containerId: `UploadID`, type: "error", autoClose: 3000 })
                return;
            }
            const formData = new FormData();
            formData.append("file", file)
            formData.append('bill_id', String(id))
            const response = await UploadPayment(formData);
            if(response.status){
                toast(response.message, { hideProgressBar: true, containerId: `UploadID`, type: "success", autoClose: 2000 })
                setIsOpen(false);
                router.refresh()
            } else {
                toast(response.message, { hideProgressBar: true, containerId: `UploadID`, type: "error", autoClose: 3000 })
            }
        };
return (
        <><button  onClick={() => setIsOpen(true)} className={`${className}`}>
                {label}
            </button>
            <ToastContainer  containerId={"UploadID"}/>
             <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Upload File ">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Upload Bukti Pembayaran
                        </label>
                        <input multiple={true} onChange={e=>setFile(e.target.files?.[0]||null)} type="file" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                            Save
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    )

    
}
export default FormPayment
