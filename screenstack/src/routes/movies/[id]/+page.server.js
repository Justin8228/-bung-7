import db from '#lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	return { movie: await db.getMovie(params.id) };
}

export const actions = {
	delete: async ({ params }) => {
		await db.deleteMovie(params.id);
		redirect(303, '/movies');
	}
};