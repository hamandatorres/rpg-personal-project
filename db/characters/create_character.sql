INSERT INTO userCharacter
(name, race, job, age, skill_id)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;