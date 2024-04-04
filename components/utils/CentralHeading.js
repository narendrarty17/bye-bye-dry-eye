import React from 'react'

export default function CentralHeading(props) {
    return (
        <h2 className="pb-6 flex justify-center text-dark-gray text-3xl font-baskerville">
            {props.children}
        </h2>
    )
}
