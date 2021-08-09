USE Projeto_Inicial;

INSERT INTO Usuario(Email,Senha)
VALUES				('usuario@usuario.com','usuario123');

INSERT INTO Sala(AndarSala,NomeSala,MetragemSala)
VALUES			('1','Equipamento','100');

INSERT INTO Equipamento(MarcaEquipamento,TipoEquipamento,NumeroSerie,DescricaoEquipamento,NumeroPatrimonio,StatusEquipamento)
VALUES					('Cisco','Router','1500','Um roteador da cisco','18946703','0');

INSERT INTO SalaEquipamento(IdSala,IdEquipamento,DataEntrada,DataSaida)
VALUES						(1,1,'2012/07/12','2012/08/01');
