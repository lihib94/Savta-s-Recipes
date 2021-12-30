/* Every file inside "api" folder will execute on the SERVER, not in the client side
so every console.log will appear in terminal and not in the browser(inspect) */


/* mongoDB User: lihi pass: 123456lihi */

import { MongoClient } from 'mongodb';

// /api/new-recipe
// POST /api/new-recipe

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://bel:123bel@cluster0.girhn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();

    const recipeCollection = db.collection('recipes');

    const result = await recipeCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Recipe inserted!' });
  }
}

export default handler;