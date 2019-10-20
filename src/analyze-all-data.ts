import fs from "fs"
import * as R from 'ramda'
import path from "path"

const invoices1 = require("../_all-data.json")

const types = R.groupBy(x => x.type)(invoices1)

R.map(data => {

  const allFields = R.pipe(
    R.chain(R.keys)
  , R.uniq
  , R.map(n => [n, ''])
  , R.fromPairs
  )(data)

  console.log(data[0].type)

  fs.writeFileSync(`_${data[0].type}.json`, JSON.stringify(data.map(i => R.merge(allFields, i)), null, 2), 'utf8');

})(types)