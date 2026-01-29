const database = require('../database/database')
require('dotenv').config();

exports.getTasks =  async (request, response) => {
  const userId = request.params.userId;
  //console.log(userId)
  try { //WHERE userId = $1  , [userId]
    const result = await database.pool.query("SELECT * FROM tasks  ORDER BY created_at DESC")
    return response.status(200).json(result.rows)
  } catch (error) {
    return response.status(500).json({message: `Get tasks Error: ${error}`})
  }
}
