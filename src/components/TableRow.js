import React from 'react'

export default function TableRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.card}</td>
            <td>{props.phone}</td>
            <td>{props.problem}</td>
        </tr>
    )
}
