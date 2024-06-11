import {useState} from 'react'

export default function B9() {
    const [App, setApp] = useState([
        {theme: "Tối", language: "Tiếng Việt"},
        // {theme: "Sáng", language: "Tiếng Anh"}
    ])
  return (
    <div>
        {
            App.map((item, index) => {
                if (item.theme === "Tối") {
                    return <div style={{
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "bold",
                    }} key={index}>Nền: {item.theme} <p>Ngôn ngữ: {item.language}</p></div>
                }else{
                    return <div style={{
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bold"
                    }} key={index}>Nền: {item.theme} <p>Ngôn ngữ: {item.language}</p></div>
                }
            })
        }
    </div>
  )
}
