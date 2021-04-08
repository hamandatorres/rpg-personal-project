module.exports = {
  createSkills: async (req, res) => {
    const db = req.app.get('db')
    const { strength, speed, endurance, reasoning, insight, personality } = req.body
    await db.skills.create_skills( strength, speed, endurance, reasoning, insight, personality);

    res.status(200).send("Mad Skillz")
  },
  deleteSkills: async (req, res) => {
    const db = req.app.get('db')
    const { skill_id } = req.params;
    await db.skills.delete_skills(skill_id);

    res.status(200).send('Skills Gone')
  }
}