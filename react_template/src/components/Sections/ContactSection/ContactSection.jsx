import { useContext } from 'react';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import { IDENTITIES } from '../../../utils/constants';
import Button from '../../UI/Button';

const ContactSection = () => {
  const { activeIdentity, isIdentityActive } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-500`}
      style={{
        backgroundColor: activeIdentity === IDENTITIES.CORPORATE
          ? colors.background
          : "#0F172A"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              color: activeIdentity === IDENTITIES.CORPORATE
                ? colors.primary
                : colors.accent
            }}
          >
            Get In Touch
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{
              color: activeIdentity === IDENTITIES.CORPORATE
                ? colors.text
                : "#E2E8F0"
            }}
          >
            Whether you're interested in business opportunities, educational services,
            or booking for a DJ event, I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: activeIdentity === IDENTITIES.CORPORATE ? "#4A5568" : "#E2E8F0" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-opacity-80"
                  style={{
                    borderColor: activeIdentity === IDENTITIES.CORPORATE ? "#CBD5E0" : "#2D3748",
                    backgroundColor: activeIdentity === IDENTITIES.CORPORATE ? "#FFFFFF" : "#1A202C",
                    color: activeIdentity === IDENTITIES.CORPORATE ? "#2D3748" : "#FFFFFF",
                    focusRingColor: activeIdentity === IDENTITIES.CORPORATE ? colors.primary : colors.accent
                  }}
                />
              </div>
              <div>
                <label
                  className="block mb-2 font-medium"
                  style={{ color: activeIdentity === IDENTITIES.CORPORATE ? "#4A5568" : "#E2E8F0" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-opacity-80"
                  style={{
                    borderColor: activeIdentity === IDENTITIES.CORPORATE ? "#CBD5E0" : "#2D3748",
                    backgroundColor: activeIdentity === IDENTITIES.CORPORATE ? "#FFFFFF" : "#1A202C",
                    color: activeIdentity === IDENTITIES.CORPORATE ? "#2D3748" : "#FFFFFF",
                    focusRingColor: activeIdentity === IDENTITIES.CORPORATE ? colors.primary : colors.accent
                  }}
                />
              </div>
            </div>

            <div>
              <label
                className="block mb-2 font-medium"
                style={{ color: activeIdentity === IDENTITIES.CORPORATE ? "#4A5568" : "#E2E8F0" }}
              >
                Subject
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-opacity-80"
                style={{
                  borderColor: activeIdentity === IDENTITIES.CORPORATE ? "#CBD5E0" : "#2D3748",
                  backgroundColor: activeIdentity === IDENTITIES.CORPORATE ? "#FFFFFF" : "#1A202C",
                  color: activeIdentity === IDENTITIES.CORPORATE ? "#2D3748" : "#FFFFFF",
                  focusRingColor: activeIdentity === IDENTITIES.CORPORATE ? colors.primary : colors.accent
                }}
              >
                <option value="business">Business Inquiry</option>
                <option value="aston">Aston School Information</option>
                <option value="dj">DJ Booking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                className="block mb-2 font-medium"
                style={{ color: activeIdentity === IDENTITIES.CORPORATE ? "#4A5568" : "#E2E8F0" }}
              >
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-opacity-80"
                style={{
                  borderColor: activeIdentity === IDENTITIES.CORPORATE ? "#CBD5E0" : "#2D3748",
                  backgroundColor: activeIdentity === IDENTITIES.CORPORATE ? "#FFFFFF" : "#1A202C",
                  color: activeIdentity === IDENTITIES.CORPORATE ? "#2D3748" : "#FFFFFF",
                  focusRingColor: activeIdentity === IDENTITIES.CORPORATE ? colors.primary : colors.accent
                }}
              ></textarea>
            </div>

            <div className="text-center">
              <Button
                variant={activeIdentity === IDENTITIES.CORPORATE ? "corporate" : "artistic"}
                size="lg"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg">
            <div
              className="inline-block p-4 rounded-full mb-4"
              style={{
                backgroundColor: activeIdentity === IDENTITIES.CORPORATE
                  ? `${colors.primary}20`
                  : `${colors.accent}20`
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
                style={{
                  color: activeIdentity === IDENTITIES.CORPORATE
                    ? colors.primary
                    : colors.accent
                }}
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.primary
                  : colors.accent
              }}
            >
              Email
            </h3>
            <p
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.text
                  : "#E2E8F0"
              }}
            >
              info@josepegarciaprofile.com
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div
              className="inline-block p-4 rounded-full mb-4"
              style={{
                backgroundColor: activeIdentity === IDENTITIES.CORPORATE
                  ? `${colors.primary}20`
                  : `${colors.accent}20`
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
                style={{
                  color: activeIdentity === IDENTITIES.CORPORATE
                    ? colors.primary
                    : colors.accent
                }}
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.primary
                  : colors.accent
              }}
            >
              Phone
            </h3>
            <p
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.text
                  : "#E2E8F0"
              }}
            >
              +34 93 123 4567
            </p>
          </div>

          <div className="p-6 rounded-lg">
            <div
              className="inline-block p-4 rounded-full mb-4"
              style={{
                backgroundColor: activeIdentity === IDENTITIES.CORPORATE
                  ? `${colors.primary}20`
                  : `${colors.accent}20`
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
                style={{
                  color: activeIdentity === IDENTITIES.CORPORATE
                    ? colors.primary
                    : colors.accent
                }}
              >
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.primary
                  : colors.accent
              }}
            >
              Location
            </h3>
            <p
              style={{
                color: activeIdentity === IDENTITIES.CORPORATE
                  ? colors.text
                  : "#E2E8F0"
              }}
            >
              Barcelona, Spain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;