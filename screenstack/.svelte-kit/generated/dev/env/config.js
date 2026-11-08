import { variables } from "../../../../src/env.js";
import { validate, handle_issues } from '@sveltejs/kit/internal/env';

const issues = {};

export { variables }

export const dynamic_private_env = {};

export const explicit_public_env = {};

export const rendered_env = {};

handle_issues(issues);

export function set_env(env) {
	const issues = {};
	const DB_URI = validate(variables, env.DB_URI, "DB_URI", issues);
	dynamic_private_env.DB_URI = DB_URI;
	handle_issues(issues);
}

set_env({DB_URI:"mongodb+srv://valiyjus:Skulduggery.2@cluster0.ucg1jde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"});