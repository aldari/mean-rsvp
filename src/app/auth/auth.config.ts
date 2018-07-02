// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
	CLIENT_ID: string;
	CLIENT_DOMAIN: string;
	AUDIENCE: string;
	REDIRECT: string;
	SCOPE: string;
	NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
	CLIENT_ID: 's3S68nun520YSHLB1Ea96T1KBRThxcrO',
	CLIENT_DOMAIN: 'eldar.eu.auth0.com', // e.g., you.auth0.com
	AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
	REDIRECT: `${ENV.BASE_URI}/callback`,
	SCOPE: 'openid profile',
	NAMESPACE: 'http://myapp.com/roles'
};
