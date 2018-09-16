'use strict'
const _ = use('lodash')
const uuidv1 = require('uuid/v1');
const Hash = use('Hash')
const Database = use('Database')
const Logger = use('Logger')
const News = use('App/Models/News')
const Response = use('App/Lib/Response')
const RestController = use('App/Lib/RestController')

class newsController {
	constructor () {
    this.rest = new RestController(News,
      {
        fieldList: 'id, title, body, link',
        sortable: ['id','title','body','link'],
        searchable: ['id','title','body','link'],
        softDeletes: true,
		createdMessage: 'Объявление отправленно на рассмотрение'
       /* defaultSortBy: 'username',
        highlightClass: 'primary',
        ,
        updatedMessage: 'Пользователь обновлен',
        deletedMessage: 'Пользователь удален',
        onAfterAnySave: async (data, original, rest, record, request) => {
          if (record.status === 'new') {
            record.status = 'active'
            record.save()
          }
        },
        onBeforeDelete: async (data, rest) => {
          data.email = '.' + uuidv1() + '.' + data.email
        }*/
      }
    )
  }
  async store ({ request, response }) {
      return this.rest.store(
      request.only(['title', 'body', 'link']),
      request,
      response)
  }
  async index ({ request, response }) {
    return this.rest.index(request, response)
  }
  /*async showNews ({ view, request, response }) {
    return this.rest.showNews(request.only(['title']), request, response)
  }
  async show1 ({view, request, response }) {
	  const title = request.get('title')
    return this.rest.show(request.only(['title']), request, response)
  }
   async showProfile ({ auth, request, response }) {
      return Response.genericData(
        response,
        this.publicProfile(auth.user.toJSON()))
    }*/
  }

  module.exports = newsController