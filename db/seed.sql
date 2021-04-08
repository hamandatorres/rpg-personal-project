create table users (
	user_id serial primary key references usersandcharacters(user_id),
	email varchar(150) not null,
	hash text
);

create table userCharacter (
	character_id serial primary key references usersandcharacters(character_id),
	name varchar(150) not null,
	race varchar(255) not null,
	job varchar(255) not null,
	age int not null,
	skill_id int unique
);

create table characterskill (
	skill_id serial primary key,
	strength int,
	speed int,
	endurance int,
	reasoning int,
	insight int,
	personality int
);

create table usersandcharacters (
	user_id int serial unique,
	character_id int serial unique
);

create table usertopic (
	topic_id serial primary key,
	user_id int references users(user_id),
	body text not null,
	title text not null,
	created timestamp
);

create table userpost (
	post_id serial primary key,
	user_id int references users(user_id),
	body text not null,
	creator timestamp,
	topic_id int unique references usertopic(topic_id)
);
