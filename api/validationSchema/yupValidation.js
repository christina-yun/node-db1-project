const yup = require('yup');

const validatePayloadSchema = yup.object().shape({
    name: yup
        .string()
        .typeError('name of account must be a string')
        .trim()
        .required('name and budget are required')
        .min(3, 'name of account must be between 3 and 100')
        .max(100, 'name of account must be between 3 and 100'),
    budget: yup
        .number()
        .typeError('budget of account must be a number')
        .strict()
        .required('name and budget are required')
        .positive('budget of account is too large or too small')
        .max(10000, 'budget of account is too large or too small')
})

module.exports = {
    validatePayloadSchema,
};
