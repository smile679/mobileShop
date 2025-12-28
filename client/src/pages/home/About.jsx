import { Smartphone, ShieldCheck, Store } from "lucide-react";
import ShopMap from "../../components/shopmap/ShopMap";

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-15">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            Your trusted destination for quality smartphones and accessories.
            We focus on reliability, fair pricing, and helping customers choose
            the right device with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-2xl hover:shadow-lg transition">
            <Smartphone className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Latest & Used Devices
            </h3>
            <p classNames="text-gray-600 leading-7">
              We offer a wide selection of brand-new and carefully inspected
              used smartphones, ensuring quality and performance for every
              budget.
            </p>
          </div>
          <div className="p-8 border rounded-2xl hover:shadow-lg transition">
            <ShieldCheck className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Quality You Can Trust
            </h3>
            <p className="text-gray-600 leading-7">
              Every product is tested and verified before being displayed.
              Transparency and customer satisfaction are at the core of our
              service.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border rounded-2xl hover:shadow-lg transition">
            <Store className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Local Shop, Real Support
            </h3>
            <p className="text-gray-600 leading-7">
              We are a local mobile shop focused on long-term relationships,
              providing honest advice and after-sale support you can rely on.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-center py-5">Our phisical shop Located in Addis Ababa, Bole</h3>
        <ShopMap/>
      </div>
    </section>
  );
}

export default About;