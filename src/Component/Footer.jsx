import React from 'react'

export default function Footer() {
  return (
    <>


      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text-light mb-0">Ukart</h1>
                  <p className="text-light mb-0">Latest Fashion</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                  <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: "0" }}>Subscribe Now</button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a className="btn  btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light me-2 btn-md-square rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-outline-light btn-md-square rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why People Like us!</h4>
                <p className="mb-4 text-light">typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Bottom Menu</h4>
                <a className="btn-link text-light" href="/">Home</a>
                <a className="btn-link text-light" href="/shop">Shop</a>
                <a className="btn-link text-light" href="/contact">Contact</a>
                <a className="btn-link text-light" href="/testimonial">Testimonial</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Quick Links</h4>
                <a className="btn-link text-light" href="">Privacy Policy</a>
                <a className="btn-link text-light" href="">Terms & Conditions</a>
                <a className="btn-link text-light" href="">Refund Policy</a>
                <a className="btn-link text-light" href="">FAQ</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item text-light">
                <h4 className="text-light mb-3">Contact</h4>
                <p>Address: A-47, sector-52, Noida</p>
                <p>Email : <a href="mailto:abhi2032001@gmail.com">abhi2032001@gmail.com</a></p>
                <p>Phone : <a href='tel:+91 9318387104'>+91 9318387104</a></p>
                <p>Whatsapp : <a href='https://wa.me/+91 9318387104'>+91 9318387104</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2"></i>Ukart.com</a>, All right reserved.</span>
            </div>
            {/* <div className="col-md-6 my-auto text-center text-md-end text-white"> */}
              {/* <!-- This template is free as long as you keep the below author’s credit link/attribution link/backlink. --> */}
              {/* <!-- If you'd like to use the template without the below author’s credit link/attribution link/backlink, --> */}
              {/* <!-- you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". --> */}
              {/* Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}



      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  )
}
