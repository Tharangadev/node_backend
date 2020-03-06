var router = require('express').Router()

router.use('/', require('./users'))

router.use(function (err, req, res, next) {
    
    if (err.name === 'validationError') {
        return res.status(422).json({
            errors: "more errors"
        })
    }
    return next(error)
})

module.exports = router
