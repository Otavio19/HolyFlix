import style from './style.module.css'
import App from '../../App'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Book = () => {

    const { abbrev } = useParams()
    const URL = 'https://www.abibliadigital.com.br/api/books/' + abbrev
    const options = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgQXByIDAyIDIwMjQgMjE6MzA6NTEgR01UKzAwMDAuNjYwYjVhNGVhYzdjZjIwMDI4NmI5NjliIiwiaWF0IjoxNzEyMDkzNDUxfQ.68w_BVWrhfTMG4pNyu1ck_jX4WMZSldeAxa6SAOjYx0'
        }
    }

    const [book, setBook] = useState('Vazio')
    let chapters = []

    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch(URL, options)
            const data = await response.json()
            for(let i = 1 ; i <= data.chapters ; i++){
                chapters.push(i)
            }

            setBook(data)
        }

        fetchBook()
    }, [])

    let testament

    book.testament == 'VT' ? testament = 'Velho Testamento' : testament = 'Novo Testamento'

    return (
        <div className={style.bookBox}>
            <div className={ style.head }>
                <h3>Capitulos: { book.chapters }</h3>
                <p>Autor: {book.author}</p>
                <p className={ style.testamentBook }>{testament}</p>
                <h1>{book.name}</h1>
                
                    <Link to={`/verses/acf/${ abbrev }/1`}>
                        <button>
                            Ler
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default Book