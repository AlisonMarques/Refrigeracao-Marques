import React from 'react'

export default function Menu() {
  return (
    /* Menu */
    <div className="menu_overlay trans_400">
      <div className="menu trans_400">
        <div className="menu_close_container">
          <div className="menu_close">
            <div></div>
            <div></div>
          </div>
        </div>

        <nav className="menu_nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="about">Sobre</a>
            </li>
            <li>
              <a href="services">Serviços</a>
            </li>
            <li>
              <a href="contact">Fale Conosco</a>
            </li>
          </ul>
        </nav>

        {/* Menu Extra */}
        <div className="menu_extra">
          <div className="menu_link">
            <a href="https://api.whatsapp.com/send?phone=5562993471055">
              (62) 9 9347-1055
            </a>
          </div>
        </div>

        {/* Menu Social */}
        <div className="social menu_social">
          <ul className="d-flex">
            <li>
              <a href="https://api.whatsapp.com/send?phone=5562993471055">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="alison-marques@outlook.com.br">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/alison.marquesdejesus">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
