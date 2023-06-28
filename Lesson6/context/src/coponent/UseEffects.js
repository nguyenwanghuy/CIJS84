import React, { useState } from 'react'

// useEffect có 3 loại
// loại 1: useEffect(() => {}) k có deps
// => chạy mỗi khi render
// loại 2: useEffect(() => {},[]) có deps là 1 mảng rỗng
// => chỉ chạy lần đầu tiên khi Coponent được mout vào Dom
// loại 3: useEffect(() => {}, [state, props] có dép là 1 mảng chứa các giá trị
// => chỉ chạy khi bất khi deps nào thay đổi giá trị
function App() {
const [count,setCount] = useState(0)

 const UseEffects = () => {
  return (
    <div></div>
  )
}
}
export default UseEffects


