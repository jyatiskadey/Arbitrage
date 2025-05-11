import React, { useState } from "react";

const FaqPage = () => {
  const faqs = [
    {
      question: "What is Arbitrage Live?",
      answer:
        "Arbitrage Live is a platform that allows users to earn through crypto-based arbitrage trading. It ensures transparency, automation, and efficient earning potential.",
    },
    {
      question: "How do I register on the platform?",
      answer:
        "Click on the 'Register' button on the homepage and fill in your details. Once verified, you can start using our platform immediately.",
    },
    {
      question: "Is my investment safe?",
      answer:
        "Yes, your investment is secured with multi-layered encryption and real-time monitoring systems in place to protect user funds and data.",
    },
    {
      question: "What is the minimum deposit required?",
      answer:
        "The minimum deposit required to begin trading is $100. This ensures you have sufficient capital to take advantage of arbitrage opportunities.",
    },
    {
      question: "How can I withdraw my earnings?",
      answer:
        "You can withdraw earnings anytime by clicking the 'Withdraw' button in your dashboard. Withdrawals are processed within 24 hours.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>
      <p style={styles.subheading}>
        Everything you need to know about our platform, accounts, safety and
        transactions.
      </p>

      <div style={styles.faqBox}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              style={{
                ...styles.question,
                ...(activeIndex === index ? styles.questionActive : {}),
              }}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={{ margin: 0 }}>{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div style={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0b051f",
    color: "#ffffff",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  subheading: {
    textAlign: "center",
    color: "#a5b4fc",
    marginBottom: "40px",
    maxWidth: "700px",
    marginInline: "auto",
  },
  faqBox: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#161129",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 0 20px rgba(255,255,255,0.05)",
  },
  question: {
    padding: "20px",
    borderBottom: "1px solid #2c2449",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  questionActive: {
    backgroundColor: "#1f1b37",
  },
  answer: {
    padding: "0 20px 20px",
    color: "#d1d5db",
    lineHeight: "1.6",
    animation: "fadeIn 0.3s ease-in-out",
  },
};

export default FaqPage;
