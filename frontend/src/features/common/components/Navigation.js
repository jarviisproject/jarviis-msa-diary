import React from "react";
import { Link } from 'react-router-dom'

export default function Navigation() {
    return(<>
    <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/history">history</Link></li>
            <li><Link to="/dairy">dairy</Link></li>
            <li><Link to="/garden">garden</Link></li>
            <li><Link to="/goal">goal</Link></li>
            <li><Link to="/review">review</Link></li>
        </ul>
    </div>
    </>)
}