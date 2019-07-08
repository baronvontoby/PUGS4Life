-- use this database
USE pugs4life_db;

-- create users
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('ebuelow', 'ellen1', 'ellen1@gmail.com', 'Ellen', NULL, '7155675309', 'Saint Paul', 'MN', '53061', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('afeijoo', 'ash1', 'ash1@gmail.com', 'Ash', NULL, '7155675308', 'Saint Paul', 'MN', '53061', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('ldandrea', 'lorenzo1', 'lorenzo1@gmail.com', 'Lorenzo', NULL, '7155675301', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('sthong', 'sabrina1', 'sabrina1@gmail.com', 'Sabrina', NULL, '7155675302', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('ehwang', 'esther1', 'esther1@gmail.com', 'Esther', NULL, '7155675302', 'Minneapolis', 'MN', '55352', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('dbhujle', 'deepa1', 'deepa1@gmail.com', 'Deepa', NULL, '7155675302', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('jsamuels', 'jeff1', 'jeff1@gmail.com', 'Jeff', NULL, '7155675302', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- create game category
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Team Sports', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Board Games', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Other Outdoor Games', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Cards', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- create events
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Sultans of Swing', '2019-07-12', '2019-07-12', '08:00:00', 'Minneapolis', 'MN', 53061, 'Come golf with us at Meadow Spring Course. Please be there 15 min early. We will play best ball, we will break out in to teams before we begin. Afterward we finish 18 rounds, feel free to hang around for beer and food.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '4');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Flaming Flags', '2019-07-13', '2019-07-13', '12:30:00', 'Minneapolis', 'MN', 53061, 'Capture the flag is a game in which two teams each hide a colored cloth, representing the team''s flag, and then try to find the other team''s flag and return with it to their home base. Come join with us on the south side of lake Nakomis. Please be there 15 min early. Bring a white and black t-shirt.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '1');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Basketball Pick-up Game', '2019-07-14', '2019-07-14', '18:00:00', 'Saint Paul', 'MN', 55104, 'Pick-up game will be played full-court or half-court, depending on the number of people that show up and space. Come join with us at Mulkern Basketball Court at 1511 Hewitt Ave, St Paul, MN 55104. Please be there 15 min early. Bring a white and black t-shirt to help us break into teams.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '1');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Street Hockey', '2019-07-10', '2019-07-10', '17:30:00', 'Saint Paul', 'MN', 55104, 'Pick-up game will be playyed full-court or half-court, depending on the number of people that show up and space. Come join with us at Mulkern Basketball Court at 1511 Hewitt Ave, St Paul, MN 55104. Please be there 15 min early. Bring a white and black t-shirt to help us break into teams.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '1');





INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Catan Masters', '2019-07-01', '2019-07-01', '08:00:00', 'Minneapolis', 'MN', 53061, 'Settlers of Catan', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '2');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Euchre-Yoopers', '2019-07-25', '2019-07-25', '08:00:00', 'Minneapolis', 'MN', 53061, 'Euchre', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '3');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Criptic Cribbage', '2019-07-25', '2019-07-25', '08:00:00', 'Minneapolis', 'MN', 53061, 'Cribbage', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '3');


-- create particpant
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '4');
