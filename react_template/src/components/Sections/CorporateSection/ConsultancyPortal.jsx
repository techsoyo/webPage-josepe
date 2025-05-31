import { useContext, useState } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import Button from '../../UI/Button';

const ConsultancyPortal = () => {
  const { colors } = useContext(ColorSchemeContext);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceType: 'digital-strategy',
    budget: '',
    timeline: 'not-specified',
    message: '',
    consent: false
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend API
    // For now, we'll simulate a successful submission
    if (!formData.consent) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please provide consent to process your data.'
      });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your inquiry. We\'ll contact you shortly to discuss your project!'
      });
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        serviceType: 'digital-strategy',
        budget: '',
        timeline: 'not-specified',
        message: '',
        consent: false
      });
    }, 1000);
  };

  const serviceTypes = [
    { value: 'digital-strategy', label: 'Digital Marketing Strategy' },
    { value: 'brand-development', label: 'Brand Development' },
    { value: 'market-research', label: 'Market Research & Analysis' },
    { value: 'content-strategy', label: 'Content Strategy' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (< 1 month)' },
    { value: 'short-term', label: 'Short-term (1-3 months)' },
    { value: 'medium-term', label: 'Medium-term (3-6 months)' },
    { value: 'long-term', label: 'Long-term (6+ months)' },
    { value: 'not-specified', label: 'Not specified yet' },
  ];

  return (
    <div className="py-12">
      <h3 
        className="text-3xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Consultancy Services
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h4 
              className="text-xl font-semibold mb-4"
              style={{ color: colors.primary }}
            >
              Why Work With Me
            </h4>
            <ul className="space-y-4">
              {[
                {
                  title: 'Strategic Vision',
                  description: 'Combining corporate expertise with creative insights for unique marketing approaches.'
                },
                {
                  title: 'Education Background',
                  description: 'Applied academic knowledge and research to solve real business challenges.'
                },
                {
                  title: 'Cross-Industry Experience',
                  description: 'Insights from both corporate marketing and entertainment sectors.'
                },
                {
                  title: 'Results-Driven Approach',
                  description: 'Focus on measurable outcomes and ROI for all consultancy projects.'
                }
              ].map((item, index) => (
                <li key={index} className="mb-3">
                  <div 
                    className="font-medium mb-1" 
                    style={{ color: colors.primary }}
                  >
                    {item.title}
                  </div>
                  <p 
                    className="text-sm" 
                    style={{ color: colors.text }}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 
              className="text-xl font-semibold mb-6"
              style={{ color: colors.primary }}
            >
              Request a Consultation
            </h4>

            {formStatus.submitted ? (
              <div 
                className="bg-green-50 p-4 rounded-md text-center"
                style={{ borderColor: colors.accent }}
              >
                <p className="text-green-700 font-medium">{formStatus.message}</p>
                <Button 
                  variant="corporate" 
                  size="md" 
                  className="mt-4"
                  onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="company" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="serviceType" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    >
                      {serviceTypes.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="budget" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Budget Range
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      placeholder="e.g., €5,000 - €10,000"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="timeline" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    >
                      {timelineOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded focus:ring focus:ring-opacity-50"
                      style={{ borderColor: colors.secondary, outline: 'none' }}
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <label 
                        htmlFor="consent" 
                        className="ml-2 block text-sm"
                        style={{ color: colors.text }}
                      >
                        I consent to having this website store my information for future correspondence. See our <a href="#" style={{ color: colors.primary }}>Privacy Policy</a> for more information.
                      </label>
                    </div>
                    {formStatus.error && (
                      <p className="text-red-500 text-sm mt-1">{formStatus.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="corporate"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Request Consultation
                  </Button>
                </div>

                <p className="text-xs mt-4" style={{ color: colors.text }}>
                  * Required fields. Your information will be processed according to our GDPR-compliant data protection policies.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPortal;