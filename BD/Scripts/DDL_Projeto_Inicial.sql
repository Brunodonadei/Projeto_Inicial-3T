Create Database Projeto_Inicial;

GO

USE Projeto_Inicial;

GO

CREATE TABLE Usuario(
IdUsuario INT PRIMARY KEY IDENTITY
,Email VARCHAR (200) NOT NULL UNIQUE
,Senha VARCHAR (200) NOT NULL
);

GO

CREATE TABLE  Sala(
IdSala INT PRIMARY KEY IDENTITY
,AndarSala INT NOT NULL
,NomeSala VARCHAR (200) NOT NULL
,MetragemSala FLOAT
);

GO

CREATE TABLE Equipamento(
IdEquipamento INT PRIMARY KEY IDENTITY
,MarcaEquipamento VARCHAR (200) NOT NULL
,TipoEquipamento VARCHAR (200) NOT NULL
,NumeroSerie INT NOT NULL
,DescricaoEquipamento VARCHAR (200) NOT NULL
,NumeroPatrimonio INT NOT NULL
,StatusEquipamento BIT NOT NULL
);

GO

CREATE TABLE SalaEquipamento(
IdSala  INT FOREIGN KEY  REFERENCES Sala(IdSala)
,IdEquipamento INT FOREIGN KEY  REFERENCES Equipamento(IdEquipamento)
,DataEntrada DATETIME
,DataSaida DATETIME
);

GO