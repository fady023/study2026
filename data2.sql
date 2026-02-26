create table departments (
id int auto_increment,
name varchar(20) not null,
primary key(id)
);

create table employees (
id int auto_increment,
name varchar(20) not null ,
phone varchar(20) unique ,
join_date date default(current_date),
dep_id int ,
primary key(id),
foreign key(dep_id) references departments(id)
);


insert into departments (name) values ("Accounting"),("IT"),("Management"),("Customer Service");
insert into employees (name,phone,dep_id) values ("fady","001",1),("shed","002",2),("soshi","03",3),("sam","004",4),("sam","005",4);

select * from employees join departments on employees.dep_id = departments.id;

select distinct(name) from employees;

select sum(id) from employees;

select * from employees where id between 1 and 4;