DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(500) UNIQUE NOT NULL,
    text VARCHAR(500) NOT NULL,
    date DATE NOT NULL,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO diary
    (name, text, date, category)
VALUES
('Test Name', 'This is a test entry to the database', NOW()::timestamp, 'Testing')