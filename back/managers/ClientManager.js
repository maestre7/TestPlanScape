"use strict";
const { Clients } = require("../models");

async function CreateClient(params) {
  try {
    return Clients.create(params);
  } catch (err) {
    console.log(err);
  }
}

async function FindClient(params) {
  try {
    return Clients.findOne({ where: params });
  } catch (err) {
    console.log(err);
  }
}

async function FindAllClients() {
  try {
    return Clients.findAll();
  } catch (err) {
    console.log(err);
  }
}

async function FindByParams(params) {
  try {
    return Clients.findAll({ where: params });
  } catch (err) {
    console.log(err);
  }
}

async function UpdateClient(id, params) {
  try {
    return Clients.update(
      params,
      {
        where: id,
      }
    );
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  CreateClient,
  FindClient,
  FindAllClients,
  FindByParams,
  UpdateClient,
};
