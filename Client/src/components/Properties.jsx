import React from 'react'
import '../styles/properties.css'
import PropertyCard from './PropertyCard'
import image from '../img/Interior/pic3.jpg'
import image2 from '../img/Interior/pic2.jpg'
import image3 from '../img/Interior/pic7.jpg'
import image4 from '../img/Interior/pic4.jpg'
import image5 from '../img/Interior/pic1.jpg'
import image6 from '../img/Interior/pic8.jpg'

const properties =[
    {
    id:1,
    title: 'salvation army',
    cover:image2,
    rating: ''
},
{
    id:2,
    title: 'Mrs Phiri',
    cover:image3,
    rating: ''
},
{
    id:3,
    title: 'Mr kondwani',
    cover:image4,
    rating: ''
},
{
    id:4,
    title: 'newland',
    cover:image5,
    rating: ''
},
{
    id:5,
    title: 'Optiquest',
    cover:image6,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
{
    id:6,
    title: 'Jubilee park',
    cover:image,
    rating: ''
},
]

function Properties() {
  return (
    <div className='max-width mobile-container property-grid properties-section'>
    {properties.map((item)=>{
        return <> 
            <div className='property-titile'></div>
            <div className='property-grid'>
                <PropertyCard item={item}/>
            </div>
        </>
    })}  
    </div>
  )
}

export default Properties
