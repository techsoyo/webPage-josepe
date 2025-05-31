import { createContext, useState } from 'react';
import { IDENTITIES } from '../utils/constants';

export const IdentityContext = createContext({
  activeIdentity: IDENTITIES.CORPORATE,
  setActiveIdentity: () => {},
  toggleIdentity: () => {},
  isIdentityActive: () => {},
});

export const IdentityProvider = ({ children, initialIdentity = IDENTITIES.CORPORATE }) => {
  const [activeIdentity, setActiveIdentity] = useState(initialIdentity);

  const toggleIdentity = () => {
    if (activeIdentity === IDENTITIES.CORPORATE) {
      setActiveIdentity(IDENTITIES.ARTISTIC);
    } else if (activeIdentity === IDENTITIES.ARTISTIC) {
      setActiveIdentity(IDENTITIES.CORPORATE);
    } else {
      setActiveIdentity(IDENTITIES.CORPORATE);
    }
  };

  const isIdentityActive = (identity) => {
    return activeIdentity === identity;
  };

  const value = {
    activeIdentity,
    setActiveIdentity,
    toggleIdentity,
    isIdentityActive,
  };

  return (
    <IdentityContext.Provider value={value}>
      {children}
    </IdentityContext.Provider>
  );
};