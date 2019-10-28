'use strict'

class SessionController {
  /**
   * @swagger
   * /sessions:
   *   post:
   *     description: Get all users
   *     produces:
   *       - application/json
   *     tags:
   *       - Session
   *     summary: Auth JWT Login
   *     parameters:
   *       - in:  body
   *         name: session
   *         description: Email and Password
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Auth'
   *     responses:
   *       200:
   *         description: token
   *       default:
   *         description: unexpected error
   *
   *
   */
  async store({ request, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);

    const { token } = await auth.attempt(email, password);

    return { token };
  }
}

module.exports = SessionController
