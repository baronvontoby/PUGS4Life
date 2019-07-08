-- use this database
USE pugs4life_db;

-- create users
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('ebuelow', '12345', 'email1@gmail.com', 'ellen', NULL, '7155675309', 'Saint Paul', 'MN', '53061', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('wbuelow', '12345', 'email2@gmail.com', 'winnie', NULL, '7155675308', 'Saint Paul', 'MN', '53061', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('pbuelow', '123456', 'email3@gmail.com', 'phillip', NULL, '7155675301', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO users (username, password, email, name, image_link, phone_num, city, state, zipcode, active, createdAt, updatedAt) values ('sthong', '123456', 'email4@gmail.com', 'sabrina', NULL, '7155675302', 'Minneapolis', 'MN', '55111', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
Select * from users
-- create game category
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Volleyball', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Board Games', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Basketball', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO gamecategories (name, is_outdoor, createdAt, updatedAt) values ('Cards', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP); 

-- Select * from gamecategories
-- create events
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Sassy-Servers', '2019-08-25', '2019-08-25', '08:00:00', 'Minneapolis', 'MN', 53061, 'Volleyball', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Catan Masters', '2019-07-01', '2019-07-01', '08:00:00', 'Minneapolis', 'MN', 53061, 'Settlers of Catan', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '2', 9);
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Euchre-Yoopers', '2019-07-25', '2019-07-25', '08:00:00', 'Minneapolis', 'MN', 53061, 'Euchre', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '3');
INSERT INTO events (event_name, start_date, end_date, event_time, event_city, event_state, event_zipcode, description, createdAt, updatedAt, GameCategoryId, UserId) 
values ('Criptic Cribbage', '2019-07-25', '2019-07-25', '08:00:00', 'Minneapolis', 'MN', 53061, 'Cribbage', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '4', '3');

Select * from events
-- create particpant
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '9');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '6', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '1');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '11', '5');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '5', '3');
INSERT INTO participations (createdAt, updatedAt, EventId, UserId) values (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '11', '4');
