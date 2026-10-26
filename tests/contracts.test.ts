/**
 * Validates portable Crypto Chat SDK trust boundaries.
 * Ensures service URLs cannot embed credentials or downgrade transport security.
 *
 * Author: Carlos Delfino
 * Email: consultoria@carlosdelfino.eti.br
 * WhatsApp: +55 (85) 98520-5490
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { assertSecureServiceUrl } from '../src/index.js';

test('accepts credential-free HTTPS endpoints', () => {
 assert.equal(assertSecureServiceUrl('https://chat.example.test/', 'relay'), 'https://chat.example.test');
});

test('rejects insecure or credential-bearing endpoints', () => {
 assert.throws(() => assertSecureServiceUrl('http://chat.example.test'));
 assert.throws(() => assertSecureServiceUrl('https://user:secret@chat.example.test'));
 assert.throws(() => assertSecureServiceUrl('https://chat.example.test?token=secret'));
});
