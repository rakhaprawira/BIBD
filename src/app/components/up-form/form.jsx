"use client"
import { useState } from "react"

const Form = () => {

    const [data, setData] = useState({
        url: "",
        title: "",
        deskripsi: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
// handleSubmit

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await fetch( process.env.PUBLIC_API , {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }
    const hasil = await res.json();
    alert('Data berhasil disimpan: ' + JSON.stringify(hasil));


    } catch (error) {
    console.error(error);
    alert('Terjadi kesalahan saat mengirim data');
    }


};

    return(
        <>
        
        <div>
            <form  className="flex flex-col" method="post">
                <input onChange={handleChange} type="text" name="url" placeholder="Url" />
                <input onChange={handleChange} type="text" name="title" placeholder="Judul" />
                <input onChange={handleChange} type="text" name="deskripsi" placeholder="Deskripsi" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
        </>
    )
}
export default Form