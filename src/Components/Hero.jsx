import  Carousel  from 'react-bootstrap/Carousel'

import React from 'react'

function Hero() {
  return (
    <>
    <Carousel data-bs-theme="dark" indicators={false} >
    <Carousel.Item>
        <div className='text-center HeroArea'>
            <p className='mt-5 BrandColor'>Meet Your New Car</p>
            <h1 className='font-weight-bold'>Honda Civic Type R</h1>
            <div className='HeroButton'>
            <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
            <button className='btn btn-primary font-weight-bold testDrive'>Test Drive</button>
            </div>
        </div>
        <div className='HeroImg'>
            <img className='d-block w-100' src="Image/hero-img.png" alt="" />
        </div>
      </Carousel.Item>
    <Carousel.Item>
        <div className='text-center HeroArea'>
            <p className='mt-5 BrandColor'>join Your New Car</p>
            <h1 className='font-weight-bold'>Toyota Civic Type R</h1>
            <div className='HeroButton'>
            <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
            <button className='btn btn-primary font-weight-bold testDrive'>Test Drive</button>
            </div>
        </div>
        <div className='HeroImg'>
            <img className='d-block w-100' src="Image/hero-img.png" alt="" />
        </div>
      </Carousel.Item>
    <Carousel.Item>
        <div className='text-center HeroArea'>
            <p className='mt-5 BrandColor'>Hire Your New Car</p>
            <h1 className='font-weight-bold'>Forda Civic Type R</h1>
            <div className='HeroButton'>
            <button className='btn btn-outline-secondary font-weight-bold me-3'>More Details</button>
            <button className='btn btn-primary font-weight-bold testDrive'>Test Drive</button>
            </div>
        </div>
        <div className='HeroImg'>
            <img className='d-block w-100' src="Image/hero-img.png" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Hero