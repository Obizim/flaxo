import heroImg from "../images/hero.jpg";

const services = [
  {
    id: 1,
    heading: "LARGEST COLLECTION OF BOOKS FOR SALE",
    sub_heading:
      "We have a huge collection of local and international books for sale",
  },
  {
    id: 2,
    heading: "COMPETITIVE PRICING",
    sub_heading:
      "Our books are competitively priced and offer exceptional value for money.",
  },
  {
    id: 3,
    heading: "WHOLESALE AND RETAIL OPERATIONS",
    sub_heading:
      "In addition to our retail and online outlets, we have the capacity to service large wholesale orders from institutional customers.",
  },
];

const Home = () => {
  return (
    <main>
      <div className="hero-img">
        <img src={heroImg} loading="lazy" alt="A bookstore shop" />
      </div>

      <div className="services">
        {services.map((s) => (
          <div key={s.id}>
              <h2 className="heading">{s.heading}</h2>
              <p className="sub-heading">{s.sub_heading}</p>
          </div>
        ))}
      </div>

      <div className="featured">
        <h2 className="title">BESTSELLERS</h2>
      </div>
    </main>
  );
};

export default Home;
