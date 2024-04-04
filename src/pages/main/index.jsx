import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import CardBook from '../../components/CardBook'
const Main = () => {

    const URL = 'https://www.abibliadigital.com.br/api/books'
    const options = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgQXByIDAyIDIwMjQgMjE6MzA6NTEgR01UKzAwMDAuNjYwYjVhNGVhYzdjZjIwMDI4NmI5NjliIiwiaWF0IjoxNzEyMDkzNDUxfQ.68w_BVWrhfTMG4pNyu1ck_jX4WMZSldeAxa6SAOjYx0'
        }
    }

    const [books, setBooks] = useState()


    useEffect(() => {

        const fetchBooks = async () => {
            const response = await fetch(URL, options)
            const data = await response.json();
            setBooks(data)
        };

        fetchBooks()
    }, [])
    return (
        <section className={style.sectionBooks}>
            {
                books && books.map(book =>
                    <Link to={`/book/${book.abbrev.pt}`} key={book.name}>
                        <CardBook
                            titleCard={book.name}
                            abbrev={book.abbrev} />
                    </Link>
                )
            }
        </section >
    )
}

export default Main