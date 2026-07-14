import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";

export default function BlogDetailsPage() {
  return (
    <SiteShell>
      <article className="ns-article-page">
        <div className="ns-container ns-article-page__inner">
          <Link href="/blog" className="ns-text-link">← Back to insights</Link>
          <span className="ns-label">Application planning</span>
          <h1>Before you choose an immigration pathway</h1>
          <p className="ns-article-page__lead">A practical framework for comparing your options before investing time and money in an application.</p>
          <img src="/assets/images/immigration/consultation.jpg" alt="Clients reviewing their immigration options with an adviser" />
          <div className="ns-article-page__body">
            <h2>Begin with the outcome you want</h2>
            <p>Immigration programmes are tools, not goals. Start by defining whether your priority is education, work experience, family reunification, long-term residence, or a temporary visit.</p>
            <h2>Check the complete eligibility picture</h2>
            <p>Qualifications, work history, finances, language results, family circumstances, and timing can all affect which route is realistic. Review them together rather than relying on one strong factor.</p>
            <h2>Plan the evidence before the deadline</h2>
            <p>A clear evidence list helps you identify documents that require extra time, such as employment letters, financial records, translations, or civil documents.</p>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
