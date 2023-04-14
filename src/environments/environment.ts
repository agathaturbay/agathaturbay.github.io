import { env } from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://localhost:3000/v1',
  defaultLanguage: 'Português - BR',
  supportedLanguages: ['English - US', 'Español - ES', 'Português - BR'],
};
