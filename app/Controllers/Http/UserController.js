'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User")

class UserController {


/**
  * @swagger
  * /api/hello:
  *   get:
  *     tags:
  *       - Test
  *     summary: Sample API
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */
 async hello({ request, response }) {
  const name = request.input('name', 'Guess')
  response.send({ message: 'Hello ' + name })
}

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
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - username: user
  *         description: User object
  *         in:  body
  *         required: true
  *         type: string
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
