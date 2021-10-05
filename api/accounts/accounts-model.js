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
