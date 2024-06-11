import { useEffect, useState } from "react"

export default function B8() {
    const [currentMonth] = useState<Date>(new Date())
    const month = currentMonth.getMonth() + 1
    const [season, setSeason] = useState<string>("")
    useEffect(()=>{
        setSeason(()=>{
            if (month >= 1 && month <= 3) {
                return 'Xuân';
              } else if (month >= 4 && month <= 6) {
                return 'Hạ';
              } else if (month >= 7 && month <= 9) {
                return 'Thu';
              } else {
                return 'Đông';
              }
        })
    }, [])
  return (
    <div>
        <p>Bây giờ là tháng: {currentMonth.getMonth() + 1}</p>
        <p>Mùa hiện tại: {season}</p>
    </div>
  )
}
