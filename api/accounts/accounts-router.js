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

router.put('/:id',  async (req, res, next) => {
// DO YOUR MAGIC
  // try{}
  // catch(){}
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ 
    message: err.message
  });
});


module.exports = router;
