import React from 'react'
import UseState from './components/useState/UseState'

export default function App() {
  return (
    <div>
      React Hook
      {/* 
        hook: mốc
        + react hook bản chất là những cái hàm, phương thức giúp cho function component có thể thực
        hiện các tính năng y hệt như class component
        + react hook được ra đời ở phiên bản react 16.8 (2016)
        + trước khi hook ra đời thì function component chỉ đơn giản là tạo ra các UI
        + hook ra đời giúp code ngắn gọn dễ dàng sử dụng hơn so với class component
        + dự án bây giờ đa phần sử dụng react hook
        + sau này đi làm vẫn có dự án dùng class (maintain-chỉnh sửa)
        + khi làm việc với class thì phải nắm lifecycle
        + react-hook chỉ áp dụng function component
        + khi làm việc với hook phải để ý đến đầu vào, đầu ra của các phương thức
        + các hook học:
          - useState
          - useEffect
          - useMemo
          - useCallback
          - useRef
          - useReducer
      */}
      <UseState></UseState>
    </div>
  )
}
