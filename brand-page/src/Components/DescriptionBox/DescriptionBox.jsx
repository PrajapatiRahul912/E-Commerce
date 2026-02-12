import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="decriptionbox-description">
    <p>
        An e-commerce website is an online platform that allows businesses and individuals to buy and sell products or services over the internet. 
        These websites typically feature a catalog of products, shopping cart functionality, secure payment processing, and order management systems. E-commerce websites can range from small, niche stores to large marketplaces like Amazon or eBay.
        They provide a convenient way for consumers to shop from the comfort of their own homes and offer businesses the opportunity to reach a global audience.
    </p>
    <p>
        E-commerce websites often include features such as product search and filtering, customer reviews, and personalized recommendations to enhance the shopping experience.
        They may also offer various payment options, including credit cards, digital wallets, and bank transfers, to accommodate different customer preferences.
        Additionally, e-commerce websites typically have robust security measures in place to protect customer data and ensure safe transactions.
    </p>
      </div>
    </div>
  )
}

export default DescriptionBox
