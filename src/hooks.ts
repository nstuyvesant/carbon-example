import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {

  const response = await resolve(event, {
		ssr: false //!event.request.url.includes('/admin')
	})

  return response
}