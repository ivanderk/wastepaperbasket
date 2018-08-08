export const environment: {
  production: boolean;
  restPathRoot: string;
  restServiceRoot: string;
  security: 'csrf' | 'jwt';
  mockserver: boolean;
} = {
  production: false,
  restPathRoot: 'http://localhost:3000/',
  restServiceRoot: 'http://localhost:3000/',
  security: 'jwt',
  mockserver: true,
};
