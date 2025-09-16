import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      // If you don't have a backend, use Formspree/Netlify Forms or connect to an endpoint later
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send (no backend configured).");
    }
  };

  return (
    <section className="py-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={form.name} onChange={handleChange} name="name" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input value={form.email} onChange={handleChange} name="email" type="email" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea value={form.message} onChange={handleChange} name="message" className="form-control" rows="4" required/>
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
        <div className="mt-2">{status}</div>
      </form>
    </section>
  );
}
