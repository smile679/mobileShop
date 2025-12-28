import UserForm from "../../components/form/UserForm";
import ShopMap from "../../components/shopmap/ShopMap";

function Contact() {
  return (
    <section
    id="contact"
     className="w-full bg-gray-900 py-5 shadow-md shadow-gray-900">
      <div className="w-full flex flex-col items-center p-5">
        <div className="flex flex-col text-center gap-3 mb-10">
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
          <p className="text-white max-w-5xl text-md sm:text-lg"> Visit our physical stores located in the heart of bole or fill and submit the form below for any requests or questions.</p>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-5">
          <div className="w-full flex md:flex-1 justify-center items-center">
            <UserForm />
          </div>
          <div className="w-full flex md:flex-2 justify-center items-center">
            <ShopMap />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;