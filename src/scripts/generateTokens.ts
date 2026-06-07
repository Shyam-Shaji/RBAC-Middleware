import dotenv from 'dotenv';
dotenv.config();

import { generateToken } from '@/utils/jwt';
import { Role } from '@/types/role';

const adminToken = generateToken(
    'admin_001',
    Role.ADMIN
);

const editorToken = generateToken(
    'editor_001',
    Role.EDITOR,
);

const contributorToken = generateToken(
    'contributor_001',
    Role.CONTRIBUTOR
);

console.log("\nADMIN TOKEN:");
console.log(adminToken);

console.log("\nEDITOR TOKEN:");
console.log(editorToken);

console.log("\nCONTRIBUTOR TOKEN:");
console.log(contributorToken);