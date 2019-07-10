global.window = global;
global.assert = require('chai').assert;
require('../src/data/rickandmorty/rickandmorty');
require('../src/data');
require('./data.spec.js');

//DESCRIBE QUE (A QUIEN) VOY A TESTEAR
describe(filterSpecies, () => {
      const sampleSpice = [{
          "name": "Rick Sanchez",
          "species": "Human"
        },
        {
          "name": "Morty Smith",
          "species": "Human"
        }
      ]
      it('deberia retornar el objeto Rick Sanchez al filtrar por especie humano', () => {
        assert.deepEqual(window.filterSpecies(sampleSpice, 'Human'), [{
          "name": "Rick Sanchez",
          "species": "Human"
        }]);
      });
    });