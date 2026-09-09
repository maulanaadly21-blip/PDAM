import { Bill } from "@/types/bill"
import FormPayment from "./formPayment";


type Props = {
    bill?: Bill|undefined
}
const CardPayment = ({bill}:Props) =>{
    let bulanHUruf='';
    const changeKalender = (bulan:number|undefined) =>{
        switch(bulan){
            case 1 : 
                bulanHUruf="Januari"
                break
            case 2 :
                bulanHUruf="Februari"
                break
            case 3 :
                bulanHUruf="Maret"
                break
            case 4 :
                bulanHUruf="April"
                break
            case 5 :
                bulanHUruf="Mei"
                break
            case 6 :
                bulanHUruf="Juni"
                break
            case 7 :
                bulanHUruf="Juli"
                break
            case 8 :
                bulanHUruf="Agustus"
                break
            case 9 :
                bulanHUruf="September"
                break
            case 10 :
                bulanHUruf="Oktober"
                break
            case 11 :
                bulanHUruf="November"
                break
            case 12 :
                bulanHUruf="Desember"
                break
            default : bulanHUruf="salah bulan"
        }
        return bulanHUruf;
    }
    return (
        <>
            <div className=" my-2 border border-gray-300 rounded-md bg-white shadow-md">
                <div className={
                    (bill?.paid?`bg-green-500`:`bg-orange-500`) + ` w-full rounded-t-md p-2 text-white text-center`}>
                    <p>Status: 
                        {bill?.paid?'Lunas':
                            bill?.payments==null?'Belum Bayar':
                                bill?.payments.verified?'Sudah Konfirm':
                                    'Belum Konfirm'}
                    </p></div>
                <div className="p-2 text-center">
                    <h1 className="text-2xl font-bold mb-4 text-black">Tagihan: {changeKalender(bill?.month)} {bill?.year}</h1>  
                    <div className="text-xl bg-blue-200 p-2 rounded-md text-black">Jumlah Tagihan: Rp. {bill?.amount}</div>
                    <p className="text-black">jumlah Meteran: {bill?.measurement_number}</p>
                    <p className="text-black">penggunaan: {bill?.usage_value}</p>

                    {bill?.paid ?<p>dibayar pada {new Date(bill.payments?.createdAt||"").toLocaleDateString()}</p>
                    :
                    <FormPayment id={bill?.id} label="Bayar Sekarang" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>}

                </div>
            </div>
        </>
    )
}
export default CardPayment
