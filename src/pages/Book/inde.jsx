import style from './style.module.css'
import App from '../../App'
import { useEffect, useState } from 'react'

const Book = () =>{

    const abbrev = 'gn'
    const URL = `https://www.abibliadigital.com.br/api/books/${abbrev}`
    const options = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgQXByIDAyIDIwMjQgMjE6MzA6NTEgR01UKzAwMDAuNjYwYjVhNGVhYzdjZjIwMDI4NmI5NjliIiwiaWF0IjoxNzEyMDkzNDUxfQ.68w_BVWrhfTMG4pNyu1ck_jX4WMZSldeAxa6SAOjYx0'
        }
    }

    const [ book, setBook ] = useState('Vazio')

    useEffect(()=>{
        const fetchBook = async () =>{
            const response = await fetch(URL,options)
            const data = await response.json()
            setBook(data)
            console.log(data)
        }

        fetchBook()
    }, [])

    let testament

    book.testament == 'VT'? testament = 'Velho Testamento' : testament = 'Novo Testamento'

    return (
        <div className={ style.bookBox }>
            <h1>{ book.name }</h1>
            <h3>Capitulos: 28</h3>
            <p>Autor: { book.author}</p>
            <p>{testament}</p>
        </div>
    )
}

export default Book