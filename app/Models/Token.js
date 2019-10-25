'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    Token:
*      type: object
*      properties:
*        token:
*          type: string
*/
class Token extends Model {
}

module.exports = Token
