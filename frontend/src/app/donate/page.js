"use client";
import { useState } from "react";
import { Heart, CreditCard, Landmark, Smartphone, ArrowLeft, CheckCircle } from "lucide-react";
import { processPayment } from "@/lib/razorpay";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("scholarships");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    pan: "",
  });

  const campaigns = [
    {
      id: "scholarships",
      title: "Scholarships for Students",
      description: "Support education for underprivileged children and youth through scholarships and educational aid.",
      beneficiaries: "1,200+",
      daysLeft: 30,
      raised: 250000,
      goal: 1000000,
      image: "/api/placeholder/300/200"
    },
    {
      id: "medical-relief",
      title: "Medical Relief Fund",
      description: "Help provide medical aid, hospital support, and health relief to those in need.",
      beneficiaries: "800+",
      daysLeft: 15,
      raised: 180000,
      goal: 500000,
      image: "/api/placeholder/300/200"
    },
    {
      id: "social-welfare",
      title: "Social Welfare Initiatives",
      description: "Contribute to our programs for widows, orphans, the elderly, and the distressed, including food, shelter, and social support.",
      beneficiaries: "2,000+",
      daysLeft: 45,
      raised: 320000,
      goal: 1200000,
      image: "/api/placeholder/300/200"
    }
  ];

  const presetAmounts = [100, 250, 500, 1000, 2500, 5000];
  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard },
    { id: "upi", name: "UPI", icon: Smartphone },
    { id: "netbanking", name: "Net Banking", icon: Landmark },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setPaymentError("Please fill in all required fields");
      return;
    }

    if (!selectedAmount || selectedAmount <= 0) {
      setPaymentError("Please select a valid donation amount");
      return;
    }

    setIsProcessing(true);
    setPaymentError("");

    const selectedCampaignData = campaigns.find(c => c.id === selectedCampaign);

    try {
      await processPayment({
        amount: selectedAmount,
        donorInfo: formData,
        campaign: selectedCampaignData?.title || "General Donation",
        onSuccess: (paymentData) => {
          console.log("Payment successful:", paymentData);
          setPaymentSuccess(true);
          setIsProcessing(false);
          
          // You can send this data to your backend for record keeping
          // savePaymentRecord(paymentData);
        },
        onFailure: (error) => {
          console.error("Payment failed:", error);
          setPaymentError(error);
          setIsProcessing(false);
        }
      });
    } catch (error) {
      console.error("Payment processing error:", error);
      setPaymentError("Failed to process payment. Please try again.");
      setIsProcessing(false);
    }
  };

  const selectedCampaignData = campaigns.find(c => c.id === selectedCampaign);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Modal */}
      {paymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-4">
                Your donation of ₹{selectedAmount.toLocaleString()} has been processed successfully.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                You will receive a tax exemption certificate via email shortly.
              </p>
              <button
                onClick={() => {
                  setPaymentSuccess(false);
                  // Reset form for new donation
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    city: "",
                    state: "",
                    pincode: "",
                    pan: "",
                  });
                  setSelectedAmount(500);
                  setCustomAmount("");
                }}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
          <h1 className="text-3xl font-bold text-gray-900">Make a Donation</h1>
          <p className="text-gray-600 mt-2">Your contribution helps us provide education, health, and social welfare to those in need.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaign Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl text-gray-600 font-semibold mb-4">Choose a Campaign</h2>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedCampaign === campaign.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedCampaign(campaign.id)}
                  >
                    <h3 className="font-semibold text-gray-900">{campaign.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>
                    {campaign.beneficiaries && (
                      <div className="mt-3 text-sm text-gray-500">
                        <div>{campaign.beneficiaries} Beneficiaries</div>
                        <div>{campaign.daysLeft} Days left</div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>₹{campaign.raised.toLocaleString()}</span>
                            <span>₹{(campaign.goal / 100000).toFixed(1)}L goal</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl text-gray-600 font-semibold mb-6">Donation Details</h2>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount (₹)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-2 px-4 rounded-lg text-gray-700 border text-sm font-medium transition-colors ${
                        selectedAmount === amount
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSelectedAmount(amount)}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setSelectedAmount(parseInt(e.target.value) || 0);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="text-gray-500">₹</span>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number (for tax exemption)
                    </label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center text-gray-900 p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === method.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <method.icon className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="font-medium">{method.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tax Exemption Info */}
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Tax Exemption</h4>
                <p className="text-sm text-green-700">
                  All donations to Kautike Charitable Foundation are tax-exempted under section 80G of the Income Tax Act. 
                  You will receive a tax exemption certificate via email.
                </p>
              </div>

              {/* Error Message */}
              {paymentError && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{paymentError}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !formData.name || !formData.email || !formData.phone}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    Donate ₹{selectedAmount.toLocaleString()}
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                By clicking "Donate", you agree to our terms and conditions. 
                Your donation is secure and encrypted.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 