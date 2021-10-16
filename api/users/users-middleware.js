const Users = require('./users-model')



async function validateUserId(req, res, next) {
    try {
      const userIdCheck = await Users.findById(req.params.id)
      if (userIdCheck) {
        req.user= userIdCheck
        next()
      } else {
        res.status(404).json({
          status: 404,
        })
      }
    } catch (err) {
      next(err)
    }
}


module.exports = {
    validateUserId,

}