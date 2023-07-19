'use client'

import {useState} from 'react'
import styles from '@/app/page.module.css'
import {IoIosCreate} from 'react-icons/io'
import Link from 'next/link'


const Homework = ({homework, ident, check}) => {

    const [checked, setChecked] = useState(check)

    const checkear = async (e) =>{
        if(checked) setChecked(false)
        else setChecked(true)
        // check = !check
        // console.log(e.target.id)
        await fetch(`http://localhost:3000/api/tasks/${e.target.id}`, {
            method:'PUT'
        })
        
    }

    

    return (
        <div  className={styles.homework}>
            <div className={styles.checkDiv}>
                <button id={ident} onClick={(e)=> checkear(e)} className={checked ? styles.checked : styles.noChecked}></button>
            </div>
            <div className={styles.pHomework}>
                <p className={checked ? styles.hwChecked : styles.hwNoChecked}>{homework}</p>
            </div>
            <div className={styles.contEdit}>
              <Link href={`/editTask/${ident}`} >  <IoIosCreate size='20' color='aliceblue' cursor='pointer'/> </Link>
            </div>
        </div>
    )
}

export default Homework