INSERT INTO userpost
(user_id, body, creator)
VALUES
($1, $2, current_date);