import footerLinks from "../assets/footerLinks";

function Footer() {
  return (
    <footer>

      {/* FOOTER TOP */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">

            {footerLinks.map((column, index) => (
              <div key={index}>

                <h4>{column.title}</h4>

                <ul>
                  {column.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </div>
      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">

          <button className="signup-btn">SIGN-UP NOW!</button>

          <div className="social">
            <span>FOLLOW US</span>

            <img src="/img/footer-facebook.png" alt="facebook" />
            <img src="/img/footer-twitter.png" alt="twitter" />
            <img src="/img/footer-youtube.png" alt="youtube" />
            <img src="/img/footer-pinterest.png" alt="pinterest" />
            <img src="/img/footer-periscope.png" alt="periscope" />

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;