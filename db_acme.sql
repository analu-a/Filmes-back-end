create database db_acme_filmes_turma_ab;

use db_acme_filmes_turma_ab;

create table tbl_filme (
id int not null auto_increment primary key,
nome varchar(80) not null,
sinopse text not null,
duracao time not null,
data_lancamento date not null,
data_relancamento date,
foto_capa varchar(200) not null,
valor_unitario float,
unique index (id),
unique key (id)
);

insert into tbl_filme (nome, 
sinopse, 
duracao,
data_lancamento, 
data_relancamento, 
foto_capa, 
valor_unitario) values (
"Legalmete loira",
"Elle Woods (Reese Whiterspoon) é uma garota que tem tudo que possa querer. Ela é a presidente da fraternidade de onde estuda, 
Miss Junho no calendário do campus e, além disso, uma loira natural. Elle ainda namora o mais bonito garoto de seu colégio, Warner Huntington III (Matthew Davis), 
com quem inclusive planeja se casar no futuro. Mas Elle tem um problema que incomoda Warner: ela é fútil demais! Até que, quando Warner vai estudar Direito na Universidade de Harvard, 
ele passa a namorar uma nova garota (Selma Blair) e decide largar Elle,
que não se dá por vencida e decide estudar a fim de também passar para o curso de Direito e ainda por cima provar sua inteligência.",
"01:36:00",
"2001-11-09",
null,
"https://br.web.img2.acsta.net/c_310_420/pictures/15/05/21/21/49/411666.jpg",
"50.00"
),

(
"A freira",
"Fazendo parte da franquia Invocação do Mal, em A Freira, após uma irmã cometer suicídio em um convento na Romênia,
 o Vaticano envia um padre atormentado e uma noviça para investigar o ocorrido. Arriscando suas vidas, a fé e até suas almas,
 os dois descobrem um segredo profano no local, confrontando-se com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento num campo de batalha espiritual.",
 "01:37:00",
 "2018-09-06",
 null,
 "https://br.web.img3.acsta.net/c_310_420/pictures/18/07/18/21/53/1348208.jpg",
 "50.00"
);

select * from tbl_filme;

show tables;

