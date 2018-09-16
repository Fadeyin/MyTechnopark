'use strict'

const Model = use('Model')
const Database = use('Database')

class News extends Model {
	
	 static get visible () {
    return ['id','title','body','link']
  }
}

module.exports = News
