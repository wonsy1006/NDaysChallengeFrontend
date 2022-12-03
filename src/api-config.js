let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8080';
} else {
  backendHost =
    'http://prod-ndc-api-servie.ap-northeast-2.elasticbeanstlak.com';
}

export const API_BASE_URL = `${backendHost}`;
