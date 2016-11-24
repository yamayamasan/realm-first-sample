'use strict';

const model = new require('./user.js')();
const program = require('commander');


program
  .version('1.0.0')
  .option('-a, --add [value]', 'add item')
  .option('-g, --get [value]', 'get item')
  .parse(process.argv);

if (program.add) {
  const args = program.add.split(',');

  const obj = {};
  args.forEach((arg) => {
    const argArr = arg.split(':');
    const key = argArr[0].trim();
    const val = argArr[1];
    obj[key] = val.trim();
  });
  obj['uuid'] = getUnixTime();
  obj['age'] = parseInt(obj.age);
  obj['created_at'] = new Date();
  console.log(obj);
  model.add(obj);
  process.exit();
}

if (program.get) {
  const datas = model.get();
  console.log('datas:', datas);
  process.exit();
}

function getUnixTime() {
  const date = new Date();
  return 'uuid_' + date.getTime();
}
