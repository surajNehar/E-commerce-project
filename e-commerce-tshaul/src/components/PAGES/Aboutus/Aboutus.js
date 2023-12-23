import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './Aboutus.css'
import Footer from '../../Footer/Footer'

const Aboutus = () => {
  return (
    <>
    <div className='nav-section'>
      <Navbar/>
    </div>
    <div className='main-about-page'>
      <div className='head-section'>
      <h1 className='heading-about'>About Us</h1>
      </div>

      <div className='welcome-section'>
        <p>Welcome to T-shirt Haul, where passion meets fashion! We're more than just a t-shirt brand - <br/>we're a community of style enthusiasts, creators, and dreamers  who believe in the power of self-expression through clothing.</p>
        
      </div>

      <div className='story-section'>
        <div className='story-text'>
          <h2>Ours Story : </h2>
          <p className='story-para'>At T-s haul, our journey began with a simple idea: to redefine the way people connect with their wardrobes. Founded in [Year], our story is one of creativity, perseverance, and a love for exceptional design. What started as a dream has evolved into a brand that celebrates individuality and embraces the artistry of wearable expression.</p>
        </div>

        <div className='story-image'>
          <img src='https://img.freepik.com/free-photo/tailoring-processs_1098-17986.jpg?w=996&t=st=1703187646~exp=1703188246~hmac=6991c348588292654bcaf6a8335ebfbe5f4e841b11113b0678ed6e88fc7819e5' alt='img' height={350} width={600}/>
        </div>
      </div>

      <div className='drive-section'>
        <div className='drive-image'>
          <img src='https://img.freepik.com/free-vector/hand-drawn-sustainable-fashion-illustration_52683-54763.jpg?w=996&t=st=1703190116~exp=1703190716~hmac=2b2770d3aca34bff3267a2fdfd0f47a3c444185a2d68beedcceabf23af8d4c38' alt='img' height={350} width={600}/>
        </div>
        <div className='drive-text'>
          <h2>What Drives Us: </h2>
          <p className='drive-para'>We're driven by the belief that every t-shirt tells a story. Each design is a canvas for self-expression, a unique statement that reflects your personality, passions, and experiences. Our mission is to empower you to wear your story proudly, whether it's a bold graphic tee or a subtle, sophisticated design.</p>
        </div>

      </div>

      <div className='quality-section'>
        <div className='quality-text'>
          <h2>Quality and Craftsmanship: </h2>
          <p className='quality-para'>We take pride in the quality and craftsmanship of our t-shirts. From the selection of premium fabrics to the meticulous attention to detail in every stitch, our commitment to excellence ensures that each garment is not just a piece of clothing but a work of art. Our t-shirts are designed to be comfortable, stylish, and a true reflection of your individual style.</p>
        </div>

        <div className='quality-image'>
          <img src='https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575383.jpg?w=996&t=st=1703190086~exp=1703190686~hmac=16cf285c756f53af06dfb18821f9ec2b1b384a32890cf5cdde81e41038fc12a5' alt='img' height={350} width={600}/>
        </div>
      </div>

      <div className='sustain-section'>
        <div className='sustain-image'>
          <img src='https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?w=996&t=st=1703189987~exp=1703190587~hmac=225c7943aa09b646517b0477b387958838d2a8dca62f439859e8e9f4c7fe259f' alt='img' height={350} width={600}/>
        </div>
        <div className='sustain-text'>
          <h2>Sustainability Matters:</h2>
          <p className='sustain-para'>At [Your Brand Name], we understand the importance of responsible fashion. We are dedicated to making conscious choices that benefit both our customers and the planet. Our commitment to sustainability is reflected in our use of eco-friendly materials and ethical production practices.</p>
        </div>

      </div>
        

    </div>
    <Footer/>
    </>
  )
}

export default Aboutus