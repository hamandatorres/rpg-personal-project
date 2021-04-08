INSERT INTO userpost
(user_id, topic_id, body, creator)
VALUES
($1, $2, $3, current_date);