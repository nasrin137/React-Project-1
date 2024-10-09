import React from 'react'

function Footer() {
  return (
    <footer className='container pe-5 ps-5 footer-section d-flex gap-5 justify-content-between'>
        <p>
            <span className='fw-bold'>Privacy Policy</span>
            <span className='ps-4 fw-bold'>Term of Use</span>
            <span className='ps-4 opacity-80 Footer-CopyRight'>© 2021 All rights reserved</span>
        </p>
        <div className='d-flex gap-5'>
            <p className='d-flex gap-2'>
            <i class="bi bi-globe-americas"></i>
                <span className='Footer-Span'>English</span>
            </p>
            <p className='d-flex gap-2'>
            <i class="bi bi-three-dots"></i>
                <span className='Footer-Span'>USD</span>
            </p>
        </div>
    </footer>
  )
}

export default Footer