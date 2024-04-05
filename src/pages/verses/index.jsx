import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

import style from './style.module.css'
import Verse from "../../components/verse"

const Verses = () => {

    const { abbrevUrl, chapterUrl } = useParams()

    const URL = `https://www.abibliadigital.com.br/api/verses/acf/${abbrevUrl}/${chapterUrl}`
    const options = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUdWUgQXByIDAyIDIwMjQgMjE6MzA6NTEgR01UKzAwMDAuNjYwYjVhNGVhYzdjZjIwMDI4NmI5NjliIiwiaWF0IjoxNzEyMDkzNDUxfQ.68w_BVWrhfTMG4pNyu1ck_jX4WMZSldeAxa6SAOjYx0'
        }
    }

    const [chapter, setChapter] = useState([])
    const [ title, setTitle ] = useState()
    useEffect(() => {
        const fetchChapter = async () => {
            const response = await fetch(URL, options)
            const data = await response.json()
            setChapter(data)
            setTitle(data.book.name)
        }

        fetchChapter()
    }, [])

    return (
        <section className={style.page}>
                
            <h1>{ title } : { chapterUrl }</h1>
                {
                    chapter.verses && chapter.verses.map(verse => (
                        <Verse
                            key={verse.number}
                            number={verse.number}
                            text={verse.text}
                        />
                    ))
                }

            <Link onClick={window.location.reload} to={`/verses/acf/${abbrevUrl}/${parseInt(chapterUrl) + 1}`}>
                <button>
                    Próximo
                </button>
            </Link>
            {
                chapterUrl > 1 ? <Link onClick={window.location.reload} to={`/verses/acf/${abbrevUrl}/${parseInt(chapterUrl) - 1}`}>
                    <button>
                        Anterior
                    </button>
                </Link> : false
            }

        </section>
    )
}

export default Verses