import React from 'react'

import { Link } from 'gatsby'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    /* Header */
    <header className="header trans_400">
      <div className="header_content">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="main_nav">
          <ul className="d-flex">
            <li className="active">
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

        <div className="header_extra">
          {/* Appointment Button */}
          <div className="button button_1 header_button">
            <Link
              to="https://api.whatsapp.com/send?phone=5562993471055"
              target="_blank"
            >
              (62) 9 9347-1055
            </Link>
          </div>

          {/* Header Social */}
          <div className="social header_social">
            <ul className="d-flex">
              <li>
                <Link
                  to="https://api.whatsapp.com/send?phone=5562993471055"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </Link>
              </li>

              <li>
                <address>
                  <a href="alison-marques@outlook.com.br">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </a>
                </address>
              </li>

              <li>
                <Link
                  href="https://www.facebook.com/alison.marquesdejesus"
                  target="_blank"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburguer */}
          <div className="hamburguer">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </header>
  )
}
