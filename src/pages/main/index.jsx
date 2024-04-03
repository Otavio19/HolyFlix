import { useEffect, useState } from 'react'
import style from './style.module.css'
import CardBook from '../../components/CardBook'
const Main = () =>{

    const URL = 'https://www.abibliadigital.com.br/api/books'
    const options = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgQXByIDAyIDIwMjQgMjE6MzA6NTEgR01UKzAwMDAuNjYwYjVhNGVhYzdjZjIwMDI4NmI5NjliIiwiaWF0IjoxNzEyMDkzNDUxfQ.68w_BVWrhfTMG4pNyu1ck_jX4WMZSldeAxa6SAOjYx0'
        }
    }
    
    const [ books, setBooks ] = useState()


    useEffect(()=>{

        const fetchBooks = async () =>{
            const response = await fetch(URL,options)
            const data = await response.json();
            setBooks(data)
            console.log(books)
        };

        fetchBooks()

    }, [])
    return(
        <>
        <section className={ style.sectionBooks}>
        {
            books && books.map(book => <CardBook titleCard = { book.name}/>)
        }
        </section>
        </>
    )
}

export default Main