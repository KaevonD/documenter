// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { ComponentDefinition } from '../../src/components/interfaces';
import { buildProject } from './test-helpers';

let component: ComponentDefinition;
beforeAll(() => {
  const result = buildProject('simple');
  expect(result).toHaveLength(1);

  component = result[0];
});

test('should have correct name, description and release status', () => {
  expect(component.name).toBe('Simple');
  expect(component.description).toBe('Component-level description');
  expect(component.releaseStatus).toBe('stable');
});

test('should have correct properties', () => {
  expect(component.properties).toEqual([
    {
      name: 'count',
      description: 'Number example',
      type: 'number',
      optional: true,
      defaultValue: '123',
    },
    {
      name: 'enabled',
      description: 'Boolean example',
      type: 'boolean',
      optional: true,
      defaultValue: 'true',
    },
    {
      name: 'name',
      description: 'This is name\nMore text to have multi-line comment',
      type: 'string',
      optional: false,
      defaultValue: undefined,
    },
    {
      name: 'variant',
      description: 'This is variant',
      type: 'string',
      inlineType: {
        name: '',
        type: 'union',
        values: ['button', 'link'],
      },
      optional: true,
      defaultValue: '"button"',
    },
  ]);
});

test('should have correct events', () => {
  expect(component.events).toEqual([
    {
      name: 'onClick',
      description: 'Fired when user clicks',
      cancelable: true,
      detailType: undefined,
    },
    {
      name: 'onFollow',
      description: 'Fired when user clicks without modifier keys pressed',
      cancelable: false,
      detailType: undefined,
    },
  ]);
});
