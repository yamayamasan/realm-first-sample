'use strict';

const Realm = require('realm');

function User() {
  if (!(this instanceof User)) return new User();
  this.schema = {
    name: 'Users',
    primaryKey: 'uuid',
    properties: {
      uuid: 'string',
      username: 'string',
      age: 'int',
      created_at: 'date'
    }
  };

  this.realm = new Realm({
    path: 'db/realm',
    schema: [this.schema]
  });
}

User.prototype.add = function(input) {
  this.realm.write(() => {
    const datas = this.realm.create(this.schema.name, input);
  });
}

User.prototype.get = function() {
  return this.realm.objects(this.schema.name);
}

module.exports = User;
