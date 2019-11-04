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
  async store({ request }) {
    const data = request.only(["username", "email", "password", "phone"])

    const user = await User.create(data)

    return user.toJSON()
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

  /**
* @swagger
* /users/{id}:
*   get:
*     description: Get One user
*     produces:
*       - application/json
*     tags:
*       - User
*     summary: Get One
*     parameters:
*        - name: userId
*          in: path
*          description: ID of user that needs to be view
*          required: true
*          schema:
*            type: string
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: user
*         schema:
*           $ref: '#/definitions/User'
*/
  async show({ params }) {

    const user = await User.findByOrFail("id", params.id)

    return user
  }

  /**
    * @swagger
    * /users/{id}:
    *   put:
    *     description: Update a user
    *     consumes:
    *       - application/json
    *     produces:
    *       - application/json
    *     tags:
    *       - User
    *     summary: Put User
    *     parameters:
    *         - name: userId
    *           in: path
    *           description: ID of user that needs to be update
    *           required: true
    *           schema:
    *             type: string
    *         - name: userUpdate
    *           in:  body
    *           description: User object
    *           required: true
    *           schema:
    *             $ref: '#/definitions/User'
    *     responses:
    *       200:
    *         description: users
    *         schema:
    *           $ref: '#/definitions/User'
    */
  async update({ params, request }) {
    const user = await User.findByOrFail("id", params.id)
    const data = request.only(["username", "email", "password", "phone"])

    user.merge(data)
    user.save()

    return user.toJSON()
  }

    /**
    * @swagger
    * /users/{id}:
    *   delete:
    *     description: delete a user
    *     consumes:
    *       - application/json
    *     produces:
    *       - application/json
    *     tags:
    *       - User
    *     summary: Delete User
    *     parameters:
    *         - name: userId
    *           in: path
    *           description: ID of user that needs to be delete
    *           required: true
    *           schema:
    *             type: string
    *     responses:
    *       200:
    *         description: users
    *         schema:
    *           $ref: '#/definitions/User'
    */
   async delete({ params }) {
    const user = await User.findByOrFail("id", params.id)
    return user.delete()

  }

}

module.exports = UserController
