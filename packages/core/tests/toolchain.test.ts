import assert from 'node:assert/strict';
import { test } from 'node:test';

interface IGreeting {
	name: string;
}

function greet({ name }: IGreeting): string {
	return `Hello, ${name}`;
}

test('Node runs TypeScript directly', () => {
	assert.equal(greet({ name: 'Mercury' }), 'Hello, Mercury');
});
