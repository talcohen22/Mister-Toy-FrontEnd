import GoogleMapReact from 'google-map-react'
import React, { useState } from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export function About() {

    const [coordinates, setCoordinates] = useState({ lat: 32.109333, lng: 34.855499 })
    const zoom = 11


    function handleClick({ lat, lng }) {
        setCoordinates({ lat, lng })
    }

    function onSetCoordinates(lat, lng){
        setCoordinates({lat, lng})
    }

    return (

        <section className="about" style={{ height: '100vh', width: '100%' }}>
            <button onClick={() => onSetCoordinates(32.109333, 34.855499)}>Tel Aviv</button>
            <button onClick={() => onSetCoordinates(32.434046, 34.919652)}>Hadera</button>
            <button onClick={() => onSetCoordinates(32.017136, 34.745441)}>Bat Yam</button>
             <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                center={coordinates}
                defaultZoom={zoom}
                onClick={handleClick}
            >
                <AnyReactComponent
                    {...{ lat: 32.109333, lng: 34.855499 }}
                    text="🚩🚩🚩"
                />
                <AnyReactComponent
                    {...{lat:32.434046, lng: 34.919652}}
                    text="🚩🚩🚩"
                />
                <AnyReactComponent
                    {...{lat:32.017136, lng: 34.745441}}
                    text="🚩🚩🚩"
                />
            </GoogleMapReact>
        </section>
    )
}

// AIzaSyCdNsu9gl8rInBWpqvli1Ha6gvp2BYXhIU
//AIzaSyD6aExXV0pAufVbOWDklotTYXRcme2-r_0