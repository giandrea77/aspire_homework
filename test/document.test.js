const _ = require('lodash')
const { generateUpdateStatement } = require('../services/documentService');

/**
 * This is a sample document
 */
const documentComplete = {
    "id": 1,
    "name": "Johnny Content Creator",
    "posts": [
        {
            "id": 2,
            "value": "one",
            "mentions": []
        },
        {
            "id": 3,
            "value": "two",
            "mentions": [
                {
                    "id": 5,
                    "text": "apple"
                },
                {
                    "id": 6,
                    "text": "orange"
                }
            ]
        },
        {
            "id": 4,
            "value": "three",
            "mentions": []
        }
    ]
};

const mutations = [  
    {
        'name': 'Scenario #001',
        'input': { "posts": [{ "_id": 2, "value": "too" }] },
        'output': { "$update": {"posts.0.value": "too"} }
    },
    {
        'name': 'Scenario #002',
        'input': { "posts": [{ "_id": 3, "mentions": [{ "_id": 5, "text": "pear" }] }] },
        'output': { "$update": {"posts.1.mentions.0.text": "pear"}}
    }
]

/**
 * Product test suite.
 */
describe('document', () => {
    _.map(mutations, (mutationData) => {

        test(mutationData.name, () => {

            const expected = JSON.stringify(mutationData.output);
            const result = JSON.stringify(generateUpdateStatement(mutationData.input));

            expect(result).toBe(result);

        })
    })
});