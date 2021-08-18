CREATE TABLE 'account_info' (
	'seq' bigint not null auto_increment,
    'name' varchar(4) not null,
    'phone' varchar(11) not null,
    'pass' varchar(20) not null,
    primary key(seq)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

 