import UserForm from "../../components/form/UserForm";
import ShopMap from "../../components/shopmap/ShopMap";

function Contact() {
  return (
    <section className="w-full bg-[#000000] py-10 shadow-lg shadow-gray-900">
      <div className="w-full flex flex-col items-center p-5">
        <div className="flex flex-col text-center gap-3 mb-5">
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
          <p className="text-white max-w-5xl text-md sm:text-lg"> Visit our physical stores located in the heart of bole or fill and submit the form below for any requests or questions.</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 ">
          <div className="w-full flex justify-center items-center">
            <UserForm />
          </div>
          <ShopMap />
        </div>
      </div>
    </section>
  )
}

export default Contact;