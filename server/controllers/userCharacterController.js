module.exports = {
  addCharacter: async (req, res) => {
    const db = req.app.get('db')
    const { name, race, job, age } = req.body

    await db.characters.create_character(name, race, job, age)

    res.status(200).send(req.body);
  },
  deleteCharacter: async (req, res) => {
    const db = req.app.get('db')
    const { character_id } = req.params;
    await db.characters.delete_character(character_id)
    res.status(200).send('Character has been deleted')
  }



}