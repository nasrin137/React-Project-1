import React from 'react'
import {Col,Row} from "react-bootstrap";
const BestSellingItems = [
    {
        img:"Image/bestCar1.png",
        name:"Subaru",
        price:"$40k"
    },
    {
        img:"Image/bestCar2.png",
        name:"Volkswagen",
        price:"$15k"
    },
    {
        img:"Image/bestCar3.png",
        name:"Toyota",
        price:"$27k"
    },
    {
        img:"Image/bestCar4.png",
        name:"Mercedes-Benz",
        price:"$60k"
    },
    {
        img:"Image/bestCar5.png",
        name:"Hyundai",
        price:"$30k"
    },
    {
        img:"Image/logo.png",
        name:"Infiniti",
        price:"$54k"
    }
]
function BestSelling() {
  return (
    <>
    <div className='container' style={{paddingTop:"86px"}}>
        <h1 className='text-center fw-bold mb-5'>Explore best selling car makes</h1>
        <Row className='d-flex justify-content-center' style={{paddingTop:"50px"}}>
            {
                BestSellingItems.map((item)=>(
                    <Col md={4} className='SellingCard'>
                    <div className='vw-add'>
                        <img src={item.img} alt="" className='vw-logo w-[100px]' />
                        <div>
                            <div className='vw-text'>{item.name}</div>
                            <div className='vw-price'>From {item.price}</div>
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

export default BestSelling