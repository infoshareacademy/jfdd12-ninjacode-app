import React from 'react'

export function ViewFiler(props) {

    const {income, expenses } = props

    return (
        <div>
            <ul>
                <li>Rodzaj</li>
                <li>Kategoria</li>
                <li>Data</li>
                <li>Kwota</li>
        
            </ul>
        </div>
    )
}