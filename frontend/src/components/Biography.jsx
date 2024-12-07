import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>About Us</p>
        <h3>Who We Are</h3>
        <p>
        SM Healthcare is a renowned healthcare provider focused on delivering 
        high-quality, compassionate medical services. Our mission is to enhance 
        the well-being of individuals and communities through personalized care, 
        innovative treatments, and a skilled team of professionals. We prioritize 
        patient satisfaction and strive for excellence in all aspects of healthcare.
        </p>
        <p>
          Our goal is to provide accessible and personalized care.
        </p>
        <p>With a patient-centered approach, SM Healthcare offers comprehensive 
          services ranging from preventive care to advanced treatments, ensuring 
          the best outcomes. Our medical team works collaboratively to deliver 
          efficient, innovative solutions tailored to individual needs and circumstances.</p>
        <p>
        We continuously improve to meet the evolving needs of healthcare.
        </p>
        <p>At SM Healthcare, we are committed to promoting health, healing, and quality of life.</p>
        <p>Trusted care. Compassionate service.</p>
      </div>
    </div>
  )
}

export default Biography