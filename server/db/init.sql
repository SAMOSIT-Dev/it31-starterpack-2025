-- Drop tables if they exist
DROP TABLE IF EXISTS friends, users, schedules, courses, houses, upcoming_events;

-- Create tables
CREATE TABLE houses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  house_name VARCHAR(30)
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  studentId VARCHAR(11) UNIQUE,
  nickname VARCHAR(100),
  age INT,
  profile_description TEXT,
  profile_picture_url TEXT,
  house_id INT,
  facebook_url VARCHAR(50),
  instagram_url VARCHAR(50),
  discord_username VARCHAR(50),
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (house_id) REFERENCES houses(id)
);

CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(50)
);

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  room_name VARCHAR(30)
);

CREATE TABLE schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT,
  room_id INT,
  start_time DATETIME,
  end_time DATETIME,
  slide_url TEXT,
  house_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (house_id) REFERENCES houses(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

CREATE TABLE friends (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  friend_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id)
);

CREATE TABLE upcoming_events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  event_name VARCHAR(50),
  event_datetime DATETIME
);

-- Insert into houses
INSERT INTO houses (house_name) VALUES
('fantasiax'),
('horrorin'),
('scifora'),
('actovex');

-- Insert into users
INSERT INTO users (nickname, age, profile_description, house_id, isAuthenticated, createdAt, updatedAt) VALUES
('Harry', 17, 'Brave and loyal', 1, true, NOW(), NOW()),
('Hermione', 17, 'Smartest witch', 1, true, NOW(), NOW()),
('Ron', 17, 'Loyal friend', 1, false, NOW(), NOW()),
('Luna', 16, 'Dreamy and wise', 3, true, NOW(), NOW()),
('Draco', 17, 'Proud and cunning', 4, true, NOW(), NOW());

-- Insert into courses
INSERT INTO courses (course_name) VALUES
('Defense Against the Dark Arts'),
('Potions'),
('Transfiguration');

-- Insert into rooms
INSERT INTO rooms (room_name) VALUES
('Room A'),
('Room B'),
('Room C');

-- Insert into schedules
INSERT INTO schedules (course_id, room_id, start_time, end_time, slide_url, house_id) VALUES
(1, 1, '2025-06-25 09:00:00', '2025-06-25 10:30:00', 'http://example.com/dada-slides', 1),
(2, 2, '2025-06-25 11:00:00', '2025-06-25 12:30:00', 'http://example.com/potions-slides', 4),
(3, 3, '2025-06-25 14:00:00', '2025-06-25 15:30:00', 'http://example.com/transfiguration-slides', 3);

-- Insert into friends
INSERT INTO friends (user_id, friend_id) VALUES
(1, 2),
(1, 3),
(2, 3),
(4, 1),
(5, 2);

-- Insert into upcoming_events
INSERT INTO upcoming_events (event_name, event_datetime) VALUES
('Quidditch Match', '2025-06-28 16:00:00'),
('Yule Ball', '2025-07-01 19:00:00'),
('Triwizard Tournament', '2025-07-15 10:00:00');