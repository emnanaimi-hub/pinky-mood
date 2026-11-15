
import { useState } from "react";
import "./App.css";
import boutique from "./assets/Douceur Pinky Mood et paiement sécurisé.png";


function App() {
  const [panier, setPanier] = useState([]);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  const supprimerDuPanier = (index) => {
    setPanier(panier.filter((_, i) => i !== index));
  };

  const total = panier.reduce((somme, produit) => somme + produit.prix, 0);

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <a href="#accueil" className="logo">
          <img src={boutique} alt="Douceur Pinky Mood" />
          <span>Douceur Pinky Mood</span>
        </a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#collection">Boutique</a>
          <a href="#panier">Panier ({panier.length})</a>
          <a href="#commander">Commander</a>
          <a href="#livraison">Livraison</a>
          <a href="#contact">Contactez-nous</a>
          <a href="#connexion">Connexion</a>
        </nav>
      </header>

      {/* ACCUEIL */}
      <section className="hero" id="accueil">
        <div className="hero-content">
          <span className="small-title">DOUCEUR • CHALEUR • CONFORT</span>

          <h1>
            Un instant de douceur,
            <span> une chaleur réconfortante.</span>
          </h1>

          <p>
            Découvrez notre univers de bouillottes,
            pensé pour vous offrir des moments de
            confort et de détente au quotidien.
          </p>

          <a href="#collection" className="main-btn">
            Découvrir nos bouillottes
          </a>

          <div className="hero-info">
            <span>♡ Douceur au quotidien</span>
            <span>✦ Confort et bien-être</span>
          </div>
        </div>

        <div className="hero-image">
          <img src={boutique} alt="Douceur Pinky Mood" />
          <div className="floating-note">
            ♡ Un peu de douceur pour vous
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="service">
          <span>♡</span>
          <div>
            <h3>Douceur et confort</h3>
            <p>Des moments de détente</p>
          </div>
        </div>

        <div className="service">
          <span>✧</span>
          <div>
            <h3>Paiement sécurisé</h3>
            <p>Un achat en toute tranquillité</p>
          </div>
        </div>

        <div className="service">
          <span>♧</span>
          <div>
            <h3>Livraison</h3>
            <p>Informations sur la livraison</p>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="about" id="apropos">
        <div className="about-image">
          <img src={boutique} alt="Notre boutique" />
        </div>

        <div className="about-content">
          <span className="small-title">NOTRE UNIVERS</span>
          <h2>Bienvenue chez Douceur Pinky Mood</h2>
          <p>
            Notre boutique vous invite à découvrir un
            univers chaleureux et délicat, dédié aux
            bouillottes et aux petits moments de bonheur.
          </p>
          <p>
            Notre objectif est d'apporter une touche de
            douceur et de confort à votre quotidien.
          </p>
          <a href="#collection" className="main-btn">
            Explorer la boutique
          </a>
        </div>
      </section>

      {/* BOUTIQUE */}
      <section className="collection" id="collection">
        <span className="small-title">NOTRE SÉLECTION</span>
        <h2>Découvrez nos bouillottes</h2>
        <p className="collection-description">
          Trouvez votre petit compagnon de douceur.
        </p>

        <div className="products">
          <div className="product-card">
            <div className="product-image">♡</div>
            <h3>Bouillotte douceur</h3>
            <p>Un compagnon pour vos moments de détente.</p>
            <strong>Prix à définir</strong>
            <button className="main-btn" disabled>
              Produit bientôt disponible
            </button>
          </div>

          <div className="product-card">
            <div className="product-image">✿</div>
            <h3>Bouillotte confort</h3>
            <p>Une touche de chaleur et de confort.</p>
            <strong>Prix à définir</strong>
            <button className="main-btn" disabled>
              Produit bientôt disponible
            </button>
          </div>

          <div className="product-card">
            <div className="product-image">♡</div>
            <h3>Bouillotte cocooning</h3>
            <p>Pour profiter de vos instants de douceur.</p>
            <strong>Prix à définir</strong>
            <button className="main-btn" disabled>
              Produit bientôt disponible
            </button>
          </div>
        </div>
      </section>

      {/* PANIER */}
      <section className="extra-section" id="panier">
        <span className="small-title">VOTRE SÉLECTION</span>
        <h2>Mon panier 🛒</h2>

        {panier.length === 0 ? (
          <div className="empty-products">
            <span>♡</span>
            <h3>Votre panier est vide</h3>
            <p>Découvrez nos bouillottes et choisissez vos préférées.</p>
            <a href="#collection" className="main-btn">
              Voir la boutique
            </a>
          </div>
        ) : (
          <div className="cart">
            {panier.map((produit, index) => (
              <div className="cart-item" key={index}>
                <span>{produit.nom}</span>
                <strong>{produit.prix.toFixed(2)} DT</strong>
                <button onClick={() => supprimerDuPanier(index)}>
                  Supprimer
                </button>
              </div>
            ))}

            <h3>Total : {total.toFixed(2)} DT</h3>
            <a href="#commander" className="main-btn">
              Passer la commande
            </a>
          </div>
        )}
      </section>

      {/* COMMANDER */}
      <section className="extra-section" id="commander">
        <span className="small-title">VOTRE COMMANDE</span>
        <h2>Commander</h2>
        <p>Préparez votre commande en toute simplicité.</p>

        <div className="order-box">
          <h3>Récapitulatif</h3>
          <p>Nombre d'articles : {panier.length}</p>
          <h3>Total : {total.toFixed(2)} DT</h3>
          <p className="note">
            Le paiement et la confirmation de commande seront
            activés après la configuration du service de commande.
          </p>
        </div>
      </section>

      {/* LIVRAISON */}
      <section className="extra-section delivery" id="livraison">
        <span className="small-title">NOS SERVICES</span>
        <h2>Informations de livraison</h2>
        <p>
          Nous préparons vos commandes avec attention.
          Les modalités de livraison seront communiquées
          lors de la confirmation de votre commande.
        </p>

        <div className="delivery-card">
          <span>♡</span>
          <h3>Livraison à domicile</h3>
          <p>Les frais et les délais seront précisés selon votre adresse.</p>
        </div>
      </section>

      {/* CONNEXION */}
      <section className="extra-section" id="connexion">
        <span className="small-title">ESPACE CLIENT</span>
        <h2>Bienvenue chez vous !</h2>
        <p>Connectez-vous à votre espace client.</p>

        <form className="login-placeholder" onSubmit={(e) => {
          e.preventDefault();
          setMessage("La connexion nécessite encore un système de compte.");
        }}>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            required
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            required
          />
          <button type="submit" className="main-btn">
            Se connecter
          </button>
          {message && <p>{message}</p>}
        </form>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <span className="small-title">RESTONS EN CONTACT</span>
        <h2>Contactez-nous</h2>
        <p>Une question ? Envoyez-nous votre message.</p>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          setMessage("Merci ! Votre message est prêt à être traité.");
        }}>
          <input
            type="text"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Votre message"
            rows="4"
            required
          />

          <button type="submit" className="main-btn">
            Envoyer le message
          </button>

          {message && <p>{message}</p>}
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <h2>Douceur Pinky Mood ♡</h2>
        <p>Un peu de douceur dans chaque instant.</p>

        <div className="footer-links">
          <a href="#accueil">Accueil</a>
          <a href="#collection">Boutique</a>
          <a href="#livraison">Livraison</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 Douceur Pinky Mood - Tous droits réservés.
        </p>
      </footer>

    </div>
  );
}

export default App;
