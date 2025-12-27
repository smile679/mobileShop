import { useState } from "react";

function UserForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section className="w-full flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full p-6 rounded-xl border border-zinc-400 shadow-lg flex flex-col gap-2"
      >
        <h2 className="text-white text-xl font-semibold text-center">
          Contact Us
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-zinc-100 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border border-zinc-200 rounded-md px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-zinc-200 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="border border-zinc-200 rounded-md px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-zinc-200 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows={4}
            required
            className="border border-zinc-200 rounded-md px-3 py-2 text-white placeholder-zinc-500 resize-none focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 bg-white text-black font-semibold py-2 rounded-md hover:bg-zinc-200 transition cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default UserForm;