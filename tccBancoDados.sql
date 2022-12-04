create database tccBancodeDados;

use tccBancodeDados;

create table post(
	id_post int primary key auto_increment,
    	legenda varchar(100),
    	data_postagem datetime default now() not null,
    	-- tags_esportes (chave estrangeira)
    	-- conteudo do post (imagem, video etc)
    	-- localizacao
    	marcar_pessoas varchar(100)
    
);

create table usuario(
    	id_usuario int primary key auto_increment,
    	nome_usuario varchar(100) not null,
    	nick_usuario varchar(20) not null,
    	email varchar(100) not null,
    	senha varchar(100) not null,
    	aniversario date not null,
    	data_criacao datetime default now() not null,
    	descricao varchar(1000),
    	tipo_usuario enum('admin', 'user'),
	
    	-- nacionalidade varchar(30) default 'brasileiro'
    	-- relação com a tabela esportes
	
    	quantidadeLikes int not null,
    	quantidadeComentarios int not null,
    	quantidadeCompartilhamento int not null
);


create table usuarioPossuiPosts(
	FK_id_post int not null,
   	FK_id_usuario int not null,
     
	primary key(FK_id_post, FK_id_usuario),
     
	constraint id_post foreign key (FK_id_post) references post(id_post),
   	constraint id_usuario foreign key (FK_id_usuario) references usuario(id_usuario)
);


# create table esportes ( );

-- drop database tccBancodeDados;

