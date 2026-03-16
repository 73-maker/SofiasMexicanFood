<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sofia's Mexican Food | Osoyoos, BC</title>
  <meta name="description" content="Authentic Mexican food in Osoyoos, BC. Tacos, burritos, enchiladas, quesadillas, tostadas, and fresh flavours at Sofia's Mexican Food." />
  <meta name="keywords" content="Sofia's Mexican Food, Osoyoos Mexican restaurant, tacos Osoyoos, burritos Osoyoos, Mexican food Osoyoos BC" />
  <meta property="og:title" content="Sofia's Mexican Food" />
  <meta property="og:description" content="Authentic Mexican food in Osoyoos, BC." />
  <meta property="og:type" content="website" />
  <style>
    :root {
      --bg: #fff8ef;
      --surface: #fffdf8;
      --surface-2: #fff1de;
      --text: #2a1d14;
      --muted: #6d5a4d;
      --primary: #c93b2f;
      --primary-dark: #9f281f;
      --accent: #f0a428;
      --green: #2f7d57;
      --shadow: 0 20px 45px rgba(70, 32, 8, 0.12);
      --radius: 24px;
      --max: 1180px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, Arial, Helvetica, sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top right, rgba(240,164,40,0.12), transparent 25%),
        radial-gradient(circle at top left, rgba(201,59,47,0.08), transparent 28%),
        var(--bg);
      line-height: 1.55;
    }

    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }

    .container {
      width: min(100% - 2rem, var(--max));
      margin: 0 auto;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(12px);
      background: rgba(255, 248, 239, 0.88);
      border-bottom: 1px solid rgba(42, 29, 20, 0.08);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.9rem 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-weight: 800;
      letter-spacing: 0.02em;
    }

    .brand-badge {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: white;
      font-size: 1.1rem;
      box-shadow: var(--shadow);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      flex-wrap: wrap;
      font-weight: 600;
      color: var(--muted);
    }

    .nav-links a:hover { color: var(--primary); }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      padding: 0.95rem 1.3rem;
      border-radius: 999px;
      border: 0;
      font-weight: 700;
      cursor: pointer;
      transition: 0.25s ease;
    }

    .btn-primary {
      color: white;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      box-shadow: 0 12px 28px rgba(201,59,47,0.28);
    }

    .btn-primary:hover { transform: translateY(-2px); }

    .btn-secondary {
      background: white;
      color: var(--text);
      border: 1px solid rgba(42,29,20,0.1);
    }

    .hero {
      padding: 4rem 0 3rem;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 2rem;
      align-items: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.45rem 0.8rem;
      border-radius: 999px;
      background: rgba(240,164,40,0.14);
      color: #8c5c05;
      font-weight: 700;
      font-size: 0.92rem;
      margin-bottom: 1rem;
    }

    h1, h2, h3 { line-height: 1.05; margin: 0; }
    h1 {
      font-size: clamp(2.8rem, 5vw, 5.2rem);
      letter-spacing: -0.04em;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: clamp(2rem, 3vw, 3.2rem);
      letter-spacing: -0.03em;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.08rem;
      color: var(--muted);
      max-width: 60ch;
    }

    .hero-actions {
      display: flex;
      gap: 0.9rem;
      flex-wrap: wrap;
      margin: 1.5rem 0;
    }

    .quick-facts {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin-top: 1.7rem;
    }

    .fact {
      background: rgba(255,255,255,0.78);
      border: 1px solid rgba(42,29,20,0.08);
      border-radius: 20px;
      padding: 1rem;
      box-shadow: var(--shadow);
    }

    .fact strong {
      display: block;
      font-size: 1.25rem;
      margin-bottom: 0.2rem;
    }

    .hero-card {
      background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,241,222,0.9));
      border: 1px solid rgba(42,29,20,0.08);
      border-radius: 30px;
      padding: 1rem;
      box-shadow: var(--shadow);
    }

    .hero-card img {
      width: 100%;
      aspect-ratio: 4 / 4.1;
      object-fit: cover;
      border-radius: 24px;
    }

    .hero-note {
      padding: 0.9rem 0.2rem 0.2rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .hero-note strong { font-size: 1.05rem; }

    section {
      padding: 4rem 0;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: end;
      margin-bottom: 1.6rem;
    }

    .section-head p {
      color: var(--muted);
      max-width: 60ch;
      margin: 0;
    }

    .menu-grid,
    .gallery-grid,
    .reviews-grid,
    .info-grid {
      display: grid;
      gap: 1.2rem;
    }

    .menu-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .menu-card,
    .review-card,
    .info-card {
      background: rgba(255,255,255,0.82);
      border: 1px solid rgba(42,29,20,0.08);
      border-radius: 24px;
      padding: 1.35rem;
      box-shadow: var(--shadow);
    }

    .menu-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.4rem;
    }

    .menu-card ul {
      margin: 1rem 0 0;
      padding: 0;
      list-style: none;
    }

    .menu-card li {
      display: flex;
      justify-content: space-between;
      gap: 0.8rem;
      padding: 0.7rem 0;
      border-bottom: 1px dashed rgba(42,29,20,0.12);
      color: var(--muted);
    }

    .menu-card li:last-child { border-bottom: 0; }
    .item-name { color: var(--text); font-weight: 700; }
    .price { color: var(--primary); font-weight: 800; white-space: nowrap; }

    .gallery-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .gallery-grid img {
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 22px;
      box-shadow: var(--shadow);
      transition: transform 0.25s ease;
    }

    .gallery-grid img:hover { transform: translateY(-4px); }

    .about-wrap {
      display: grid;
      grid-template-columns: 0.95fr 1.05fr;
      gap: 1.3rem;
      align-items: stretch;
    }

    .about-photo,
    .about-copy {
      background: rgba(255,255,255,0.82);
      border: 1px solid rgba(42,29,20,0.08);
      border-radius: 26px;
      box-shadow: var(--shadow);
    }

    .about-photo {
      overflow: hidden;
    }

    .about-photo img {
      width: 100%;
      height: 100%;
      min-height: 420px;
      object-fit: cover;
    }

    .about-copy {
      padding: 1.8rem;
    }

    .highlights {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.9rem;
      margin-top: 1.2rem;
    }

    .highlight {
      background: var(--surface-2);
      border-radius: 18px;
      padding: 1rem;
    }

    .highlight strong {
      display: block;
      margin-bottom: 0.3rem;
    }

    .reviews-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .stars { color: var(--accent); letter-spacing: 0.1em; font-size: 1rem; }

    .review-card p {
      color: var(--muted);
      margin: 0.8rem 0 1rem;
    }

    .reviewer { font-weight: 800; }

    .info-grid {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }

    .info-card h3 {
      margin-bottom: 1rem;
      font-size: 1.35rem;
    }

    .contact-list {
      display: grid;
      gap: 0.9rem;
    }

    .contact-item {
      padding: 0.9rem 1rem;
      background: var(--surface-2);
      border-radius: 18px;
    }

    .contact-item strong {
      display: block;
      margin-bottom: 0.2rem;
    }

    .cta {
      background: linear-gradient(135deg, #2f7d57, #1f5a3f);
      color: white;
      border-radius: 32px;
      padding: 2rem;
      box-shadow: var(--shadow);
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .cta p { margin: 0.6rem 0 0; color: rgba(255,255,255,0.86); }

    footer {
      padding: 2rem 0 3rem;
      color: var(--muted);
    }

    .footer-wrap {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
      border-top: 1px solid rgba(42,29,20,0.08);
      padding-top: 1.5rem;
    }

    @media (max-width: 1024px) {
      .hero-grid,
      .about-wrap,
      .info-grid,
      .menu-grid,
      .reviews-grid,
      .gallery-grid {
        grid-template-columns: 1fr 1fr;
      }

      .hero-grid,
      .about-wrap,
      .info-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      .nav {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        gap: 0.9rem;
      }

      .quick-facts,
      .menu-grid,
      .gallery-grid,
      .reviews-grid,
      .highlights {
        grid-template-columns: 1fr;
      }

      section { padding: 3.2rem 0; }
      .hero { padding-top: 2.2rem; }
      h1 { font-size: 2.5rem; }
    }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="container nav">
      <a class="brand" href="#home">
        <span class="brand-badge">🌮</span>
        <span>Sofia's Mexican Food</span>
      </a>
      <nav class="nav-links">
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#visit">Visit</a>
        <a class="btn btn-primary" href="tel:+12506895600">Call Now</a>
      </nav>
    </div>
  </header>

  <main id="home">
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">Fresh Mexican flavours in Osoyoos, BC</span>
          <h1>Authentic Mexican food worth pulling over for.</h1>
          <p>
            Sofia's Mexican Food serves up tacos, burritos, enchiladas, quesadillas, and more with bold flavour,
            generous portions, and the kind of local charm people remember long after the last bite.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#menu">View Menu</a>
            <a class="btn btn-secondary" href="https://maps.app.goo.gl/2axbKxR4ixwWfeVJ9" target="_blank" rel="noopener">Get Directions</a>
          </div>
          <div class="quick-facts">
            <div class="fact">
              <strong>4.7 ★</strong>
              <span>Highly rated by hundreds of guests</span>
            </div>
            <div class="fact">
              <strong>$10–20</strong>
              <span>Great value for fresh, satisfying meals</span>
            </div>
            <div class="fact">
              <strong>Osoyoos, BC</strong>
              <span>Located at Osoyoos Fruit Basket</span>
            </div>
          </div>
        </div>

        <div class="hero-card">
          <img src="assets/tacos-hero.png" alt="Plate of tacos from Sofia's Mexican Food" />
          <div class="hero-note">
            <div>
              <strong>Popular picks</strong>
              <div>Fish tacos, burritos, enchiladas, quesadillas</div>
            </div>
            <a class="btn btn-secondary" href="#gallery">See Food</a>
          </div>
        </div>
      </div>
    </section>

    <section id="menu">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Menu highlights</span>
            <h2>Simple, fresh, and packed with flavour.</h2>
          </div>
          <p>
            Menu items below are based on the restaurant's posted menu boards and featured dishes. You can easily update names or prices later.
          </p>
        </div>

        <div class="menu-grid">
          <article class="menu-card">
            <h3>Tacos</h3>
            <p>Classic street-style favourites with your choice of filling.</p>
            <ul>
              <li><span class="item-name">Fish Tacos</span><span class="price">$13.00</span></li>
              <li><span class="item-name">Pork Tacos</span><span class="price">$13.50</span></li>
              <li><span class="item-name">Taco Combo</span><span class="price">$16.00</span></li>
              <li><span class="item-name">Veggie Soft Tacos</span><span class="price">$13.50</span></li>
            </ul>
          </article>

          <article class="menu-card">
            <h3>Burritos & Quesadillas</h3>
            <p>Warm, filling, and made for serious cravings.</p>
            <ul>
              <li><span class="item-name">Sofia's Burrito</span><span class="price">$18.00</span></li>
              <li><span class="item-name">Chicken Burrito</span><span class="price">$15.00</span></li>
              <li><span class="item-name">Beef Burrito</span><span class="price">$15.00</span></li>
              <li><span class="item-name">Vegan Burrito</span><span class="price">$16.00</span></li>
              <li><span class="item-name">Quesadilla</span><span class="price">$13.00</span></li>
            </ul>
          </article>

          <article class="menu-card">
            <h3>More favourites</h3>
            <p>Comfort food classics and shareable sides.</p>
            <ul>
              <li><span class="item-name">Enchiladas</span><span class="price">$18.00</span></li>
              <li><span class="item-name">Tostada</span><span class="price">$13.50</span></li>
              <li><span class="item-name">Refried Beans</span><span class="price">Market</span></li>
              <li><span class="item-name">Fresh Salsa & Sides</span><span class="price">Add-on</span></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container about-wrap">
        <div class="about-photo">
          <img src="assets/burrito-close.png" alt="Loaded burrito from Sofia's Mexican Food" />
        </div>
        <div class="about-copy">
          <span class="eyebrow">About Sofia's</span>
          <h2>A local Osoyoos stop serving real comfort food with Mexican soul.</h2>
          <p>
            Sofia's Mexican Food is the kind of place people discover once and then keep coming back to. From tacos with crisp toppings to burritos packed with flavour, the focus is on fresh ingredients, authentic taste, and friendly service.
          </p>
          <p>
            Set in Osoyoos Fruit Basket, it feels casual, welcoming, and easy to love. Whether you're passing through town, grabbing lunch, or looking for a memorable meal after a day in the sun, Sofia's makes it easy.
          </p>
          <div class="highlights">
            <div class="highlight">
              <strong>Authentic flavours</strong>
              <span>Bold, satisfying dishes inspired by classic Mexican comfort food.</span>
            </div>
            <div class="highlight">
              <strong>Visitor favourite</strong>
              <span>A great stop for locals, road trippers, and tourists exploring Osoyoos.</span>
            </div>
            <div class="highlight">
              <strong>Fresh and filling</strong>
              <span>Known for hearty burritos, tacos, enchiladas, and fresh toppings.</span>
            </div>
            <div class="highlight">
              <strong>Easy location</strong>
              <span>Conveniently located right on Crowsnest Highway.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Food gallery</span>
            <h2>What people are craving.</h2>
          </div>
          <p>
            A bright, visual gallery helps this site feel real and gives visitors instant confidence before they visit.
          </p>
        </div>
        <div class="gallery-grid">
          <img src="assets/tacos-hero.png" alt="Tacos topped with fresh vegetables and sauce" />
          <img src="assets/wrap-plate.png" alt="Burrito wrap served with chips and dips" />
          <img src="assets/burrito-close.png" alt="Close-up of a burrito cut in half" />
          <img src="assets/quesadilla-tray.png" alt="Quesadilla tray with guacamole and salsa" />
          <img src="assets/tostada-box.png" alt="Fresh tostada in takeout container" />
          <img src="assets/enchiladas-plate.png" alt="Plate of enchiladas with sauce and cheese" />
          <img src="assets/quesadilla-divided.png" alt="Quesadilla with beans and salad" />
          <img src="assets/menu-board.png" alt="Menu board at Sofia's Mexican Food" />
        </div>
      </div>
    </section>

    <section id="reviews">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow">Loved by guests</span>
            <h2>Great food, friendly service, and a calm atmosphere.</h2>
          </div>
          <p>
            These review snippets can be refined later, but they already give the website strong social proof.
          </p>
        </div>
        <div class="reviews-grid">
          <article class="review-card">
            <div class="stars">★★★★★</div>
            <p>“The food was delicious, great service, very clean and friendly, calm atmosphere overlooking beautiful Osoyoos.”</p>
            <div class="reviewer">Alejandra Valdivia</div>
          </article>
          <article class="review-card">
            <div class="stars">★★★★★</div>
            <p>“Crispy fish, fresh veggies and tasty salsa.”</p>
            <div class="reviewer">Happy guest</div>
          </article>
          <article class="review-card">
            <div class="stars">★★★★★</div>
            <p>“We ordered veggie soft tacos and a veggie burrito. Highly recommend this place for authentic Mexican food in Osoyoos.”</p>
            <div class="reviewer">Local visitor</div>
          </article>
        </div>
      </div>
    </section>

    <section id="visit">
      <div class="container info-grid">
        <div class="info-card">
          <span class="eyebrow">Visit Sofia's</span>
          <h3>Find us in Osoyoos</h3>
          <div class="contact-list">
            <div class="contact-item">
              <strong>Address</strong>
              <span>9910 Crowsnest Hwy, Osoyoos, BC V0H 1V2</span>
            </div>
            <div class="contact-item">
              <strong>Located inside</strong>
              <span>Osoyoos Fruit Basket</span>
            </div>
            <div class="contact-item">
              <strong>Phone</strong>
              <a href="tel:+12506895600">(250) 689-5600</a>
            </div>
            <div class="contact-item">
              <strong>Hours</strong>
              <span>Please confirm current hours on Google Maps before visiting.</span>
            </div>
          </div>
          <div class="hero-actions" style="margin-top: 1.25rem;">
            <a class="btn btn-primary" href="https://maps.app.goo.gl/2axbKxR4ixwWfeVJ9" target="_blank" rel="noopener">Open in Maps</a>
            <a class="btn btn-secondary" href="tel:+12506895600">Call Restaurant</a>
          </div>
        </div>

        <div class="info-card">
          <span class="eyebrow">Why this site works</span>
          <h3>Built to look great on GitHub Pages.</h3>
          <p>
            This page is fully static HTML with internal CSS, so it is easy to deploy to GitHub Pages. It is fast, mobile-friendly, and simple to update.
          </p>
          <p>
            You can later add an online menu PDF, social links, current hours, more photos, or a contact form without changing the overall design.
          </p>
          <div class="highlight" style="margin-top: 1rem;">
            <strong>GitHub deploy tip</strong>
            <span>Save this file as <code>index.html</code> and keep your images inside an <code>assets</code> folder in the same repository.</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container cta">
        <div>
          <h2 style="color:white; margin-bottom:0;">Ready to make Sofia's look legit online?</h2>
          <p>Perfect as a one-page restaurant site for GitHub Pages, a link in Google Business, or a starter website before going fully custom.</p>
        </div>
        <a class="btn btn-secondary" href="https://maps.app.goo.gl/2axbKxR4ixwWfeVJ9" target="_blank" rel="noopener">Get Directions</a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-wrap">
      <div>
        <strong>Sofia's Mexican Food</strong><br />
        9910 Crowsnest Hwy, Osoyoos, BC V0H 1V2
      </div>
      <div>
        <a href="tel:+12506895600">(250) 689-5600</a>
      </div>
    </div>
  </footer>
</body>
</html>
