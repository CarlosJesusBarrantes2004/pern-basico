create database tasksdb;

create table tasks(
    task_id serial primary key,
    task_title varchar(255) unique not null,
    task_content varchar(255) not null
);