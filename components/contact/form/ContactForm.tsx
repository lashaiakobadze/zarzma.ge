import { useState } from "react";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/contact", {
      body: JSON.stringify({ name, email, subject, message }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    setSubmitting(false);
    if (res.ok) {
      // Success message
      console.log("Message sent successfully!");
    } else {
      // Error message
      console.error("Error sending message.");
    }
  };

  return (
    <form className={style.formGroup} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="სახელი"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        name="email"
        value={email}
        placeholder="ელფოსტა"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        name="subject"
        value={subject}
        placeholder="საგანი"
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <textarea
        name="message"
        value={message}
        placeholder="შეტყობინება"
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit" disabled={submitting}>
        {submitting ? "იგზავნება..." : "გაგზავნა"}
      </button>
    </form>
  );
};

export default ContactForm;
