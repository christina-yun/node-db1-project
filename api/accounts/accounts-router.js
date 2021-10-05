const router = require('express').Router();
const Accounts = require('./accounts-model');

const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware');

 
router.get('/', async(req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
    res.json(accounts)
  }
  catch(err){
    next(err);
  }
});

router.get('/:id', checkAccountId, async (req, res, next) => {
  try{
    res.json(req.account)
  }
  catch(err){
    next(err);
  }
});

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  try {
    Accounts.create(req.body)
      .then(newAccount => {
        res.status(201).json(newAccount);
      })
      .catch(next)
  }
  catch(err) {
    next(err);
  }
})

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  try {
    Accounts.updateById(req.params.id, req.body)
      .then(updatedAccount => {
        res.json(updatedAccount);
      })
      .catch(next)
  }
  catch(err){ 
    next(err);
  }
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  try {
    Accounts.deleteById(req.params.id)
    .then(() => {
      res.json(req.account)
    })
    .catch(next)
  }
  catch(err){
    next(err);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ 
    message: err.message
  });
});


module.exports = router;
