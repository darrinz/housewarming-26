"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Calculate number of tiles needed to cover viewport
    const tileSize = 100; // pixels
    const cols = Math.ceil(window.innerWidth / tileSize) + 1; // Add extra column
    const rows = Math.ceil(window.innerHeight / tileSize) + 1; // Add extra row
    const numTiles = cols * rows;

    const randomTiles = Array.from({ length: numTiles }, () =>
      Math.floor(Math.random() * 49)
    );
    setTiles(randomTiles);
  }, []);

  return (
    <>
      <div className="tiled-background">
        {tiles.map((tileNum, index) => (
          <div key={index} className="tile">
            <Image
              src={`/tiles/tile_${tileNum}.jpg`}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <div className="container">
      <h2 className='Author'>Darrin Zhou and Joseph Bogdan</h2>
      <p className='AuthorSub'>American, 2002, 2005</p>  
      <h1 className='Title'>Housewarming</h1>
      <p className='date'>Friday, October 2nd, 2026</p>
      <p className = 'Body'>3044 W. North Avenue, Unit B. 8 PM until late.</p>
      <p className='Sub'>Private Collection</p>
        
      </div>
    </>
  );
}
