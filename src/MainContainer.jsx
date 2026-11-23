function MainContainer() {
  const products = [
    {
      name: 'Arabica Coffee Beans',
      category: 'Beverages',
      description: 'Carefully sourced coffee beans with a rich aroma and balanced flavor.',
      image: 'photo-1495474472287-4d71bcdd2085',
    },
    {
      name: 'Basmati Rice',
      category: 'Grains',
      description: 'Long-grain, aromatic rice selected for quality and consistency.',
      image: 'photo-1509440159596-0249088772ff',
    },
    {
      name: 'Turmeric',
      category: 'Spices',
      description: 'Vibrant turmeric sourced from trusted growers and spice producers.',
      image: 'photo-1494412519320-aa613dfb7738',
    },
    {
      name: 'Green Tea',
      category: 'Beverages',
      description: 'Fresh, fragrant tea leaves available for wholesale orders.',
      image: 'photo-1511920170033-f8396924c348',
    },
    {
      name: 'Cashew Nuts',
      category: 'Dried Goods',
      description: 'Quality-checked cashews packed for international distribution.',
      image: 'photo-1509440159596-0249088772ff',
    },
    {
      name: 'Cotton Textiles',
      category: 'Textiles',
      description: 'Versatile cotton fabric and textile goods from reliable suppliers.',
      image: 'photo-1494412519320-aa613dfb7738',
    },
    {
      name: 'Natural Rubber',
      category: 'Raw Materials',
      description: 'Dependable natural rubber supply for manufacturing needs.',
      image: 'photo-1494412519320-aa613dfb7738',
    },
    {
      name: 'Handcrafted Ceramics',
      category: 'Home & Craft',
      description: 'Distinctive ceramic pieces made by skilled independent artisans.',
      image: 'photo-1494412519320-aa613dfb7738',
    },
  ];

  return (
    <main>
      <section className="welcome" id="home">
        <div>
          <h1>Import and Export Services</h1>
          <p>We help businesses buy and sell products from different parts of the world.</p>
          <a className="button" href="#services">Our Services</a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80"
          alt="Cargo containers ready to be shipped"
        />
      </section>

      <section className="page-section" id="about">
        <h2>About Us</h2>
        <p>
          AstraFlow is a import and export company. We work with suppliers
          and customers to help products reach the right place. Our aim is to
          make international trade simple and reliable.
        </p>
      </section>

      <section className="page-section products" id="products">
        <h2>Products We Source &amp; Supply</h2>
        <p>Explore a selection of quality goods available for import and export. Contact us for wholesale details and a quote.</p>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <img
                src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`}
                alt={product.name}
                loading="lazy"
              />
              <div className="product-card-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a
                  className="product-link"
                  href={`mailto:trade@astraflow.com?subject=${encodeURIComponent(`Product inquiry: ${product.name}`)}`}
                >
                  Request a quote <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <article className="service-card">
            <h3>Import</h3>
            <p>We help businesses find and bring products from other countries.</p>
          </article>
          <article className="service-card">
            <h3>Export</h3>
            <p>We help local products reach customers in other countries.</p>
          </article>
          <article className="service-card">
            <h3>Shipping Help</h3>
            <p>We help arrange delivery and keep customers updated about orders.</p>
          </article>
        </div>
      </section>

      <section className="page-section contact" id="contact">
        <h2>Contact Us</h2>
        <p>Have a question? Get in touch and tell us what you need.</p>
        <a className="button" href="mailto:trade@astraflow.com">Email AstraFlow</a>
      </section>
    </main>
  );
}

export default MainContainer;
