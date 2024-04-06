import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import CardBook from '../../components/CardBook'
import Gênesis from '../../assets/img/Gênesis.jpg'
import Marcos from '../../assets/img/marcos1615-removebg.png'

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
        <>

            <main>
                <img src={ Marcos } alt="" />
            </main>

            <h1>Livros</h1>
            <section className={style.sectionBooks}>
                {
                    books && books.map((book,index ) =>
                        <Link to={`/book/${book.abbrev.pt}`} key={book.name}>
                            <CardBook
                                img={Gênesis}
                                backgroundImage={Gênesis}
                                titleCard={book.name}
                                abbrev={book.abbrev} 
                                index = {index+=1}/>
                        </Link>
                    )
                }
            </section >

            <h1>Velho Testamento</h1>
            <section className={style.sectionBooks}>
                {
                    books && books.map(book =>(

                        book.testament == 'VT'? 

                        <Link to={`/book/${book.abbrev.pt}`} key={book.name}>
                            <CardBook
                                img={Gênesis}
                                backgroundImage={Gênesis}
                                titleCard={book.name}
                                abbrev={book.abbrev} />
                        </Link> : false
                    )
                    )
                }
            </section >

            <h1>Novo Testamento</h1>
            <section className={style.sectionBooks}>
                {
                    books && books.map(book =>(

                        book.testament == 'NT'? 

                        <Link to={`/book/${book.abbrev.pt}`} key={book.name}>
                            <CardBook
                                img={Gênesis}
                                backgroundImage={Gênesis}
                                titleCard={book.name}
                                abbrev={book.abbrev} />
                        </Link> : false
                    )
                    )
                }
            </section >
        </>
    )
}

export default Main