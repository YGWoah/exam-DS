import axios from 'axios';
import keycloakService from '@app/services/keycloack';

let CONFERENCE_API_URL = 'http://localhost:8089/CONFERENCE-SERVICE';
let CONFERENCE_API_URL_NOT_GATEWAY = 'http://localhost:8082';

export const createApiInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  });

  instance.interceptors.request.use(async (config) => {
    try {
      if (keycloakService.isTokenExpired()) {
        await keycloakService.updateToken();
      }
      const token = keycloakService.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        try {
          await keycloakService.updateToken();
          const token = keycloakService.getToken();
          error.config.headers.Authorization = `Bearer ${token}`;
          return instance(error.config);
        } catch (e) {
          keycloakService.login();
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const conferenceApi = createApiInstance(
  CONFERENCE_API_URL_NOT_GATEWAY
);

export { conferenceApi };
