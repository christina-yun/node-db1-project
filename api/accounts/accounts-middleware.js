const { validatePayloadSchema } = require('./../validationSchema/yupValidation');
const Accounts = require('./accounts-model');

exports.checkAccountPayload = async (req, res, next) => {
  try {
    const validatedPayload = await validatePayloadSchema.validate(req.body);
    req.body = validatedPayload;
    next();
  }
  catch(err){
    next({ status: 400, message: err.message });
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const accountNamesArray = await Accounts.getAll();
    const accountNameMatch = accountNamesArray.filter(account => {
      return account.name === req.body.name
    })
    if (accountNameMatch.length > 0 ) {
      next({ status: 400, message: 'that name is taken'})
    } else {
      next();
    }
  }
  catch(err){
    next(err);
  }
}

exports.checkAccountId = async (req, res, next) => {
  try {
    const validId = await Accounts.getById(req.params.id);
    
    if(!validId){
      next({ status: 404, message: 'account not found' })
    } else {
      req.account = validId;
      next();
    }
  }
  catch(err){
    next(err);
  }
}
