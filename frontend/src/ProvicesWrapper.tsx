import App from './App';
import { AuthProvider } from './contexts/KeyCloakAuthContext';

const ProviderWrapper = () => {
  return (
    <AuthProvider>
      <App></App>
    </AuthProvider>
  );
};

export default ProviderWrapper;
