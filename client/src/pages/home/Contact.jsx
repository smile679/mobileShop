import UserForm from "../../components/UserForm";

function Contact() {
  return (
    <section>
      <div className="w-full flex flex-col items-center bg-linear-to-l from-[#353535] to-[#000000]  h-100">
        <div className="flex flex-col text-center gap-3 py-5">
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
          <p className="text-white w-5xl text-2xl">Visit our physical stores located in the heart of bole or fill and submit the form below for any requests or questions.</p>
        </div>
        <div className="flex">
          <UserForm />
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Contact;