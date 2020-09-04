import React from "react";
import MaxNavBar from "../../components/MaxNavBar";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Home() {
  return (
    <div>
      <MaxNavBar />

      <main>
        <div className="home-content">
          <img id="logo" src={logo} alt="Primicia" />

          <div className="content">
            <p>
              Aqui na <strong>Loja Primícia</strong> você encontra uma variedade
              de produtos relacionados à moda, à artesanato, à bazar, à linha e
              costura. E o melhor, é que tudo isso é{" "}
              <strong>feito a mão</strong> com muito amor e carinho.
            </p>
            <p>
              Temos produtos a pronta entrega e trabalhamos também sob
              encomenda, personalizando nossos produtos ao gosto do cliente.
            </p>
            <br />
            <p>Venha nos conhecer!!!</p>
            <p>
              Estamos localizados na{" "}
              <strong>
                Rua Augusto José Leite, 10 - Morro do Algodão - Caraguatatuba/SP
              </strong>
            </p>

            <br />
            <p>
              Para saber sobre nossas promoções, produtos e ficar por dentro de
              tudo na Loja Primícia, acesse e nos adicione em nossas redes
              sociais.
            </p>

            <div className="home-footer">
              <div className="social-network">
                <Link className="icon-circle" to="#">
                  <FaFacebook size={45} color="#1877f2" />
                </Link>
                <Link className="icon-circle" to="#">
                  <FaInstagram size={45} color="#c32aa3" />
                </Link>
                <Link className="icon-circle" to="#">
                  <FaWhatsapp size={45} color="#25d366" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
