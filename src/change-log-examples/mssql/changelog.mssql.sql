--liquibase formatted sql

--changeset SteveZ:1
CREATE TABLE CustomerDemographics (CustomerTypeID nchar(10) NOT NULL, CustomerDesc nvarchar(MAX));
