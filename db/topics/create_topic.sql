INSERT INTO usertopic
(user_id, title, body, created)
VALUES
($1, $2, $3, current_date);