// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ComponentDefinition } from '../../src/components/interfaces';
import { buildProject } from './test-helpers';

let component: ComponentDefinition;
beforeAll(() => {
  const result = buildProject('slots');
  expect(result).toHaveLength(1);

  component = result[0];
});

test('should have correct region definitions', () => {
  expect(component.properties).toEqual([]);
  expect(component.regions).toEqual([
    {
      name: 'children',
      displayName: 'content',
      description: 'Main content',
      isDefault: true,
    },
    {
      name: 'header',
      description: 'Header',
      isDefault: false,
    },
  ]);
});
