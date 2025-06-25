-- Drop tables if they exist
DROP TABLE IF EXISTS friends, users, schedules, courses, houses, upcoming_events;

-- Create tables
CREATE TABLE houses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  house_name VARCHAR(30)
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nickname VARCHAR(100),
  age INT,
  profile_description TEXT,
  house_id INT,
  isAuthenticated BOOLEAN,
  createdAt DATETIME,
  updatedAt DATETIME,
  FOREIGN KEY (house_id) REFERENCES houses(id)
);

CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(50)
);

CREATE TABLE schedules (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT,
  start_time DATETIME,
  end_time DATETIME,
  slide_url TEXT,
  house_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  FOREIGN KEY (house_id) REFERENCES houses(id)
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

-- Insert sample data into houses
INSERT INTO houses (house_name) VALUES
('Gryffindor'), ('Hufflepuff'), ('Ravenclaw'), ('Slytherin');

-- Insert sample data into users
INSERT INTO users (nickname, age, profile_description, house_id, isAuthenticated, createdAt, updatedAt) VALUES
('Harry', 17, 'The Boy Who Lived', 1, TRUE, NOW(), NOW()),
('Hermione', 17, 'Brightest witch of her age', 1, TRUE, NOW(), NOW()),
('Ron', 17, 'Loyal and brave', 1, FALSE, NOW(), NOW()),
('Luna', 16, 'Quirky and wise', 3, TRUE, NOW(), NOW()),
('Draco', 17, 'Proud Slytherin', 4, TRUE, NOW(), NOW());

-- Insert sample data into friends
INSERT INTO friends (user_id, friend_id) VALUES
(1, 2),
(1, 3),
(2, 3),
(4, 1),
(5, 1);

-- Insert sample data into courses
INSERT INTO courses (course_name) VALUES
('Defense Against the Dark Arts'),
('Potions'),
('Transfiguration'),
('Charms');

-- Insert sample data into schedules
INSERT INTO schedules (course_id, start_time, end_time, slide_url, house_id) VALUES
(1, '2025-06-17 09:00:00', '2025-06-17 10:00:00', 'http://slides.com/dada.pdf', 1),
(2, '2025-06-17 10:30:00', '2025-06-17 11:30:00', 'http://slides.com/potions.pdf', 4),
(3, '2025-06-18 09:00:00', '2025-06-18 10:00:00', 'http://slides.com/transfig.pdf', 3),
(4, '2025-06-18 10:30:00', '2025-06-18 11:30:00', 'http://slides.com/charms.pdf', 2);

-- Insert sample data into upcoming_events
INSERT INTO upcoming_events (event_name, event_datetime) VALUES
('Yule Ball', '2025-12-24 20:00:00'),
('Triwizard Tournament', '2025-11-10 15:00:00'),
('Hogsmeade Trip', '2025-10-01 09:00:00');
