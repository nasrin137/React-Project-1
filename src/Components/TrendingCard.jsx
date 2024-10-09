import React from 'react'
import {Button,Col,Row,Card} from "react-bootstrap";

const Trendings = [
    {
        img:"Image/TrendingImg1.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder Turbo",
        price:"$41,400",
    },
    {
        img:"Image/TrendingImg2.png",
        title:"2013 Subaru Forester Premium Plus",
        miles:"40 475 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder Turbo",
        price:"$22,500",
    },
    {
        img:"Image/TrendingImg3.png",
        title:"Used 2010 BMW X3 Sport package",
        miles:"20 850 Miles",
        transmission:"AWD",
        cylinders:"4-Cylinder",
        price:"$39,200",
    }
]
function TrendingCard() {
  return (
    <>
        <div className='container'>
            <h1 className='text-center fw-bold HeadingMargin'>Trending near you</h1>
            <Row className='d-flex justify-content-center'>
                {
                    Trendings.map((trending)=>(
                        <Col>
                        <Card style={{width:"22rem",border:"none"}}>
                        <Card.Img variant='top' src={trending.img}></Card.Img>
                        <Card.Body>
                            <Card.Title className='fs-6 fw-bold'>
                                {trending.title}
                            </Card.Title>
                            <Card.Text className='opacity-500 CardText'>
                                {trending.miles}
                            </Card.Text>
                            <Card.Text className='opacity-500 CardText'>
                                {trending.cylinders} . {trending.transmission}
                            </Card.Text>
                            <div className='d-flex flex-row gap-3'>
                                <Button variant='primary' className='fw-bold PriceBtn'>{trending.price}</Button>
                                <Button variant='secondary' className='fw-bold Bestseller'>Bestseller</Button>
                            </div>
                        </Card.Body>
                        </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    </>
  )
}

export default TrendingCard