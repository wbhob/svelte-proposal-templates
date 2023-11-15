/*
 * File: +template.server.js
 * Project: my-app
 * File Created: Wednesday, 15th November 2023 2:17:36 am
 * Author: Wilson Hobbs (wilson@lobby.so)
 * -----
 * Last Modified: Wednesday, 15th November 2023 2:28:30 am
 * Modified By: Wilson Hobbs (wilson@lobby.so>)
 * -----
 * Copyright (c) 2023 Lobby Technologies, Inc.
 */
export const load = async ({ fetch, url, depends }) => {
	depends('users');
	const limit = url.searchParams.get('limit') || 10;
	const res = await fetch('https://example.com/users?limit=' + limit);
	const data = await res.json();
	return data;
};
