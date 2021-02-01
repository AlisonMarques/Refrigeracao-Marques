import React from 'react'
import a1 from '../../images/a1.jpg'
import b2 from '../../images/b2.png'
import c3 from '../../images/c3.jpg'

export default function Home() {
  return (
    /* Home */
    <div className="home">
      {/* Home Slider */}
      <div className="home_slider_container">
        <div className="owl-carousel owl-theme home-slider">
          {/* Slide */}
          <div className="owl-item">
            <div
              className="background_image"
              style={{
                backgroundImage: `url(${a1})`,
              }}
            >
              teste a1
            </div>

            <div className="home_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="home_content">
                      <div className="home_subtitle">
                        Assistência técnica referência em
                      </div>
                      <div className="home_title">Goiânia e Região</div>
                      <div className="home_text">
                        <p>
                          Buscamos desempenhar nosso trabalho com o máximo de
                          excelência e qualidade, inovando sempre, afim de
                          apresentar aos nossos clientes soluções com melhor
                          custo benefício. Devido a isso e também a grande
                          experiência adquirida ao longo dos anos, nos tornamos
                          referência em Goiânia e região.
                        </p>
                      </div>
                      <div className="home_buttons d-flex">
                        <div className="button button_2 trans_200">
                          <a href="about">Sobre nós</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="owl-item">
            <div
              className="background_image"
              style={{
                backgroundImage: `url(${b2})`,
              }}
            >
              teste b2
            </div>

            <div className="home_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="home_content">
                      <div className="home_subtitle">
                        Conserto em eletrodomésticos
                      </div>
                      <div className="home_title">
                        Lavadoras, Refrigeradores, Micro-Ondas
                      </div>
                      <div className="home_text">
                        <p>
                          Trabalhamos com uma vasta linha de equipamentos,
                          realizando um serviço ágil, de qualidade e com
                          garantia.
                        </p>
                      </div>
                      <div className="home_buttons d-flex">
                        <div className="button button_2 trans_200">
                          <a href="services">Saiba Mais</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide */}
          <div className="owl-item">
            <div
              className="background_image"
              style={{
                backgroundImage: `url(${c3})`,
              }}
            >
              teste c3
            </div>

            <div className="home_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="home_content">
                      <div className="home_subtitle">
                        Manutenção e instalação em
                      </div>
                      <div className="home_title">Ar Condicionado</div>
                      <div className="home_text">
                        <p>
                          Somos o centro de serviço de grandes marcas, seguimos
                          os mais rígidos padrões de qualidade, possuímos uma
                          equipe técnica capacitada. Estamos preparados para te
                          atender. Não coloque seu equipamento na mão de
                          qualquer um.
                        </p>
                      </div>
                      <div className="home_buttons d-flex">
                        <div className="button button_2 trans_200">
                          <a href="contact">Solicitar Orçamento</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Home Slider Dots */}
          <div className="home_slider_dots">
            <ul
              id="home_slider_custom_dots"
              className="home_slider_custom_dots d-flex"
            >
              <li className="home_slider_custom_dot trans_200 active"></li>
              <li className="home_slider_custom_dot trans_200"></li>
              <li className="home_slider_custom_dot trans_200"></li>
              <li className="home_slider_custom_dot trans_200"></li>
            </ul>
          </div>
        </div>

        <div className="cta2">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cta2_container">
                  <div className="cta2_content">
                    <div className="cta2_title">
                      REFRIGERAÇÃO • INSTALAÇÃO • HIGIENIZAÇÃO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
