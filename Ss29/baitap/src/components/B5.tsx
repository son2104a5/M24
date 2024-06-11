import { useState } from 'react'

export default function B5() {
    const [check] = useState<boolean>(true)
  return (
    <div>
        { check ? <button>Hiện</button>: <button>Ẩn</button>}
    </div>
  )
}
