/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2022 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { isValidUrl } from './isValidUrl';

test('http', () => {
  expect(isValidUrl('http://example.com')).toBe(true);
});

test('https', () => {
  expect(isValidUrl('https://example.com')).toBe(true);
});