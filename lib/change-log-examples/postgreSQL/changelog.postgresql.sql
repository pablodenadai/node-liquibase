--liquibase formatted sql

--changeset SteveZ:1
CREATE TABLE "execSales" (id INTEGER NOT NULL, name VARCHAR(255), CONSTRAINT id_pkey PRIMARY KEY (id));

--changeset SteveZ:2
CREATE VIEW "newView" AS SELECT "execSales".id,
    "execSales".name
   FROM "execSales";

