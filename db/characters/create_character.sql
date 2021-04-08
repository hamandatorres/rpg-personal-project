INSERT INTO userCharacter
(name, race, job, age)
VALUES
($1, $2, $3, $4)
RETURNING *;