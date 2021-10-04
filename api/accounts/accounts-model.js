const db = require('./../../data/db-config');

const getAll = () => {
  //select * from accounts
  return db('accounts')
}

const getById = id => {
  //select * from accounts
  //where id = #
  return db('accounts')
    .where('id', id)
    .first();
}

const create = account => {
  //insert into (name, budget)
  //values ('string', value)
  return db('accounts')
    .insert(account)
  
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
