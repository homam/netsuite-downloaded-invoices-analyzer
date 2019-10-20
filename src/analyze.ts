import fs from "fs"
import * as R from 'ramda'
import path from "path"

const invoices1 = require("../invoices-all.json")

const invoices = invoices1.filter(i => i.type == 'Invoice').map(i => 
  R.omit(['Order #', 'Settlement Term', 'Settlement Due Date', 'Discount Item', 'Sales Rep', 'Paired Intercompany Transaction', 'Rate', 'Ship Date', 'Actual', 'Shipping Method', 'Shipping Carrier', 'Tracking #', 'Return Tracking #', 
  'Customer Message', 'Delivery Terms', 'Nature of Transaction Code', 'Tax Total', 'Tax Id', 'Transaction Number', 'Supplier', 
  'Invoice Status', 'Reference No.', 'VAT Registration', 'Amount', 'Tax', 'Disc. Amt.', 'Approval Status',
  'Terms', 'Incoterm', 'Bank Details', 'PO #', 'Vendor', 'Employee', 'Receive By', 'Class', 'Location',
  'Exchange rate', 'Vendor Message', 'Proforma Invoice', 'Created From', 'Sales Effective Date', 'Additional Tracking #', 'Payment Term',
  'FOB', 'Intercompany Status', 'Ship To', 'Mode of Transport', 'Disc. Date'])(i)
).filter(
  i => i['Business Line'] == 'Mobile Content'
).map(i => {
  let gateway = null
  let country = i.Country
  {
    const options = ["MACROKIOSK", "Digital Tran", "Go4Mobility", "Globway", "OXYGEN8", "ACTEL", "MOBIVATE", "Allterco", "RESONANCETECH", "Paska", "DOUBLE U", "Mira", "Info2cell", "Hubtel", "Zeptomobile", "Acom", "Sunnetic", "Centili", "CM"]
    gateway = options.find(o => new RegExp(o, "ig").test(i.Memo)) 
      || options.find(o => new RegExp(o, "ig").test(i['Bill To']))
      || options.find(o => new RegExp(o, "ig").test(i['Customer']))

    if(/Trend Odeme/ig.test(i["Customer"]) || /TrendTech/ig.test(i["Customer"])) {
      gateway = 'PAYGURU'
    }

    if(/ORANGE COTE D'IVOIRE/ig.test(i["Customer"])) {
      gateway = 'BIZAO'
    }

    if(/Macro Kiosk/ig.test(i["Customer"])) {
      gateway = 'MACROKIOSK'
    }
  }
  {
    const match = /\w+\|\d+\|(\w\w)\|([\w\d\-\_\(\)]+)/gm.exec(i.Memo)
    if (!!match) {
      gateway = gateway || match[2]
      country = country || match[1]
    }
  }
  if (!gateway) {
    if(/Amazing Plaza/ig.test(i["Customer"])) {
      gateway = 'UNKNOWN'
    }
  }


  if ("UU" == gateway) {
    gateway = 'DOUBLE U'
  }

  if ('MK' == gateway) {
    gateway = 'MACROKIOSK'
  }

  if (!country) {
    if ("KWD" == i.Currency) {
      country = 'KW'
    }
  }

  if ('IR' == country) {
    gateway = 'Paska'
  }

  return {
    ...i
    , Country: country
    , Gateway: gateway
  }
}
)

fs.writeFileSync("invoices-processed.json", JSON.stringify(invoices.map(R.omit(["items"])), null, 2), 'utf8');

// fs.writeFileSync("items-raw.json", JSON.stringify(R.chain(x=> x, invoices.map(r => r.items)), null, 2), 'utf8');