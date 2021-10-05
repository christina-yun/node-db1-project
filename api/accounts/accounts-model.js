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

async function create (account) {
  //insert into accounts (name, budget)
  //values ('string', value);
  const id = await db('accounts')
    .insert(account);
  return getById([id]);
  
}

async function updateById (id, account) {
  // update accounts set name= req.body.name, budget = req.body.budget where id = #
  const updatedId = await db('accounts')
    .update(account)
    .where('id', id)

  return getById(updatedId);
}

const deleteById = id => {
  // delete from accounts where id = #
  return db('accounts')
    .where('id', id)
    .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
