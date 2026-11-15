
import { useState } from "react";
import "./App.css";
import boutique from "./assets/Douceur Pinky Mood et paiement sécurisé.png";

function App() {
  // Panier
  const [panier, setPanier] = useState([]);
  const [confirmation, setConfirmation] = useState("");

  // Informations du client
  const [informations, setInformations] = useState({
    nom: "",
    telephone: "",
    email: "",
    gouvernorat: "",
    adresse: "",
    notes: "",
  });

  const [commandeConfirmee, setCommandeConfirmee] = useState(false);

  // Liste des produits
  const produits = [
    {
      id: 1,
      nom: "Bouillotte Ourson",
      description: "Une bouillotte douce de 2L avec une jolie housse ourson.",
      emoji: "🧸",
      classe: "ourson",
    },
    {
      id: 2,
      nom: "Bouillotte Cœur",
      description: "Une bouillotte en forme de cœur avec une fourrure fuchsia.",
      emoji: "💗",
      classe: "coeur",
    },
    {
      id: 3,
      nom: "Bouillotte Stitch",
      description: "Une bouillotte toute douce pour vos moments de détente.",
      emoji: "🩵",
      classe: "stitch",
    },
  ];

  // Ajouter un produit
  const ajouterAuPanier = (produit) => {
    setPanier((ancienPanier) => {
      const existe = ancienPanier.find((p) => p.id === produit.id);

      if (existe) {
        return ancienPanier.map((p) =>
          p.id === produit.id
            ? { ...p, quantite: p.quantite + 1 }
            : p
        );
      }

      return [...ancienPanier, { ...produit, quantite: 1 }];
    });

    setConfirmation(produit.nom + " ajouté au panier !");
    setCommandeConfirmee(false);
  };

  // Augmenter la quantité
  const augmenterQuantite = (id) => {
    setPanier((ancienPanier) =>
      ancienPanier.map((p) =>
        p.id === id
          ? { ...p, quantite: p.quantite + 1 }
          : p
      )
    );
    setCommandeConfirmee(false);
  };

  // Diminuer la quantité
  const diminuerQuantite = (id) => {
    setPanier((ancienPanier) =>
      ancienPanier
        .map((p) =>
          p.id === id
            ? { ...p, quantite: p.quantite - 1 }
            : p
        )
        .filter((p) => p.quantite > 0)
    );
    setCommandeConfirmee(false);
  };

  // Supprimer un produit
  const supprimerDuPanier = (id) => {
    setPanier((ancienPanier) =>
      ancienPanier.filter((p) => p.id !== id)
    );
    setCommandeConfirmee(false);
  };

  // Nombre total d'articles
  const nombreArticles = panier.reduce(
    (total, produit) => total + produit.quantite,
    0
  );

  // Modifier les informations du client
  const modifierInformation = (e) => {
    const { name, value } = e.target;

    setInformations((ancien) => ({
      ...ancien,
      [name]: value,
    }));

    setCommandeConfirmee(false);
  };

  // Confirmer le formulaire
  const handleCommande = (e) => {
    e.preventDefault();

    if (panier.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    setCommandeConfirmee(true);
  };

  return (
    <div className="site">

      {/* HEADER */}
      <header className="header">
        <a href="#accueil" className="logo">
          <img src={boutique} alt="Pinky Mood" />
          <span>
            Douceur
            <strong>Pinky Mood</strong>
          </span>
        </a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#collection">Boutique</a>
          <a href="#panier">Panier ({nombreArticles})</a>
          <a href="#commander">Commander</a>
          <a href="#livraison">Livraison</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ACCUEIL */}
      <section className="hero" id="accueil">
        <div className="hero-text">
          <span className="eyebrow">
            DOUCEUR • CHALEUR • CONFORT
          </span>

          <h1>
            Un instant de douceur,
            <br />
            une chaleur réconfortante.
          </h1>

          <p>
            Découvrez notre univers de bouillottes,
            pensé pour vous offrir des moments de
            confort et de détente au quotidien.
          </p>

          <a href="#collection" className="pink-button">
            Découvrir nos bouillottes →
          </a>

          <div className="hero-details">
            <span>♡ Douceur au quotidien</span>
            <span>✧ Confort et bien-être</span>
          </div>
        </div>

        <div className="hero-photo">
          <img src={boutique} alt="Univers Douceur Pinky Mood" />
          <div className="photo-note">
            ♡ Un peu de douceur pour vous
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="service-item">
          <span className="service-icon">♡</span>
          <div>
            <h3>Douceur et confort</h3>
            <p>Des moments de détente</p>
          </div>
        </div>

        <div className="service-item">
          <span className="service-icon">♢</span>
          <div>
            <h3>Paiement sécurisé</h3>
            <p>Un achat en toute tranquillité</p>
          </div>
        </div>

        <div className="service-item">
          <span className="service-icon">♧</span>
          <div>
            <h3>Livraison</h3>
            <p>Informations sur la livraison</p>
          </div>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="about" id="apropos">
        <div className="about-photo">
          <img src={boutique} alt="Notre univers" />
        </div>

        <div className="about-text">
          <span className="eyebrow">NOTRE UNIVERS</span>
          <h2>Bienvenue chez Douceur Pinky Mood</h2>

          <p>
            Notre boutique vous invite à découvrir un univers
            chaleureux et délicat, dédié aux bouillottes et
            aux petits moments de bonheur.
          </p>

          <a href="#collection" className="pink-button">
            Explorer la boutique →
          </a>
        </div>

        <div className="about-hearts">♡ ♡ ♡</div>
      </section>

      {/* BOUTIQUE */}
      <section className="collection" id="collection">
        <span className="eyebrow">NOTRE SÉLECTION</span>
        <h2>Découvrez nos bouillottes</h2>

        <p className="section-description">
          Trouvez votre petit compagnon de douceur.
        </p>

        {confirmation && (
          <div className="confirmation">
            ✓ {confirmation}
          </div>
        )}

        <div className="product-grid">
          {produits.map((produit) => (
            <article className="product-card" key={produit.id}>
              <div className={`product-visual ${produit.classe}`}>
                <span>{produit.emoji}</span>
                <span className="decor-heart">♡</span>
              </div>

              <div className="product-info">
                <h3>{produit.nom}</h3>
                <p>{produit.description}</p>

                <strong className="price">
                  Prix à définir
                </strong>

                <button
                  className="pink-button product-button"
                  onClick={() => ajouterAuPanier(produit)}
                >
                  Ajouter au panier ♡
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PANIER */}
      <section className="cart-section" id="panier">
        <span className="eyebrow">VOTRE SÉLECTION</span>
        <h2>Mon panier 🛍️</h2>

        {panier.length === 0 ? (
          <div className="empty-cart">
            <span>♡</span>
            <h3>Votre panier est vide</h3>
            <p>Découvrez nos jolies bouillottes.</p>

            <a href="#collection" className="pink-button">
              Voir la boutique
            </a>
          </div>
        ) : (
          <div className="cart-list">
            {panier.map((produit) => (
              <div className="cart-row" key={produit.id}>
                <div className="cart-product-name">
                  <span>{produit.emoji}</span>
                  <strong>{produit.nom}</strong>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() => diminuerQuantite(produit.id)}
                  >
                    -
                  </button>

                  <strong>{produit.quantite}</strong>

                  <button
                    onClick={() => augmenterQuantite(produit.id)}
                  >
                    +
                  </button>
                </div>

                <span className="cart-price">
                  Prix à définir
                </span>

                <button
                  className="delete-button"
                  onClick={() => supprimerDuPanier(produit.id)}
                >
                  Supprimer
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Nombre total d'articles : {nombreArticles}</h3>
              <p>Prix total : à définir</p>

              <a href="#commander" className="pink-button">
                Passer ma commande →
              </a>
            </div>
          </div>
        )}
      </section>

      {/* PASSAGE DE COMMANDE */}
      <section className="checkout-section" id="commander">
        <div className="checkout-heading">
          <span className="eyebrow">PINKY MOOD ♡</span>
          <h2>Finaliser votre commande</h2>
          <p>
            Remplissez vos informations pour préparer votre commande.
          </p>
        </div>

        <div className="checkout-container">

          {/* FORMULAIRE CLIENT */}
          <form className="checkout-form" onSubmit={handleCommande}>
            <h3>Vos informations personnelles</h3>

            <label>Nom et prénom *</label>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom et prénom"
              value={informations.nom}
              onChange={modifierInformation}
              required
            />

            <label>Numéro de téléphone *</label>
            <input
              type="tel"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              value={informations.telephone}
              onChange={modifierInformation}
              required
            />

            <label>Adresse e-mail *</label>
            <input
              type="email"
              name="email"
              placeholder="exemple@gmail.com"
              value={informations.email}
              onChange={modifierInformation}
              required
            />

            <label>Gouvernorat *</label>
            <select
              name="gouvernorat"
              value={informations.gouvernorat}
              onChange={modifierInformation}
              required
            >
              <option value="">Choisir votre gouvernorat</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Manouba">Manouba</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Zaghouan">Zaghouan</option>
              <option value="Béja">Béja</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Monastir">Monastir</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Sfax">Sfax</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Gabès">Gabès</option>
              <option value="Médenine">Médenine</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Kébili">Kébili</option>
            </select>

            <label>Adresse de livraison *</label>
            <textarea
              name="adresse"
              rows="3"
              placeholder="Rue, quartier, ville..."
              value={informations.adresse}
              onChange={modifierInformation}
              required
            />

            <label>Notes supplémentaires</label>
            <textarea
              name="notes"
              rows="3"
              placeholder="Informations complémentaires (facultatif)"
              value={informations.notes}
              onChange={modifierInformation}
            />

            <button
              type="submit"
              className="pink-button checkout-button"
              disabled={panier.length === 0}
            >
              Confirmer ma commande ♡
            </button>

            {panier.length === 0 && (
              <p className="checkout-warning">
                Ajoutez d'abord un produit à votre panier.
              </p>
            )}

            {commandeConfirmee && (
              <div className="checkout-success">
                <h3>Merci {informations.nom} ♡</h3>
                <p>
                  Vos informations ont été saisies.
                  Votre commande est prête pour être traitée
                  par la boutique.
                </p>
              </div>
            )}
          </form>

          {/* RESUME DE COMMANDE */}
          <div className="checkout-summary">
            <h3>Résumé de votre commande</h3>

            {panier.length === 0 ? (
              <p>Votre panier est vide.</p>
            ) : (
              panier.map((produit) => (
                <div className="summary-product" key={produit.id}>
                  <span>
                    {produit.emoji} {produit.nom}
                  </span>
                  <strong>× {produit.quantite}</strong>
                </div>
              ))
            )}

            <div className="summary-total">
              <span>Total des articles</span>
              <strong>{nombreArticles}</strong>
            </div>

            <p className="summary-note">
              Les prix et les frais de livraison seront confirmés
              avec vous avant la validation définitive.
            </p>
          </div>
        </div>
      </section>

      {/* LIVRAISON */}
      <section className="simple-section delivery" id="livraison">
        <span className="eyebrow">NOS SERVICES</span>
        <h2>Informations de livraison</h2>

        <p>
          Les frais et les délais de livraison seront communiqués
          lors de la confirmation de votre commande.
        </p>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <span className="eyebrow">RESTONS EN CONTACT</span>
        <h2>Contactez-nous</h2>
        <p>Une question ? Nous sommes à votre écoute.</p>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci pour votre message !");
            e.target.reset();
          }}
        >
          <input
            type="text"
            placeholder="Votre nom"
            required
          />

          <input
            type="email"
            placeholder="Votre adresse e-mail"
            required
          />

          <textarea
            placeholder="Votre message"
            rows="4"
            required
          />

          <button type="submit" className="pink-button">
            Envoyer le message ♡
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Douceur Pinky Mood ♡</h2>
        <p>Un peu de douceur dans chaque instant.</p>

        <div className="footer-links">
          <a href="#accueil">Accueil</a>
          <a href="#collection">Boutique</a>
          <a href="#panier">Panier</a>
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
