import React from 'react'
import {Col,Row} from "react-bootstrap";
const reviews = [
    {
        img:"Image/review1.png",
        name:"2021 Cadillac Escalade",
        content:"The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
        user:{
            img:"Image/Oval.png",
            name:"Hironaka Hiroe",
            position:"Chief Editor",
            rating:"4.91",
            total:"98",
        }

    },
    {
        img:"Image/review2.png",
        name:"2021 Hyundai Elantra",
        content:"If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
        user:{
            img:"Image/Oval Copy.png",
            name:"Debashis Bhuiyan",
            position:"News Editor",
            rating:"4.65",
            total:"93",
        }

    },
    {
        img:"Image/review3.png",
        name:"2021 Mercedes-Benz GLA250",
        content:"The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
        user:{
            img:"Image/Oval Copy 2.png",
            name:"Lew Silverton",
            position:"Chief Editor",
            rating:"4.55",
            total:"35",
        }

    }
]
function Reviews() {
  return (
    <>
    <div className='review-section container'>
    <h1 className='text-center fw-bold mb-5'>Recent reviews</h1>

    <Row>
        {
            reviews.map((review,index)=>(
              <Col key={index} md={4}>
                <div className='card border-0 review-card' >
                <img src={review.img} className='card-img-top' alt="" />
                <div className='card-body'>
                    <h1 className='card-title fw-bolder' >{review.name}</h1>
                    <p className='card-text opacity-50'>{review.content}</p>
                    <div className='d-flex align-item-center me-3'>
                        <img src={review.user.img} alt="" className='rounded-circle me-3' />
                      <div className='flex-grow-1 '>
                      <h6 className='fw-bold mb-0'>{review.user.name}</h6>
                      <small className='text-muted'>{review.user.position}</small>
                      </div>
                      <div className='d-flex align-item-center'>
                        <span className='text-warning'>*</span>
                        <span className='fw-bold ms-1'>{review.user.rating}</span>
                        <span className='text-muted ms-2' >{review.user.total}</span>
                      </div>
                    </div>
                </div>
            </div>
              </Col>
            ))
        }

    </Row>

   

    </div>
    </>
  )
}

export default Reviews