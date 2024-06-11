export default function Home() {
  return (
    <div>
        <>
  {/* Spinner Start */}
  <div
    id="spinner"
    className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-grow text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav
    className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
      <h1 className="mb-0 text-primary text-uppercase">
        <i className="fa fa-cut me-3" />
        HairCut
      </h1>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link">
          Service
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="price.html" className="dropdown-item">
              Pricing Plan
            </a>
            <a href="team.html" className="dropdown-item">
              Our Barber
            </a>
            <a href="open.html" className="dropdown-item">
              Working Hours
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
            <a href="404.html" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
      </div>
      <a
        href=""
        className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
      >
        Appointment
        <i className="fa fa-arrow-right ms-3" />
      </a>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Carousel Start */}
  <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div
      id="header-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
            <div className="mx-sm-5 px-5" style={{ maxWidth: 900 }}>
              <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                We Will Keep You An Awesome Look
              </h1>
              <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                <i className="fa fa-map-marker-alt text-primary me-3" />
                123 Street, New York, USA
              </h4>
              <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                <i className="fa fa-phone-alt text-primary me-3" />
                +012 345 67890
              </h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
          <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
            <div className="mx-sm-5 px-5" style={{ maxWidth: 900 }}>
              <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                Luxury Haircut at Affordable Price
              </h1>
              <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                <i className="fa fa-map-marker-alt text-primary me-3" />
                123 Street, New York, USA
              </h4>
              <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                <i className="fa fa-phone-alt text-primary me-3" />
                +012 345 67890
              </h4>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#header-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="d-flex flex-column">
            <img
              className="img-fluid w-75 align-self-end"
              src="img/about.jpg"
              alt=""
            />
            <div
              className="w-50 bg-secondary p-5"
              style={{ marginTop: "-25%" }}
            >
              <h1 className="text-uppercase text-primary mb-3">25 Years</h1>
              <h2 className="text-uppercase mb-0">Experience</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p className="d-inline-block bg-secondary text-primary py-1 px-4">
            About Us
          </p>
          <h1 className="text-uppercase mb-4">
            More Than Just A Haircut. Learn More About Us!
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="mb-4">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
            clita sit at, sed sit sanctus dolor eos.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="text-uppercase mb-3">Since 1990</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="text-uppercase mb-3">1000+ clients</h3>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Services
        </p>
        <h1 className="text-uppercase">What We Provide</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/haircut.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Haircut</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/beard-trim.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Beard Trim</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/mans-shave.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Mans Shave</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/hair-dyeing.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Hair Dyeing</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/mustache.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Mustache</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
            <div
              className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: 60, height: 60 }}
            >
              <img className="img-fluid" src="img/stacking.png" alt="" />
            </div>
            <div className="ps-4">
              <h3 className="text-uppercase mb-3">Stacking</h3>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam.
              </p>
              <span className="text-uppercase text-primary">From $15</span>
            </div>
            <a className="btn btn-square" href="">
              <i className="fa fa-plus text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Price Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
            <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
              Price &amp; Plan
            </p>
            <h1 className="text-uppercase mb-4">
              Check Out Our Barber Services And Prices
            </h1>
            <div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Haircut</h6>
                <span className="text-uppercase text-primary">$29.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Beard Trim</h6>
                <span className="text-uppercase text-primary">$35.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Mans Shave</h6>
                <span className="text-uppercase text-primary">$23.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Hair Dyeing</h6>
                <span className="text-uppercase text-primary">$19.00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Mustache</h6>
                <span className="text-uppercase text-primary">$15.00</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h6 className="text-uppercase mb-0">Stacking</h6>
                <span className="text-uppercase text-primary">$39.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100">
            <img className="img-fluid h-100" src="img/price.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Price End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Our Barber
        </p>
        <h1 className="text-uppercase">Meet Our Barber</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/team-1.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="bg-secondary text-center p-4">
              <h5 className="text-uppercase">Barber Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/team-2.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="bg-secondary text-center p-4">
              <h5 className="text-uppercase">Barber Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/team-3.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="bg-secondary text-center p-4">
              <h5 className="text-uppercase">Barber Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid" src="img/team-4.jpg" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="bg-secondary text-center p-4">
              <h5 className="text-uppercase">Barber Name</h5>
              <span className="text-primary">Designation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Working Hours Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="h-100">
            <img className="img-fluid h-100" src="img/open.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
            <p className="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">
              Working Hours
            </p>
            <h1 className="text-uppercase mb-4">
              Professional Barbers Are Waiting For You
            </h1>
            <div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Monday</h6>
                <span className="text-uppercase">09 AM - 09 PM</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Tuesday</h6>
                <span className="text-uppercase">09 AM - 09 PM</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Wednesday</h6>
                <span className="text-uppercase">09 AM - 09 PM</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Thursday</h6>
                <span className="text-uppercase">09 AM - 09 PM</span>
              </div>
              <div className="d-flex justify-content-between border-bottom py-2">
                <h6 className="text-uppercase mb-0">Friday</h6>
                <span className="text-uppercase">09 AM - 09 PM</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <h6 className="text-uppercase mb-0">Sat / Sun</h6>
                <span className="text-uppercase text-primary">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Working Hours End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <p className="d-inline-block bg-secondary text-primary py-1 px-4">
          Testimonial
        </p>
        <h1 className="text-uppercase">What Our Clients Say!</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-1.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-2.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
        <div
          className="testimonial-item text-center"
          data-dot="<img class='img-fluid' src='img/testimonial-3.jpg' alt=''>"
        >
          <h4 className="text-uppercase">Client Name</h4>
          <p className="text-primary">Profession</p>
          <span className="fs-5">
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo
            duo labore sed sed. Magna ut diam sit et amet stet eos sed clita
            erat magna elitr erat sit sit erat at rebum justo sea clita.
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Get In Touch</h4>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-map-marker-alt text-primary" />
            </div>
            <span>123 Street, New York, USA</span>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-phone-alt text-primary" />
            </div>
            <span>+012 345 67890</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="btn-square bg-dark flex-shrink-0 me-3">
              <span className="fa fa-envelope-open text-primary" />
            </div>
            <span>info@example.com</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Quick Links</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-uppercase mb-4">Newsletter</h4>
          <div className="position-relative mb-4">
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
          <div className="d-flex pt-1 m-n1">
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-lg-square btn-dark text-primary m-1" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="#">
              Your Site Name
            </a>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By{" "}
            <a className="border-bottom" href="https://htmlcodex.com">
              HTML Codex
            </a>
            <br />
            Distributed By:{" "}
            <a
              className="border-bottom"
              href="https://themewagon.com"
              target="_blank"
            >
              ThemeWagon
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

    </div>
  )
}
