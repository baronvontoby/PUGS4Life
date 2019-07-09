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


-- create events outdoor
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Sultans of Swing', '2019-07-12', '2019-07-12', '08:00:00', 'Minneapolis', 'MN', 53061, 'Come golf with us at Meadow Spring Course.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '4');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Flaming Flags', '2019-07-13', '2019-07-13', '12:30:00', 'Minneapolis', 'MN', 53061, 'Come join with us on the south side of lake Nakomis. Bring a white and black t-shirt.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Basketball Pick-up Game', '2019-07-14', '2019-07-14', '18:00:00', 'Saint Paul', 'MN', 55104, 'Come join with us at Mulkern Basketball Court at 1511 Hewitt Ave, St Paul, MN.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '7');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Street Hockey', '2019-07-15', '2019-07-15', '17:30:00', 'Bloomington', 'MN', 55104, 'Bring a white and black t-shirt to help us break into teams.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '2');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Disc Golf', '2019-07-16', '2019-07-16', '15:00:00', 'Bloomington', 'MN', 55104, 'Play Disc Golf at the park and relax while we chat and throw around the disc. BRING BUG SPRAY!!!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '3');

-- create events indoor
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Catan Masters', '2019-07-24', '2019-07-24', '08:00:00', 'Stillwater', 'MN', 53061, 'Settlers of Catan. Join us to compete for longest road and quickest developer.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '5');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Euchre-Yoopers', '2019-07-25', '2019-07-25', '19:00:00', 'Minneapolis', 'MN', 53061, 'We play Euchre at Bad Weather Brewery on the 25th of each month Join us at 7 pm in the back game room.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '7');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Criptic Cribbage', '2019-07-26', '2019-07-26', '19:30:00', 'Minneapolis', 'MN', 53061, 'Cribbage at Surly Brewing.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '6');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Magic', '2019-07-26', '2019-07-26', '12:30:00', 'Minneapolis', 'MN', 53061, 'Magic at the Villaneous Lair comic shop.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '2');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Codenames', '2019-07-26', '2019-07-26', '19:30:00', 'Minneapolis', 'MN', 53061, 'Codenames.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '1');


-- create particpant
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '4');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '7');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '6', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '7', '7');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '8', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '9', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '10', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '7');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '3', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '4');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '7');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '6', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '6', '7');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '6', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '7', '6');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '7', '2');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '7', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '7', '4');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '8', '4');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '9', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '10', '4');