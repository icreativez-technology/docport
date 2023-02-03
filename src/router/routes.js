// importing components
import admin from './admin/public.js';
import adminAuthenticate from './admin/authanticate.js';

// building routes & injecting components
const routes = [
    admin,
    adminAuthenticate,
];

export default routes;
