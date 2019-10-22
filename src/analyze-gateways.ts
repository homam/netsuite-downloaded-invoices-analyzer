import * as fs from "fs"
import * as R from 'ramda'
import { gw_netsuite_to_sigma } from "./gw-map"
const file = '_Invoice' // '_Sales Order'
const invoices1 = JSON.parse(fs.readFileSync(`${file}.json`, 'utf8'))

const invoices = invoices1.map(i => {

  let gateway = null
  let country = i.Country
  {
    const match = /\w+\|\d+\|(\w\w)\|([\w\d\-\_\(\)]+)/gm.exec(i.Memo)
    if (!!match) {
      gateway = gateway || match[2]
      country = country || match[1]
    }
  }
  {
    gateway = gw_netsuite_to_sigma(i['Customer'])
  }
  if (!gateway) {
    {
      const options = ["MACROKIOSK", "Digital Tran", "Go4Mobility", "Globway", "OXYGEN8", "ACTEL", "MOBIVATE", "Allterco", "RESONANCETECH", "Paska", "DOUBLE U", "Mira", "Info2cell", "Hubtel", "Zeptomobile", "Acom", "Sunnetic", "Centili", "CM"]
      gateway = options.find(o => new RegExp(o, "ig").test(i.Memo))
        || options.find(o => new RegExp(o, "ig").test(i['Customer']))

      const gwMap = [
        { reg: /Resonance Tech/ig, name: 'RESONANCETECH' }
        , { reg: /Trend Odeme/ig, name: 'PAYGURU' }
        , { reg: /TrendTech/ig, name: 'PAYGURU' }
        , { reg: /Dimoco/ig, name: 'DIMOCO' }
        , { reg: /ORANGE COTE D'IVOIRE/ig, name: 'BIZAO' }
        , { reg: /Macro Kiosk/ig, name: 'MACROKIOSK' }
      ]
      const gwFound = R.head(gwMap.filter(o => !!o.reg.test(i.Customer) || !!o.reg.test(i['Bill To'])))
      // if (i.id == '39804') {
      //   console.log(gwMap.find(o => !!o.reg.test(i.Customer) || !!o.reg.test(i['Bill To'])))
      //   debugger;
      // }
      if (!!gwFound) {
        gateway = gwFound.name
      }

    }
    if (!gateway) {
      if (/Amazing Plaza/ig.test(i["Customer"])) {
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
  }

  return {
    ...i
    , Country: country
    , Gateway: (gateway || '----').toUpperCase()
  }
}
)

fs.writeFileSync(`./${file}.analyzed.json`, JSON.stringify(invoices, null, 2), 'utf8');
