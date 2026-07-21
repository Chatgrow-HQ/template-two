import SiteShell from "@/components/site/SiteShell";

const services = [
  {
    number: "01",
    title: "Permanent residence",
    copy: "Explore federal and provincial pathways based on your experience, education, language profile, and long-term goals.",
  },
  {
    number: "02",
    title: "Study permits",
    copy: "Get clear guidance on programme selection, admission documents, study permit requirements, and the journey ahead.",
  },
  {
    number: "03",
    title: "Work permits",
    copy: "Understand employer-supported and open work permit options, supporting evidence, and the steps that apply to you.",
  },
  {
    number: "04",
    title: "Family sponsorship",
    copy: "Prepare a well-organised application to reunite with a spouse, partner, child, parent, or other eligible relative.",
  },
  {
    number: "05",
    title: "Visit Canada",
    copy: "Build a temporary residence application with a clear travel purpose, financial evidence, and strong home-country ties.",
  },
  {
    number: "06",
    title: "Reviews & refusals",
    copy: "Identify gaps, respond to document requests, and better understand the options available after a refusal or fairness letter.",
  },
];

const steps = [
  ["01", "Start your assessment", "Tell us about your background, current situation, and what you hope to achieve in Canada."],
  ["02", "Understand your options", "Your information is reviewed against the pathways that may be relevant to your circumstances."],
  ["03", "Move forward clearly", "Receive practical next steps, document guidance, and a more organised route forward."],
];

export default function Home() {
  return (
    <SiteShell>
      <section className="imm-hero" id="home">
        <div className="imm-container imm-hero__grid">
          <div className="imm-hero__copy">
            <span className="imm-eyebrow">Canadian immigration guidance</span>
            <h1>A clearer path to your life in <em>Canada.</em></h1>
            <p>
              Understand your options for living, studying, working, visiting,
              or reuniting with family—with guidance designed around your real
              circumstances.
            </p>
            <a className="imm-button" href="#assessment">Start Assessment <span aria-hidden="true">↗</span></a>
            <div className="imm-hero__note"><span>Clear options</span><span>Personal guidance</span><span>Practical next steps</span></div>
          </div>
          <div className="imm-hero__visual">
            <img src="/assets/images/immigration/consultation.jpg" alt="An immigration adviser speaking with a couple" />
            <div className="imm-hero__caption"><strong>Your journey is personal.</strong><span>Your guidance should be too.</span></div>
          </div>
        </div>
      </section>

      <section className="imm-services" id="services">
        <div className="imm-container">
          <div className="imm-heading">
            <div><span className="imm-eyebrow">How we can help</span><h2>Canada pathways made easier to understand.</h2></div>
            <p>Immigration can feel complicated. We help you focus on the pathway, documents, and decisions that matter for your case.</p>
          </div>
          <div className="imm-service-grid">
            {services.map((service) => (
              <article className="imm-service" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="imm-about" id="about">
        <div className="imm-container imm-about__grid">
          <div className="imm-about__image">
            <img src="/assets/images/immigration/family-arrival.jpg" alt="A family beginning a new chapter in Canada" />
            <span>Built around real people,<br />not generic checklists.</span>
          </div>
          <div className="imm-about__copy">
            <span className="imm-eyebrow">Guidance that feels human</span>
            <h2>Make informed decisions with less uncertainty.</h2>
            <p>Every immigration journey involves more than forms. It can affect your family, education, career, finances, and future plans.</p>
            <p>Our approach starts by understanding where you are now. From there, we help organise the facts, explain possible routes in plain language, and show you what a well-prepared next step can look like.</p>
            <ul><li>Advice shaped around your circumstances</li><li>Clear document and evidence planning</li><li>Honest expectations at every stage</li></ul>
          </div>
        </div>
      </section>

      <section className="imm-process" id="process">
        <div className="imm-container">
          <div className="imm-heading imm-heading--compact">
            <div><span className="imm-eyebrow">A simple first step</span><h2>Know where you stand.</h2></div>
          </div>
          <div className="imm-process__grid">
            {steps.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="imm-assessment" id="assessment">
        <div className="imm-container imm-assessment__inner">
          <div>
            <span className="imm-eyebrow">Ready when you are</span>
            <h2>Your Canadian journey starts with the right questions.</h2>
          </div>
          <div>
            <p>Begin with a short assessment of your goals and background. The interactive assessment experience will be available here.</p>
            <button className="imm-button imm-button--light" type="button">Start Assessment <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
