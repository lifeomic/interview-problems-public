import { traverseTree } from '../../../src/util/treeUtils';

const tree0 = require('../data/tree0.json');
const tree1 = require('../data/tree1.json');
const tree2 = require('../data/tree2.json');
const tree3 = require('../data/tree3.json');

test('find longest tree paths for tree0', async () => {
  const response = await traverseTree(tree0);
  expect(response[0]).toStrictEqual([
    'tree0'
  ]);
});

test('find longest tree paths for tree1', async () => {
  const response = await traverseTree(tree1);

  expect(response.length).toBe(2);

  expect(response[0]).toEqual(expect.arrayContaining([
    'tree1',
    'tree1.b',
    'tree1.b.c',
    'tree1.b.c.b',
    'tree1.b.c.b.a',
    'tree1.b.c.b.a.b',
    'tree1.b.c.b.a.b.b',
    'tree1.b.c.b.a.b.b.a'
  ]));

  expect(response[1]).toEqual(expect.arrayContaining([
    'tree1',
    'tree1.b',
    'tree1.b.c',
    'tree1.b.c.b',
    'tree1.b.c.b.a',
    'tree1.b.c.b.a.b',
    'tree1.b.c.b.a.b.b',
    'tree1.b.c.b.a.b.b.b'
  ]));
});

test('find longest tree paths for tree2', async () => {
  // todo: implement this
});

test('find longest tree paths for tree3', async () => {
  // todo: implement this
});
