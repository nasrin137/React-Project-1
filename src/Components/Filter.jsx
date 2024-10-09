import React from 'react'
const Type=()=>(
    <div className='d-flex justify-content-center align-items-center'>
        <label>
            <span className='fw-normal text-center filter-search-label'>Type</span>
            <select className='form-select filter-search-label fw-bold fs-6'>
                <option className='fw-bold fs-6'>Used Car</option>
                <option className='fw-bold fs-6'>New Car</option>
            </select>
        </label>
        <div className='vertical-line'>

        </div>
    </div>
)
const Make=()=>(
    <div className='d-flex justify-content-center align-items-center'>
        <label>
            <span className='fw-normal text-center filter-search-label'>Make</span>
            <select className='form-select filter-search-label fw-bold fs-6'>
                <option className='fw-bold fs-6'>Infinite</option>
                <option className='fw-bold fs-6'>One</option>
                <option className='fw-bold fs-6'>Two</option>
                <option className='fw-bold fs-6'>Three</option>
            </select>
        </label>
        <div className='vertical-line'>

        </div>
    </div>
)
const Year =()=>(
    <div className='d-flex justify-content-center align-items-center'>
    <label>
        <span className='fw-normal fs-7 text-center filter-search-label'>Year</span>
        <select className='form-select filter-search-select fw-bold fs-6 outline-none'>
            <option className='fw-bold fs-6'>2000</option>
            <option className='fw-bold fs-6'>2005</option>
            <option className='fw-bold fs-6'>2010</option>
            <option className='fw-bold fs-6'>2024</option>
        </select>
    </label>
    <div className='vertical-line'>

    </div>
</div>
)
const Model =()=>(
    <div className='d-flex justify-content-center align-items-center'>
    <label>
        <span className='fw-normal fs-7 text-center filter-search-label'>Model</span>
        <select className='form-select filter-search-select fw-bold fs-6 outline-none'>
            <option className='fw-bold fs-6' selected value="1">BMW XM</option>
            <option className='fw-bold fs-6' value="2">BMW X7</option>
            <option className='fw-bold fs-6' value="3">BMW X6</option>
            
        </select>
    </label>
    <div className='vertical-line'>

    </div>
</div>
)
const Price =()=>(
    <div className='d-flex justify-content-center align-items-center'>
    <label>
        <span className='fw-normal fs-7 text-center filter-search-label '>Price</span>
        <select className='form-select filter-search-select fw-bold fs-6 outline-none'>
            <option className='fw-bold fs-6' selected value="1">20000</option>
            <option className='fw-bold fs-6'  value="2">25000</option>
            <option className='fw-bold fs-6'  value="3">35000</option>
        </select>
    </label>
</div>
)
function Filter() {
  return (
    <>
        <section>
            <h1 className='text-center fw-bold fs-2 filter-search-section-title'>Which vehicles you are looking for?</h1>
            <div className='d-flex justify-content-center align-items-center filter-search-box'>
                <Type></Type>
                <Make></Make>
                <Year></Year>
                <Model></Model>
                <Price></Price>

                <button className='btn btn-primary search-btn'>
                <i className="bi bi-search"></i>Search</button>
            </div>
        </section>
    </>
  )
}

export default Filter