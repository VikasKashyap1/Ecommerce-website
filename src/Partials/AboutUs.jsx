import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="container-fluid bg-light about pb-5">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="about-item-content bg-white rounded p-5 h-100">
                                <h4 className="text-primary">About Our GenStyle</h4>
                                <h1 className="display-4 mb-4">100% Original Products</h1>
                                <p>About Our 1234567890 one source for [Best Category]. We're dedicated to providing you the best of <u>Ecommerce</u>, with a focus on quality, customer service, and uniqueness."</p>
                               
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium recusandae eligendi modi hic</p>
                                <p>"At <strong>[GenStyle]</strong>, our mission is to make premium products accessible to everyone while maintaining the highest standards of customer satisfaction."</p>
                                <p>"Our team is made up of experienced professionals who are passionate about delivering the best possible shopping experience."</p>
                                <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>We can save your money.</p>
                                <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>we can deliver your oder </p>
                                <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3"></i>Upto 75% Off top products</p>
                                <Link className="btn btn-primary rounded-pill py-3 px-5 bg-success w-100" to="/contact">More Information</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                            <div className="bg-white rounded p-5 h-100">
                                <div className="row g-4 justify-content-center">
                                    <div className="col-12">
                                        <div className="rounded bg-light">
                                            <img src="img/about-2.avif" className="img-fluid rounded w-100" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">10000</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Top Products</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">1000</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Brands</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">10000</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Happy Customers</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item bg-light rounded p-3 h-100">
                                            <div className="counter-counting">
                                                <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">1000</span>
                                                <span className="h1 fw-bold text-primary">+</span>
                                            </div>
                                            <h4 className="mb-0 text-dark">Delivery Patners All over in india</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}