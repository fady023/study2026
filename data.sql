
create table courses (
id integer primary key auto_increment,
name varchar(40),
description text,
start_date date default (current_date),
course_id integer ,
foreign key(course_id) references courses(id)
);

create table emps (
empid integer primary key auto_increment,
name varchar(40) UNIQUE DEFAULT "fe",
email varchar(40) NOT NULL
);


insert into courses(name,description) values("PHP","Full_Stack"),("AI","Data_Analysis"),("Photoshop","Design");

insert into emps(name,email,course_id) values("fed","fed@gmail.com",1),("shed","shed@gmail.com",2),("nosa","nosa@yahoo.com",3),("sam","sm@gmail.com",null);




select * from emps where name like "s%";

update emps set name="update",email= "updated@gmail.com" where empid=2 ;

delete from emps where empid= 2;

select emps.name,emps.email,courses.name from emps join courses on emps.course_id = courses.id order by courses.id desc;
select emps.name,emps.email,courses.name from emps join courses on emps.course_id = courses.id  where courses.id=1;
select emps.name,emps.email,courses.name from emps join courses on emps.course_id = courses.id  where NOT courses.id=1;
select emps.name,emps.email,courses.name from emps join courses on emps.course_id = courses.id  where courses.id=1 or courses.id=2;

/* select emps.name,emps.email,courses.name from emps left  join courses on emps.course_id = courses.id where emps.course_id is null */

select count(name) as employees from emps where course_id is not null;