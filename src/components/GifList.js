import React from 'react'

export default function GifList(props) {
    return (
        <div>
            <ul>
                <li><img src={props.src1} alt="" /></li>
                <li><img src={props.src2} alt="" /></li>
                <li><img src={props.src3} alt="" /></li>
            </ul>
        </div>
    )
}