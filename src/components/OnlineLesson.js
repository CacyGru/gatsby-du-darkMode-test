import { Link } from 'gatsby'
import React from 'react'
import '../style/OnlineLesson.scss'

const OnlineLesson = () => {
    return (
     <Link className="circle" to="/unterricht">
    
        <div className="rotate">
            <h1>Online - Unterricht</h1>
        </div>
    
    </Link>   
    )
}

export default OnlineLesson
