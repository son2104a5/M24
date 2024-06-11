import React, { memo } from 'react'

interface Props{
  count: number;
  increase: Function
}

function Memo(prop: Props) {
  console.log("component Memo được gọi");
  
  return (
    <div>
        {/* 
        + HOC: higher order component - hàm bậc cao trong JS
        + sẽ đi kiểm tra xem có prop nào thay đổi hay không
          - nếu props(giá trị truyền vào từ cha xuống con) thay đổi thì component sẽ render
          - nếu props không thay đổi thì component sẽ không render
        + chỉ cần 1 props thay đổi thì component sẽ được render theo
        */}
    </div>
  )
}
export default memo(Memo)