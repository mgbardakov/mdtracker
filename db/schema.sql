DROP TABLE IF EXISTS position CASCADE;
DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS device CASCADE;
DROP TABLE IF EXISTS device_movement CASCADE;

CREATE TABLE position (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name TEXT,
    position_id INT REFERENCES position(id)
);

CREATE TABLE device (
    id SERIAL PRIMARY KEY,
    name TEXT,
    verification_expire TIMESTAMP,
    taken BOOLEAN
);

CREATE TABLE device_movement (
    id SERIAL PRIMARY KEY,
    taken TIMESTAMP,
    returned TIMESTAMP,
    device_id INT REFERENCES device(id),
    employee_id INT REFERENCES employee(id)
)