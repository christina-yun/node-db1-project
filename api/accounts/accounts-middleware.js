const { validatePayloadSchema } = require('./../validationSchema/yupValidation');
const Accounts = require('./accounts-model');

exports.checkAccountPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const validatedPayload = await validatePayloadSchema.validate(req.body);
    req.body = validatedPayload;
    next();
  }
  catch(err){
    next({ status: 400, message: 'missing required field' });
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try{
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
