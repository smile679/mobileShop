import { Repeat, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function TradeIn() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upgrade Your Phone Easily
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            Exchange or sell your current smartphone and move to a better one.
            We evaluate your device fairly and help you upgrade with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">
            <Repeat className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Bring Your Device
            </h3>
            <p className="text-gray-600 leading-7">
              Bring your phone to our shop. We accept both new and used devices
              in working condition.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">
            <DollarSign className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Get a Fair Evaluation
            </h3>
            <p className="text-gray-600 leading-7">
              Our experts inspect your phone based on condition, model, and
              performance to offer a fair value.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-white rounded-2xl border hover:shadow-lg transition">
            <CheckCircle className="w-10 h-10 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Upgrade or Get Paid
            </h3>
            <p className="text-gray-600 leading-7">
              Use your phone’s value to upgrade to a better device or receive
              instant payment.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="px-8 py-6 text-base rounded-xl">
            Visit Our Shop for Trade-In
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TradeIn;