/*
 * File: +template.server.js
 * Project: my-app
 * File Created: Wednesday, 15th November 2023 2:17:36 am
 * Author: Wilson Hobbs (wilson@lobby.so)
 * -----
 * Last Modified: Wednesday, 15th November 2023 2:28:20 am
 * Modified By: Wilson Hobbs (wilson@lobby.so>)
 * -----
 * Copyright (c) 2023 Lobby Technologies, Inc.
 */
export const actions = {
	// eslint-disable-next-line no-unused-vars
	async delete({ fetch, url, params }) {
		const res = await fetch('https://example.com/users/' + params.id, {
			method: 'DELETE'
		});
		return res.ok;
	}
};
