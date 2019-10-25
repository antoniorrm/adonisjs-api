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
   *       - session: session
   *         description: Email and Password
   *         in:  body
   *         required: true
   *         type: string
   *         schema:
   *           {
   *               "type": "object",
   *               "properties": {
   *                   "email": {
   *                      "type": "string",
   *                     }
   *                }
   *            }
   *     responses:
   *       200:
   *         description: users
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
