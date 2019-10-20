import cheerio from "cheerio"
import fs from "fs"
import * as R from 'ramda'
import path from "path"


const invoices1 = fs.readdirSync(path.resolve(__dirname, "../../all/dls/"))
  .map(f => /transaction\.nl\?id=(\d+)/gm.exec(f))
  .filter(f => !!f)
  .map(f => ({ filename: f[0], id: f[1] }))
  .map(({ filename, id }) => {
    const content = fs.readFileSync(path.resolve(__dirname, `../../all/dls/${filename}`), "utf8")
    const $ = cheerio.load(content)

    const type = $("h1").text().trim()

    const fields = $(".uir-field-wrapper .uir-field.inputreadonly")

    const obj = fields.toArray().map(f => {
      const name = cheerio(f.previousSibling).text().trim()
      const value = cheerio(f).text().trim()

      return [name, value]
    }).filter(x => !!x[0])

    console.log(({id, type, ...R.fromPairs(obj)}))
    return {id, type, ...R.fromPairs(obj)}

    const customer = cheerio(fields[0]).text().trim()
    const invoice_number = cheerio(fields[2]).text().trim()
    const currency = cheerio(fields[4]).text().trim()
    const exchange_rate = cheerio(fields[5]).text().trim()
    const date = cheerio(fields[7]).text().trim()
    const billing_period = cheerio(fields[8]).text().trim()
    const memo = cheerio(fields[10]).text().trim()
    const total = cheerio(fields[14]).text().trim()
    const amount_due = cheerio(fields[15]).text().trim()
    const business_line = cheerio(fields[17]).text().trim()
    const country = cheerio(fields[20]).text().trim()



    const items = $("#item_splits tr").toArray().slice(1).map((tr) => {
      const tds = cheerio.load(tr)("td")
      return {
        billing_period: cheerio(tds[0]).text().trim(),
        item: cheerio(tds[1]).text().trim(),
        quantity: cheerio(tds[2]).text().trim(),
        description: cheerio(tds[3]).text().trim(),
        rate: cheerio(tds[5]).text().trim(),
        amount: cheerio(tds[6]).text().trim(),
        gross_amount: cheerio(tds[10]).text().trim(),
        invoice_id: id
      }
    })


    return {
        id
      , type
      , business_line
      , customer
      , invoice_number
      , currency
      , exchange_rate
      , date
      , billing_period
      , memo
      , total
      , amount_due
      , country
      , items
    }
  })

fs.writeFileSync(`_all-data.json`, JSON.stringify(invoices1), 'utf8');


