import React, { useEffect, useState } from 'react';
import bg from "../img/HeaderGroup.svg"
import './HomeNew.css'
import FooterNew from "./FooterNew";
import Mishal from '../img/download10.jpg';
import Mahnoor from '../img/download.jpg';
import webdesigning from "../img/T1-Web.png"
import tshirtdesigning from "../img/T2-Tshirt.png"
import brandidentity from "../img/T3-Brand.png"
import packagingdesigning from "../img/T4-Packaging.png"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import  { RingLoader } from 'react-spinners';
// import { useNavigate } from 'react-router-dom';

const HomeNew = () => {

  const [loading, setLoading] = useState(false);

  const [counterOn, setCounterOn] = useState(false);

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.username);
      setShow(true);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      userHomePage()
    }, 3000)
  }, []);

  return (
    <div>
      {
        loading ?
          <RingLoader
            className="loader"
            color={"#147d6c"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :

          <div>
            {/* Header */}
            <div className='banner'>
              <div className='banner-text'>
                <div className='forBorder'>
                  <h1 className='customizable'>
                    Welcome
                    <span className='span2'>
                      {show ? '' : 'Guest'}
                      {userName}
                    </span>
                    !
                  </h1>
                </div>
                <hr className='simpleLine'></hr>
                <h1 className='customizableOne'>
                  <span className='roboto-normal-black-60px'>Customizable </span>
                  <span className='span1'>
                    Design.
                  </span>
                  <span className='roboto-normal-black-60px'>
                    <br />
                    At your service.
                  </span>
                </h1>
                <div className='para'>
                  <p>
                    We make it easy to work with professional designers, creative experts from
                    Australia to build your brand through custom, memorable design which have
                    lasting impact on your business.
                  </p>
                </div>
                {/* {usertype} */}
              </div>
              <div className='banner-image'>
                <img src={bg} alt="" className='img' />
              </div>
            </div>

            {/* Gets Started
      <section className="mt-5 mb-5 p-5" style="background-color:#d3d3d34d">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="apldg-title-area text-center">
                <div class="apldg-headline">
                  <h3 style="font-size: 50px;font-weight: bold;color: black;">Let's get <strong style="color: #0a7389;">started</strong></h3>
                </div>
              </div>
            </div>
          </div>
          <h1 class="text-center">hh</h1>
          <div class="row">
            <div class="col-lg-4 mx-auto">
              <div class="card">
                <div class="card-body text-center">
                  <img src={Started} class="w-50"/>

                    <h1 class="main_heading">I need a design created</h1>
                    <p>Get the perfect design for your budget from our creative community.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mx-auto">
              <div class="card">
                <div class="card-body text-center">
                  <img src="assets/img/download8.svg" class="w-50"/>

                    <h1 class="main_heading">I want to work</h1>
                    <p>Do you want to earn money, find unlimited clients and build your freelance career?</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section> */}

            {/* <Business /> */}
            <div className="BackImage-section">
              <div className="BI-background-trans">
                <div className="BI-quote-icon">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <div className="BI-quote">
                  <h2>A BUSINESS HAS TO BE INVOLVING, IT HAS TO BE FUN, AND IT HAS TO EXERCISE YOUR CREATIVE INSTINCTS. START WHERE YOU ARE. USE WHAT YOU HAVE. DO WHAT YOU CAN.</h2>
                </div>
                <div className="BI-quote-writer">
                  <h1>James Daniels</h1>
                </div>
              </div>
            </div>

            {/* <Trending /> */}
            <section className='TrendingSection'>
              <div className="trending-title">
                <h1>Our Design <strong>Services</strong></h1>
              </div>
              <div className="trending-container">
                <div className="trending-c">
                  <img className="t-c-img" src={tshirtdesigning} alt="" />
                  <p>Logo Design</p>
                </div>
                {/* <div className="hide">I am shown when someone hovers over the div above.</div> */}
                <div className="trending-c">
                  <img className="t-c-img" src={brandidentity} alt="" />
                  <p>Brand Identity</p>
                </div>
                <div className="trending-c">
                  <img className="t-c-img" src={webdesigning} alt="" />
                  <p>Web Design</p>
                </div>
                <div className="trending-c-last">
                  <img className="t-c-img" src={packagingdesigning} alt="" />
                  <p>Packaging Design</p>
                </div>
              </div>
            </section>

            {/* <Counters /> */}
            <div className="Counts-section">
              <div className="Counts-background-trans">
                <div className="Counts">
                  <ScrollTrigger className="Counts" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="Counts1">
                      <h1>{counterOn && <CountUp className="countup" start={0} end={200} duration={2} delay={0} />}</h1>
                      <h5>CONTESTS CREATED</h5>
                    </div>
                    <div className="Counts2">
                      <h1>{counterOn && <CountUp className="countup" start={0} end={999} duration={2} delay={0} />}</h1>
                      <h5>HAPPY CLIENTS</h5>
                    </div>
                    <div className="Counts3">
                      <h1>{counterOn && <CountUp className="countup" start={0} end={100} duration={2} delay={0} />}</h1>
                      <h5>CONTESTS CLOSED</h5>
                    </div>
                    <div className="Counts4">
                      <h1>{counterOn && <CountUp className="countup" start={0} end={450} duration={2} delay={0} />}</h1>
                      <h5>DESIGNS SUBMITTED</h5>
                    </div>
                  </ScrollTrigger>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <section className="testimonials-section">
              <div className='test-container'>
                <div className="test-heading">
                  <h1>Testimonial</h1>
                </div>
                <div className="test-columns">
                  <div className="test-columnOne">
                    <div className="test-columnOne-image">
                      <img className='image-mishal' src={Mishal} alt="" />
                    </div>
                    <div className="test-columnOne-name">
                      <h2>Mishal Bukhari</h2>
                    </div>
                    <div className="test-columnOne-text">
                      <p>It's really helped us grow.
                        I can keep all of client's requirements in there so if
                        I need to look up something in the future or call them for a follow up. An elegant theme for a website is worth its weight in gold.
                      </p>
                    </div>
                  </div>
                  <div className="test-columnTwo">
                    <div className="test-columnTwo-image">
                      <img className="image-mahnoor" src={Mahnoor} alt="" />
                    </div>
                    <div className="test-columnTwo-name">
                      <h2>Mahnoor Shaukat</h2>
                    </div>
                    <div className="test-columnTwo-text">
                      <p>It has changed the way I develop websites. Mam lets you create anything
                        you envision and it does it so easy and flawless.I have all of that there, so it's really helped us organize the whole organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <FooterNew />

          </div>
      }
    </div>
  );
}

export default HomeNew;