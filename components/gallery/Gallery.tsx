
import React from 'react'
import Card from '../card/Card'
import { datas } from "../../data/datadev"

const Gallery = () => {
    return (
        <div className='grid grid-cols-12 h-full'>
            <div className='col-span-2 border'>
                {/*filters*/}
                filtre
                <title>Webee-Hiver</title>
            </div>
            <div className='col-span-10'>
                <div className='grid grid-cols-12 gap-3'>
                    {datas.map((dev) => (
                        <div key={dev.id} className='col-span-3' >
                            <Card dev={dev} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Gallery