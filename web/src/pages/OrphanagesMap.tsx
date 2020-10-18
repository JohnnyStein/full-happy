import React from 'react';
import { Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
        <link rel="icon" href="../src/images/logo.svg" />
            <aside>
                <header>
                        <img src={mapMarkerImg} alt="header" />

                        <h2>
                            Escolha um orfanato no mapa.
                        </h2>
                        <p>
                            Muitas crianças estão esperando a sua visita. :)
                        </p>
                </header>

                <footer>
                    <strong>São Paulo,</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
            center={[-23.6879654,-46.6801928]}
            zoom={15}
            style={{ width: '100%', height:'100%'}}
            >
{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"  /> */ }
        <TileLayer 
    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                </Map>

                <div></div>

                <Link to="/" className="create-orphanage">
                    <FiPlus size={32} color="#FFF" /> 
                </Link>
        </div>
            
    )
}

export default OrphanagesMap;