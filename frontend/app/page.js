import SiteShell from "@/components/site/SiteShell";

const services = [
  {
    number: "01",
    title: "Express Entry",
    intro: "Apply for a faster way to obtain permanent residence in Canada.",
    copy: "Express Entry offers a fast-track route to living and working in Canada for qualified individuals and their families. Candidates create an online profile and receive a Comprehensive Ranking System (CRS) score based on factors including age, education, work experience, language proficiency, and adaptability. Regular draws invite candidates with the highest scores to apply for permanent residence.",
  },
  {
    number: "02",
    title: "Study Permit",
    intro: "Expert assistance on admissions and study permit applications.",
    copy: "A Canadian Study Permit allows international students to pursue their education at a designated institution. Applicants generally need an acceptance letter from a Designated Learning Institution, proof of financial support, a clean criminal record, and a medical exam when required. Eligible students may also work part-time during their studies.",
  },
  {
    number: "03",
    title: "Visitors Visa",
    intro:
      "Simplify the process of obtaining a Temporary Resident Visa or ETA.",
    copy: "A Canadian Visitor Visa, also known as a Temporary Resident Visa (TRV), allows individuals to visit Canada for tourism, family visits, or business conferences. Applicants generally need a valid passport, completed forms, proof of ties to their home country, and sufficient funds for their stay.",
  },
  {
    number: "04",
    title: "Work Permit & LMIA",
    intro: "Empowering your Canadian job journey with LMIA and PR support.",
    copy: "A Canadian Work Permit allows foreign nationals to work legally in Canada for a specified period. Applicants typically need a Canadian job offer, a Labour Market Impact Assessment in some cases, and must meet health and security requirements. Permits may be open or employer-specific, and Canadian work experience can support future permanent residence pathways.",
  },
  {
    number: "05",
    title: "Family Sponsorship",
    intro: "Reunite with loved ones through Family Sponsorship.",
    copy: "Canadian citizens and permanent residents may be able to sponsor a spouse, common-law or conjugal partner, dependent children, parents, or grandparents. Eligible sponsored family members may receive permanent residence and the opportunity to live, work, and study in Canada.",
  },
  {
    number: "06",
    title: "Provincial Nominee Programs",
    intro:
      "Explore opportunities offered by Canada’s provinces and territories.",
    copy: "The Provincial Nominee Program allows provinces and territories to nominate people with the skills, education, and work experience needed by their local economies. Each region operates unique streams and criteria tailored to its labour-market priorities.",
  },
  {
    number: "07",
    title: "Business Immigration",
    intro:
      "Pathways for entrepreneurs, investors, and self-employed individuals.",
    copy: "Canadian Business Immigration programs offer routes for qualified entrepreneurs, investors, and self-employed people to establish or invest in Canadian businesses. These programs support economic growth, job creation, and innovation, and successful applicants may obtain permanent residence for themselves and their families.",
  },
];

const consultations = [
  ["Study Permit", "$150.00 + GST/HST"],
  ["Family Sponsorship", "$150.00 + GST/HST"],
  ["Permanent Residence", "$150.00 + GST/HST"],
  ["Visitors Visa", "$150.00 + GST/HST"],
  ["Business Immigration", "$400.00 + GST/HST"],
  ["Visa Refusal Consultation", "$150.00 + GST/HST"],
];

export default function Home() {
  return (
    <SiteShell>
      <section className="imm-hero" id="home">
        <img
          className="imm-hero__backdrop"
          src="/assets/images/immigration/canada-hero.jpg"
          alt=""
        />
        <div className="imm-hero__shade" />
        <div className="imm-container imm-hero__inner">
          <span className="imm-eyebrow imm-eyebrow--light">
            Your Canadian journey starts here
          </span>
          <h1>
            Canadian Immigration
            <br />
            <em>&amp; Visa Consulting</em>
          </h1>
          <p>
            Embark on your Canadian immigration journey with confidence and
            peace of mind.
          </p>
          <div className="imm-hero__actions">
            <a className="imm-button" href="#assessment" data-chatgrow-open="">
              Request Assessment <span aria-hidden="true">→</span>
            </a>
            <a className="imm-text-link imm-text-link--light" href="#about">
              Discover our story
            </a>
          </div>
          <div className="imm-hero__note">
            <span>Certified immigration guidance</span>
            <span>Personalised pathways</span>
            <span>Accessible worldwide</span>
          </div>
        </div>
      </section>

      <section className="imm-red-strip">
        <div className="imm-container">
          <strong>Let’s work together on your Canadian journey.</strong>
          <p>Contact us for answers to all your immigration questions.</p>
          <a href="#assessment">Start your assessment →</a>
        </div>
      </section>

      <section className="imm-services" id="services">
        <div className="imm-container">
          <div className="imm-heading">
            <div>
              <span className="imm-eyebrow">Our services</span>
              <h2>Clear guidance for every immigration pathway.</h2>
            </div>
            <p>
              From permanent residence to study, work, family, visitor, and
              business applications, we help you understand the process and
              prepare with confidence.
            </p>
          </div>
          <div className="imm-service-grid">
            {services.map((service) => (
              <article className="imm-service" key={service.title}>
                <div className="imm-service__top">
                  <span>{service.number}</span>
                  <i aria-hidden="true">↗</i>
                </div>
                <h3>{service.title}</h3>
                <p className="imm-service__intro">{service.intro}</p>
                <details open>
                  <summary>
                    Read full details <b>⌄</b>
                  </summary>
                  <p>{service.copy}</p>
                </details>
                <a href="#assessment">Apply for {service.title} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imm-about" id="about">
        <div className="imm-container imm-about__grid">
          <div className="imm-founder">
            <img
              src="/assets/images/immigration/kemi-soetan.jpeg"
              alt="Kemi Soetan, Founder and CEO"
            />
            <div>
              <strong>Kemi Soetan</strong>
              <span>Founder &amp; CEO</span>
            </div>
          </div>
          <div className="imm-about__copy">
            <span className="imm-eyebrow">Our story</span>
            <h2>Experience shaped by a personal immigration journey.</h2>
            <p>
              Our Founder &amp; CEO, Kemi Soetan, is a seasoned Certified
              Canadian Immigration Consultant with over a decade of experience
              facilitating the immigration process for individuals and families
              worldwide. Based in Toronto, Canada, Kemi has built a reputation
              for her expertise, professionalism, and dedication to helping
              clients navigate Canadian immigration law.
            </p>
            <p>
              Kemi’s journey into immigration consultancy began with her own
              experience as an immigrant to Canada. Her passion for helping
              others achieve their dreams of settling in this diverse and
              welcoming country led her to pursue formal education and training
              in immigration law and procedures.
            </p>
            <p>
              She earned her certification from the Immigration Consultants of
              Canada Regulatory Council (ICCRC), demonstrating her commitment to
              the highest standards of ethics and professionalism.
            </p>
            <img
              className="imm-rcic"
              src="/assets/images/immigration/rcic-logo.png"
              alt="Registered Canadian Immigration Consultant"
            />
          </div>
        </div>
      </section>

      <section className="imm-values">
        <div className="imm-container imm-values__grid">
          <div>
            <span className="imm-eyebrow imm-eyebrow--light">
              Driven by values
            </span>
            <h2>Professional service, with a personal touch.</h2>
            <p>
              Our mission is to simplify the immigration process and empower our
              clients to make informed decisions about their future in Canada.
              We believe in transparency, integrity, and professionalism in
              everything we do.
            </p>
            <p>
              Whether you are seeking to reunite with family, pursue educational
              opportunities, explore employment prospects, or establish
              permanent residence, we are here to guide you every step of the
              way.
            </p>
          </div>
          <div className="imm-value-list">
            <article>
              <span>✓</span>
              <div>
                <h3>Expertise</h3>
                <p>
                  In-depth knowledge of Canadian immigration laws, policies, and
                  procedures for accurate and reliable guidance.
                </p>
              </div>
            </article>
            <article>
              <span>✓</span>
              <div>
                <h3>Personalized Approach</h3>
                <p>
                  We listen to your needs and tailor our services to your
                  specific requirements.
                </p>
              </div>
            </article>
            <article>
              <span>✓</span>
              <div>
                <h3>Accessibility</h3>
                <p>
                  Virtual consultations, email, and phone support for clients in
                  Canada and abroad.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="imm-consultations" id="consultations">
        <div className="imm-container">
          <div className="imm-heading">
            <div>
              <span className="imm-eyebrow">Consultations</span>
              <h2>Ready to discuss your immigration needs?</h2>
            </div>
            <p>
              Select the right consultation service, complete the immigration
              questionnaire and payment, then receive a comprehensive assessment
              to determine your best immigration pathway.
            </p>
          </div>
          <div className="imm-price-grid">
            {consultations.map(([title, price]) => (
              <article key={title}>
                <small>60-minute consultation</small>
                <h3>{title}</h3>
                <strong>{price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imm-assessment" id="assessment">
        <div className="imm-container imm-assessment__inner">
          <div>
            <span className="imm-eyebrow imm-eyebrow--light">
              Your next step
            </span>
            <h2>Request your immigration assessment.</h2>
            <p>
              Tell us where you are in your journey and what you hope to
              achieve. We’ll review your details and help identify the Canadian
              immigration pathways worth exploring.
            </p>
            <ul>
              <li>✓ A clear first look at your goals</li>
              <li>✓ Guidance on a suitable consultation</li>
              <li>✓ A personalised next-step conversation</li>
            </ul>
          </div>
          <button className="imm-button imm-button--light" data-chatgrow-open>
            Request assessment →
          </button>
        </div>
      </section>

      <section className="imm-contact" id="contact">
        <div className="imm-container imm-contact__grid">
          <div>
            <span className="imm-eyebrow">Get in touch</span>
            <h2>Let’s turn your Canadian aspirations into a clear plan.</h2>
            <p>
              Contact KAS Immigration Services today to schedule a consultation
              and take the first step towards realizing your aspirations in
              Canada.
            </p>
          </div>
          <div className="imm-contact__list">
            <a href="tel:+12895210142">
              <small>Call us · Monday–Friday</small>
              <strong>+1 289-521-0142</strong>
            </a>
            <a href="mailto:info@kasimmigrationservices.com">
              <small>Email</small>
              <strong>info@kasimmigrationservices.com</strong>
            </a>
            <a href="https://wa.me/16479966546">
              <small>WhatsApp</small>
              <strong>+1 647-996-6546</strong>
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
