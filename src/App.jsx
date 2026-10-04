import './App.css'
import drCandiceJames from './assets/dr-candice-james.jpg'

function App() {
  return (
    <div className="site">

      {/* =========================
          HEADER
      ========================== */}

      <header className="header">
        <div className="container nav">

          <a href="#" className="logo">
            MINDTREK PSYCHOLOGY
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="mailto:admin@mindtrekpsych.com"
            className="nav-button"
          >
            Book an appointment
          </a>

        </div>
      </header>


      {/* =========================
          HERO
      ========================== */}

      <main>

        <section className="hero">

          <div className="hero-background"></div>

          <div className="container hero-content">

            <div className="hero-text">

              <p className="eyebrow">
                MINDTREK PSYCHOLOGY
              </p>

              <h1>
                Understanding yourself.
                <br />
                Building on your strengths.
                <br />
                Moving forward.
              </h1>

              <p className="hero-description">
                Psychological assessment and counselling for children,
                adolescents and adults, provided with a neuroaffirming,
                evidence-based and person-centred approach.
              </p>

              <a
                href="mailto:admin@mindtrekpsych.com"
                className="primary-button"
              >
                Book an appointment
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT DR CANDICE JAMES
        ========================== */}

        <section id="about" className="section about">

          <div className="container about-grid">

            <div className="practitioner-image">
              <img
                src={drCandiceJames}
                alt="Dr Candice James, registered psychologist"
              />
            </div>

            <div className="about-text">

              <p className="eyebrow">
                MEET DR CANDICE JAMES
              </p>

              <h2>
                Understanding what makes you, you.
              </h2>

              <p>
                Dr Candice James is a registered psychologist with a PhD
                and a Master of Psychology in Educational and Developmental
                Psychology.
              </p>

              <p>
                She provides comprehensive assessments and counselling
                for children aged 4 and over, adolescents and adults,
                including ADHD, autism, learning disorders, intellectual
                disability and giftedness.
              </p>

              <p>
                Her therapeutic work supports anxiety, depression,
                emotional regulation, stress and burnout, grief and loss,
                study and performance challenges, identity development
                and family wellbeing.
              </p>

              <p>
                Dr James also offers parenting support and executive
                functioning coaching.
              </p>

              <p>
                At Mindtrek Psychology, Dr James uses a neuroaffirming,
                evidence-based and person-centred approach to help
                individuals understand themselves, build on their
                strengths and move forward with clarity, confidence
                and emotional resilience.
              </p>

              <a
                href="mailto:admin@mindtrekpsych.com"
                className="text-link"
              >
                Get in touch →
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================== */}

        <section id="services" className="section services">

          <div className="container">

            <div className="section-heading">

              <p className="eyebrow">
                PSYCHOLOGICAL SERVICES
              </p>

              <h2>
                Support for where you are right now.
              </h2>

            </div>


            <div className="service-grid">

              <article className="service-card">

                <h3>
                  Psychological assessments
                </h3>

                <p>
                  Comprehensive assessment to better understand
                  strengths, challenges, learning, development and
                  individual needs.
                </p>

              </article>


              <article className="service-card">

                <h3>
                  ADHD & autism
                </h3>

                <p>
                  Assessment and support relating to ADHD and autism,
                  using a neuroaffirming approach that recognises
                  individual strengths and differences.
                </p>

              </article>


              <article className="service-card">

                <h3>
                  Learning & development
                </h3>

                <p>
                  Assessment relating to learning disorders,
                  intellectual disability and giftedness across
                  different stages of development.
                </p>

              </article>


              <article className="service-card">

                <h3>
                  Emotional wellbeing
                </h3>

                <p>
                  Psychological support for anxiety, depression,
                  emotional regulation, stress, burnout, grief
                  and loss.
                </p>

              </article>


              <article className="service-card">

                <h3>
                  Study & performance
                </h3>

                <p>
                  Support with study, performance, executive
                  functioning, organisation, motivation and
                  developing practical strategies.
                </p>

              </article>


              <article className="service-card">

                <h3>
                  Family & parenting
                </h3>

                <p>
                  Parenting support and guidance to help families
                  develop understanding, connection and practical
                  strategies for everyday life.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =========================
            CONTACT / CTA
        ========================== */}

        <section id="contact" className="contact-section">

          <div className="container contact-content">

            <p className="eyebrow">
              GET IN TOUCH
            </p>

            <h2>
              A conversation can be
              <br />
              the first step.
            </h2>

            <p>
              Whether you're seeking answers, support through a
              challenging time, or a better understanding of yourself
              or someone you care about, Mindtrek Psychology provides
              a safe and supportive space to begin.
            </p>

            <a
              href="mailto:admin@mindtrekpsych.com"
              className="primary-button"
            >
              Book an appointment
            </a>

            <p className="contact-email">
              <a href="mailto:admin@mindtrekpsych.com">
                admin@mindtrekpsych.com
              </a>
            </p>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="footer">

        <div className="container footer-content">

          <div>

            <strong>
              MINDTREK PSYCHOLOGY
            </strong>

            <p>
              Dr Candice James
              <br />
              Registered Psychologist
            </p>

            <p>
              ABN 98 302 996 036
            </p>

          </div>


          <div className="footer-links">

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#">
              Privacy
            </a>

          </div>

        </div>


        <div className="container copyright">

          © 2026 Mindtrek Psychology. All rights reserved.

        </div>

      </footer>

    </div>
  )
}

export default App