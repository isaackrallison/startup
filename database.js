const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');
const suggestionCollection = db.collection('suggestion');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addSuggestion(suggestion) {
  const result = await suggestionCollection.insertOne(suggestion);
  return result;
}

function getSuggestions() {
  // const query = { user: { $exists: true }, activity: {$exists: true }};
  const cursor = suggestionCollection.find({ user: { $exists: true }, activity: {$exists: true }});
  return cursor.toArray();
}

module.exports = { addSuggestion, getSuggestions };