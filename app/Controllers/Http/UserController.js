'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User")

class UserController {
/**
  * @swagger
  * /users:
  *   post:
  *     description: Creates a user
  *     produces:
  *       - application/json
  *     tags:
  *       - User
  *     summary: Post Users
  *     parameters:
  *       - in:  body
  *         name: user
  *         description: User object
  *         required: true
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: users
  *         schema:
  *           $ref: '#/definitions/User'
  */
    async store({request}) {
      const data = request.only(["username", "email", "password", "phone"])

      const user = await User.create(data)

      return user
    }
  /**
  * @swagger
  * /users:
  *   get:
  *     description: Get all users
  *     produces:
  *       - application/json
  *     tags:
  *       - User
  *     summary: Get All
  *     security:
  *       - bearerAuth: []
  *     responses:
  *       200:
  *         description: users
  *         schema:
  *           $ref: '#/definitions/User'
  */
    async index() {

      const users = await User.all()
      // console.log(users)
      return users
    }
}

module.exports = UserController
