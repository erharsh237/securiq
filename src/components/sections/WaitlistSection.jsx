import WaitlistForm from '../ui/WaitlistForm';

export default function WaitlistSection() {
  return (
    <section className="section-waitlist" id="waitlist">
      <div className="waitlist-card">
        <h2 className="waitlist-title">Be first in when we open access.</h2>
        <p className="waitlist-subtitle">
          We're onboarding a small group of early teams before general availability, and shaping v1 around what they tell us.
        </p>
        <WaitlistForm showDetailed={true} buttonText="Get early access" />
      </div>
    </section>
  );
}
