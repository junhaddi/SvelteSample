import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET() {
	return json(comments);
}

export async function POST(requestEvent) {
	const { request } = requestEvent;
	const { text } = await request.json();
	const newComments = {
		id: comments.length + 1,
		text
	};
	comments.push(newComments);

	// return new Response(JSON.stringify(newComments), { status: 201 });
	return json(newComments, { status: 201 });
}
