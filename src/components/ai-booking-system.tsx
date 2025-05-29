import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, DollarSign, CheckCircle, ArrowRight, User, Mail, Phone, Building } from 'lucide-react';

const BookingSystem = () => {
  type Package = {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    introPrice: number;
    duration: string;
    description: string;
    features: string[];
    ideal: string;
    color: string;
  };

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState(false);

  // Replace these with your actual API keys
  const STRIPE_PUBLISHABLE_KEY = 'pk_test_51RPTfmEzzAUiymcePMZijFpK2DThqsO92mWsDJSYgezv5iBpHm9YiqQaTFhD6h5c24HTfOaMbtQN1oA0kp13VwkJ00hCVlTa0z';
  const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

  const packages = [
    {
      id: 'kickstart',
      name: 'Kickstart Plan',
      subtitle: 'Attract & Engage Faster',
      price: 897,
      introPrice: 597,
      duration: '2-3 weeks',
      description: 'Perfect for businesses needing fresh content and improved local visibility',
      features: [
        'AI-generated social media content for 2 platforms (10-12 posts)',
        'Engaging headlines & CTAs for digital ads',
        'Website copy for 1-2 core pages',
        'Local SEO keyword suggestions',
        '1 round of human review & refinement'
      ],
      ideal: 'Businesses struggling with social media or wanting better local visibility',
      color: 'bg-blue-500'
    },
    {
      id: 'connection',
      name: 'Connection Plan',
      subtitle: 'Smart Customer Service',
      price: 800,
      introPrice: 497,
      duration: '1-2 weeks',
      description: 'Streamline customer service with AI-powered solutions',
      features: [
        'AI-generated FAQ responses (5-7 common questions)',
        'Basic AI chatbot script drafts',
        'Customer review analysis & sentiment tracking',
        'Draft responses for positive & negative reviews',
        '1 round of human review & refinement'
      ],
      ideal: 'Businesses with repetitive inquiries needing better review management',
      color: 'bg-green-500'
    },
    {
      id: 'efficiency',
      name: 'Efficiency Plan',
      subtitle: 'Automate & Save Time',
      price: 725,
      introPrice: 447,
      duration: '1-2 weeks',
      description: 'Free up your team from repetitive tasks with smart automation',
      features: [
        'AI-assisted internal document drafting (2 key documents)',
        'Report summarization & key insights extraction',
        '1-hour AI brainstorming session (remote/in-person)',
        'Automation opportunity identification',
        'Implementation guidance & support'
      ],
      ideal: 'Businesses overwhelmed with admin tasks wanting to focus on growth',
      color: 'bg-purple-500'
    }
  ];

  // Generate available time slots (9 AM to 5 PM, excluding lunch 12-1 PM)
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  // Generate next 30 days (excluding weekends)
  const generateAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

    while (dates.length < 20) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude weekends
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setCurrentStep(2);
  };

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setCurrentStep(3);
    }
  };

  const handleCustomerInfoSubmit = () => {
    if (customerInfo.name && customerInfo.email) {
      setCurrentStep(4);
    }
  };

  const processPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Stripe Payment Intent creation would go here
      // const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
      
      // For now, simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Send confirmation email via EmailJS
      if (!selectedPackage) {
        throw new Error('No package selected');
      }
      const emailData = {
        to_email: customerInfo.email,
        customer_name: customerInfo.name,
        package_name: selectedPackage.name,
        package_price: selectedPackage.introPrice,
        booking_date: selectedDate,
        booking_time: selectedTime,
        company: customerInfo.company,
        message: customerInfo.message
      };

      // EmailJS send would go here
      // await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_PUBLIC_KEY);
      
      setCurrentStep(5);
    } catch (error) {
      console.error('Payment processing failed:', error);
      alert('Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        {/* Progress Bar */}
        {/* <motion.div initial ... /> */}
      {/* Step 1: Package Selection */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Choose Your AI-Powered Solution
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                   onClick={() => handlePackageSelect(pkg)}>
                <div className={`w-full h-2 ${pkg.color} rounded-t-lg mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">${pkg.introPrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${pkg.price}</span>
                  <span className="text-sm text-green-600 ml-2">Intro Rate!</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Date & Time Selection */}
      {currentStep === 2 && selectedPackage && (
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Schedule Your Session</h2>
            <p className="text-gray-600">Selected: {selectedPackage.name} - ${selectedPackage.introPrice}</p>
          </div>
          
                      <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Select Date
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {availableDates.slice(0, 10).map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                    className={`p-3 text-sm rounded-lg border transition-colors ${
                      selectedDate === date.toISOString().split('T')[0]
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Select Time
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm rounded-lg border transition-colors ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedDate && selectedTime && (
            <div className="text-center mt-8">
              <button
                onClick={handleDateTimeSelect}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center mx-auto"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
      )}  

      {/* Step 3: Customer Information */}
      {currentStep === 3 && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Your Information</h2>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                required
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Company Name
              </label>
              <input
                type="text"
                value={customerInfo.company}
                onChange={(e) => setCustomerInfo({...customerInfo, company: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your business needs
              </label>
              <textarea
                rows={4}
                value={customerInfo.message}
                onChange={(e) => setCustomerInfo({...customerInfo, message: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What challenges are you facing? What are your goals?"
              />
            </div>

            <button
              onClick={handleCustomerInfoSubmit}
              disabled={!customerInfo.name || !customerInfo.email}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50"
            >
              Continue to Payment <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Payment Confirmation */}
      {currentStep === 4 && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Confirm Your Booking</h2>
          <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Package:</span>
                <span>{selectedPackage?.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{formatDate(new Date(selectedDate))}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>{selectedPackage?.duration}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${selectedPackage?.introPrice}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={processPayment}
              disabled={isProcessing}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 flex items-center mx-auto"
            >
              {isProcessing ? (
                <>Processing... <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full ml-2" /></>
              ) : (
                <>Confirm & Pay <DollarSign className="w-4 h-4 ml-2" /></>
              )}
            </button>
            <p className="text-xs text-gray-500 mt-2">Secure payment processed by Stripe</p>
          </div>
        </div>
      )}

      {/* Step 5: Confirmation */}
      {currentStep === 5 && (
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you, {customerInfo.name}! Your {selectedPackage?.name} session is scheduled for{' '}
            {formatDate(new Date(selectedDate))} at {selectedTime}.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6 max-w-md mx-auto">
            <p className="text-sm text-blue-800">
              📧 A confirmation email has been sent to {customerInfo.email} with all the details and next steps.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            We'll be in touch within 24 hours to discuss your specific needs and get started on transforming your business with AI!
          </p>
        </div>
      )}
      {/* End of Steps */}
    </div>
    </section>
  );
};

export default BookingSystem;