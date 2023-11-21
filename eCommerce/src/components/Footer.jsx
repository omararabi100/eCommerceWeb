import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Payment Methods</h3>
        <ul>
          <li>Credit Card</li>
          <li>PayPal</li>
          <li>Bitcoin</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact Us</h3>
        <ul>
          <li>
            Email: <a href="mailto:info@gmail.com">info@electro.com</a>
          </li>
          <li>
            Facebook: <a href="https://www.facebook.com">electro</a>
          </li>
          <li>
            Instagram: <a href="https://www.instagram.com">@electro</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;