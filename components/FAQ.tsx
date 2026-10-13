const questions = [
  {
    question: "What information should I include in a security request?",
    answer: "Include the site or business location, the type of premises, the service you are considering, approximate staffing or coverage needs, operating hours and your preferred start date. You can share what is already known; HSSGL can clarify any missing details during follow-up.",
  },
  {
    question: "How soon can security personnel be deployed?",
    answer: "Deployment timing cannot be confirmed until HSSGL has reviewed the location, scope, staffing needs and availability. Include your target start date in the form so the company can assess the request and discuss a realistic timeline with you.",
  },
  {
    question: "Can I request security for more than one site?",
    answer: "Yes, you can describe a multi-site requirement in your enquiry. List each location, the type of site and the coverage needed at each one. HSSGL will need to review the scope and confirm what can be supported before any arrangement is agreed.",
  },
  {
    question: "Can I enquire about temporary or event security?",
    answer: "You can submit an enquiry for a time-limited requirement or event. Include the event or assignment date, venue, expected attendance or site activity, hours of coverage and any particular access or safety concerns. Availability and service scope must be confirmed directly.",
  },
  {
    question: "Does submitting the form confirm a booking?",
    answer: "No. The form sends an enquiry only; it is not a contract or confirmation of deployment. The details, availability, scope, fees, terms and any applicable authorisations must be discussed and agreed before a service begins.",
  },
  {
    question: "What happens after I submit my enquiry?",
    answer: "Your details are sent to the HSSGL contact email for review. The company can then follow up to clarify the requirement and discuss possible next steps. Please provide a working phone number or email address so you can be contacted.",
  },
];

export function FAQ() {
  return <section className="section faq-section">
    <div className="container narrow">
      <div className="section-title align-center"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Before you send an enquiry</h2><p>Practical guidance for planning a security request. Specific availability and terms are confirmed directly by HSSGL.</p></div>
      <div className="faq-list">
        {questions.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
      </div>
    </div>
  </section>;
}
