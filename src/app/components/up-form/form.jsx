"use client"
import { useState } from "react"

const Form = () => {

    const [data, setData] = useState({
        url: "",
        title: "",
        deskripsi: "",
        provider: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
// handleSubmit

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Mengirim data ke API menggunakan fetch
        const response = await fetch( "https://6634be239bb0df2359a29552.mockapi.io/data/video", {
        method: 'POST', // Metode HTTP
        headers: {
            'Content-Type': 'application/json', // Tipe konten yang dikirim
        },
          body: JSON.stringify(data), // Mengubah data menjadi JSON
        }).then(() => {
            alert("berhasil")
        });
    
        // Mengecek apakah respons dari API sukses
        if (!response.ok) {
        throw new Error('Gagal mengirim data ke API');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}
;

    return(
        <>
        
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col" method="post">
                <input onChange={handleChange} type="text" name="url" placeholder="Url" />
                {/* <Input /> */}
                <input onChange={handleChange} type="text" name="title" placeholder="Judul" />
                <input onChange={handleChange} type="text" name="deskripsi" placeholder="Deskripsi" />
                <input onChange={handleChange} type="text" name="provider" placeholder="Provider" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
        </>
    )
}
export default Form