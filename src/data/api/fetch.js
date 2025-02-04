import { useEffect, useState } from "react"

const [data, setData] = useState([])
useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API)
    .then(res => {
        return res.json()
    })
    .then((data) => setData(data))
},[])

export default data