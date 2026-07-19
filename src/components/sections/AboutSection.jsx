export default function AboutSection() {
  return (
    <section className="section-about">
      <div className="section-inner about-3col-layout">
        <div className="about-text-col">
          <p>
            Somewhere between 10 and 200 people, you hit a wall. Real AWS accounts. Real customer data. Zero dedicated security engineers. Enterprise tools expect you to stare at a dashboard all day. You don't have time for that.
          </p>
        </div>
        <div className="about-text-col">
          <p>
            So misconfigs sit unnoticed. A bucket goes public. A key leaks in a commit. A security group opens too wide. Not from negligence. Just because it's nobody's job to catch it.
          </p>
        </div>
        <div className="about-heading-col">
          <h2 className="about-title-right">
            You have production infrastructure.<br />
            You don't have a security team.
          </h2>
        </div>
      </div>
    </section>
  );
}
