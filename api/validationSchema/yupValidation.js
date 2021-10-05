const yup = require('yup');

const validatePayloadSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(1, 'min 1 char'),
    budget: yup
        .number()
        .required('Budget is required')
        .positive()
        .integer()
})

module.exports = {
    validatePayloadSchema,
};
