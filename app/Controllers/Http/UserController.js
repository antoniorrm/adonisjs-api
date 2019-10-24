'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User")

class UserController {
    async store({request}) {
      const data = request.only(["username", "email", "password", "phone"])

      const user = await User.create(data)

      return user
    }

    async index() {

      const users = await User.all()
      // console.log(users)
      return users
    }
}

module.exports = UserController
