'use strict'

const Mail = use('Mail');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User")

class ForgotPasswordController {

  async store({ request }) {
    try {
      const email = request.input('email');

    const user = await User.findByOrFail('email', email);
    // const random = await promisify(randomBytes)(14);
    // const token = random.toString('hex');

    // await user.tokens().create({
    //   token,
    //   type : 'forgotpassword',
    // })

    // const resetPasswordUrl = `${Env.get('FRONT_URL')}/reset?token=${token}`;
    await Mail.send('emails.forgotpassword', { name: user.username}, (message) => {
      message
        .to(user.email)
        .from('oi@automacao.com')
        .subject('Automacao - Recupere sua senha')
    })

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ForgotPasswordController
