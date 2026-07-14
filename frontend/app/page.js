import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";

const pathways = [
  ["01", "Study permits", "Guidance for students choosing programmes, preparing documents, and planning the next step after admission."],
  ["02", "Skilled migration", "A structured review of work history, qualifications, language results, and eligible economic pathways."],
  ["03", "Family sponsorship", "Clear support for couples and families preparing relationship evidence and complete applications."],
  ["04", "Work permits", "Practical guidance for employer-supported applications, open permits, and accompanying family members."],
  ["05", "Visitor visas", "Well-organised temporary residence applications with a clear purpose of travel and supporting evidence."],
  ["06", "Application review", "A second set of experienced eyes before you submit, with gaps and inconsistencies clearly identified."],
];

const steps = [["01","Tell us your goal"],["02","Understand your options"],["03","Prepare with clarity"],["04","Submit with confidence"]];

export default function Home() {
  return (
    <SiteShell>
      <section className="ns-hero">
        <div className="ns-container ns-hero__grid">
          <div className="ns-hero__content">
            <span className="ns-label">Immigration advice, made human</span>
            <h1>A clearer route to your <span>next chapter.</span></h1>
            <p>Dummy consultancy copy for a trusted team helping individuals, families, students, and professionals navigate immigration decisions with less uncertainty.</p>
            <div className="ns-actions"><Link href="/contact" className="ns-button ns-button--red">Check your options <span>→</span></Link><Link href="/visa" className="ns-button ns-button--light">Explore pathways</Link></div>
          </div>
          <img className="ns-hero__image" src="/assets/images/immigration/consultation.jpg" alt="Couple discussing their immigration options with an adviser" />
        </div>
      </section>

      <section className="ns-assessment" aria-label="Quick eligibility assessment">
        <form className="ns-container"><div className="ns-assessment__inner">
          <div className="ns-assessment__intro"><h2>Start with a quick assessment</h2><p>Share a few details and we will point you in the right direction.</p></div>
          <div className="ns-field"><label htmlFor="destination">Destination</label><select id="destination" defaultValue=""><option value="" disabled>Select a country</option><option>Canada</option><option>United Kingdom</option><option>Australia</option></select></div>
          <div className="ns-field"><label htmlFor="pathway">Pathway</label><select id="pathway" defaultValue=""><option value="" disabled>What is your goal?</option><option>Study</option><option>Work</option><option>Join family</option></select></div>
          <div className="ns-field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@example.com" /></div>
          <button className="ns-button" type="submit">Get started</button>
        </div></form>
      </section>

      <section className="ns-section"><div className="ns-container">
        <div className="ns-trust"><div><strong>10+ years</strong><span>Combined advisory experience</span></div><div><strong>6 pathways</strong><span>For study, work, and family goals</span></div><div><strong>20+ countries</strong><span>Clients supported worldwide</span></div><div><strong>1:1 support</strong><span>A real person throughout the process</span></div></div>
      </div></section>

      <section className="ns-section ns-section--soft"><div className="ns-container">
        <div className="ns-section-head"><div><span className="ns-label">How we can help</span><h2>Immigration pathways explained without the noise.</h2></div><p>Every case starts with your circumstances—not a generic checklist. These placeholder services can be replaced with the firm&apos;s real areas of practice.</p></div>
        <div className="ns-card-grid">{pathways.map(([number,title,copy]) => <article className="ns-card" key={title}><span className="ns-card__number">{number}</span><h3>{title}</h3><p>{copy}</p><Link href="/visa" className="ns-text-link">Learn about this pathway →</Link></article>)}</div>
      </div></section>

      <section className="ns-section"><div className="ns-container ns-split">
        <img src="/assets/images/immigration/family-arrival.jpg" alt="Family settling into a new city after relocating" />
        <div><span className="ns-label">Advice built around real lives</span><h2>More than paperwork. A plan for what comes next.</h2><p>Immigration decisions affect careers, education, finances, and family life. Our dummy consultancy model combines careful application preparation with practical conversations about timing, risks, and realistic next steps.</p><div className="ns-checks"><span>Clear written recommendations</span><span>Document-by-document guidance</span><span>Honest timelines and expectations</span><span>Consistent case updates</span></div><Link href="/about-us" className="ns-button">Why clients choose us</Link></div>
      </div></section>

      <section className="ns-section ns-section--cream"><div className="ns-container">
        <div className="ns-section-head"><div><span className="ns-label">A simple process</span><h2>Know what happens at every stage.</h2></div></div>
        <div className="ns-process">{steps.map(([number,title],index) => <div className="ns-step" key={title}><span>{number}</span><h3>{title}</h3><p>{["Tell us where you are now and what you hope to achieve.","Receive a practical pathway review based on the information provided.","Work through a clear evidence plan with organised support.","Complete a final review and understand what follows after submission."][index]}</p></div>)}</div>
      </div></section>

      <section className="ns-section"><div className="ns-container">
        <div className="ns-section-head"><div><span className="ns-label">Popular destinations</span><h2>Explore where your plans could take you.</h2></div><Link href="/countries" className="ns-text-link">View all destinations →</Link></div>
        <div className="ns-image-grid">
          <Link href="/countries" className="ns-image-card"><img src="/assets/images/resource/countries-2.jpg" alt="Canada"/><div><h3>Canada</h3><p>Study, skilled work, and family pathways</p></div></Link>
          <Link href="/countries" className="ns-image-card"><img src="/assets/images/resource/countries-3.jpg" alt="United Kingdom"/><div><h3>United Kingdom</h3><p>Study, work, and settlement routes</p></div></Link>
          <Link href="/countries" className="ns-image-card"><img src="/assets/images/resource/countries-4.jpg" alt="Australia"/><div><h3>Australia</h3><p>Skilled migration and study options</p></div></Link>
        </div>
      </div></section>

      <section className="ns-section ns-section--soft"><div className="ns-container">
        <div className="ns-section-head"><div><span className="ns-label">Client experiences</span><h2>Support that feels clear from day one.</h2></div></div>
        <div className="ns-testimonials"><article className="ns-quote"><blockquote>“The process stopped feeling overwhelming once every document had a clear purpose and deadline.”</blockquote><strong>Ada &amp; Tunde</strong><span>Family application</span></article><article className="ns-quote"><blockquote>“I appreciated the honest explanation of my options. There was no pressure and no unrealistic promise.”</blockquote><strong>Kelechi M.</strong><span>Study pathway</span></article><article className="ns-quote"><blockquote>“The final review caught details I would have missed and gave me much more confidence before submission.”</blockquote><strong>Michael O.</strong><span>Work permit application</span></article></div>
      </div></section>

      <section className="ns-section"><div className="ns-container"><div className="ns-cta"><div><h2>Your immigration plan deserves a clear first step.</h2><p>Book a confidential consultation and leave with a better understanding of your available options.</p></div><Link href="/contact" className="ns-button ns-button--red">Book a consultation →</Link></div></div></section>
    </SiteShell>
  );
}
