import React from 'react'

export default function Loader(props) {
    const { withPagination } = props
    return (
        !withPagination ?
            <div style={{ width: "100vw", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="spinner-border" role="status"></div>
            </div > :
            <div style={{ height: "35vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="spinner-border" role="status">
                </div>
            </div>

    )
}
