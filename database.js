const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const suggestionCollection = db.collection('suggestion');

// async function addSuggestion(suggestion) {
//     const result = await suggestionCollection.insertOne(suggestion);
//     return result;
// }

async function addSuggestion(suggestion) {
  // Set the initial count to 0 when adding a new suggestion
  suggestion.count = 0;

  const result = await suggestionCollection.insertOne(suggestion);
  return result;
}

function getSuggestions() {
    const cursor = suggestionCollection.find({});
    return cursor.toArray();
}

module.exports = { addSuggestion, getSuggestions };