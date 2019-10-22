import * as R from 'ramda'
export const gwMap = [
  {
    "netsuite": "Apro LLC",
    "sigma": "ACTEL"
  },
  {
    "netsuite": "Actel Communications Ltd",
    "sigma": "ACTEL"
  },
  {
    "netsuite": "Actel Egypt",
    "sigma": "ACTEL"
  },
  {
    "netsuite": "Allterco Sdn Bhd",
    "sigma": "ALLTERCO"
  },
  {
    "netsuite": "Allterco Pte Ltd",
    "sigma": "ALLTERCO"
  },
  {
    "netsuite": "Apigate Sdn Bhd",
    "sigma": "AXIATA"
  },
  {
    "netsuite": "KZ_KCELL",
    "sigma": "BAMBOOGROUP"
  },
  {
    "netsuite": "ORANGE RDC",
    "sigma": "BIZAO"
  },
  {
    "netsuite": "ORANGE COTE D'IVOIRE",
    "sigma": "BIZAO"
  },
  {
    "netsuite": "OTH FRANCE (t/a BIZAO)",
    "sigma": "BIZAO"
  },
  {
    "netsuite": "CM International B.V.",
    "sigma": "CM"
  },
  {
    "netsuite": "Bystel Telecommunications Services Limited",
    "sigma": "BYSTEL"
  },
  {
    "netsuite": "Centili Limited",
    "sigma": "CENTILI"
  },
  {
    "netsuite": "KW_OOREDOO",
    "sigma": "COMVIVA"
  },
  {
    "netsuite": "DigitalGO S.p.A",
    "sigma": "DIGITALGO"
  },
  {
    "netsuite": "Digital Tran Sa De Cv",
    "sigma": "DIGITALTRAN"
  },
  {
    "netsuite": "Resonance Tech, S.L.U.",
    "sigma": "DIGITALVIRGO"
  },
  {
    "netsuite": "Dimoco Europe GmbH",
    "sigma": "DIMOCO"
  },
  {
    "netsuite": "DIMOCO Europe GmbH",
    "sigma": "DIMOCO"
  },
  {
    "netsuite": "Echovox S.A.",
    "sigma": "ECHOVOX"
  },
  {
    "netsuite": "U Mobile Sdn Bhd",
    "sigma": "FI"
  },
  {
    "netsuite": "Bao Phat Developement and Trading Joint Stock Company",
    "sigma": "GHD"
  },
  {
    "netsuite": "Globway International B.V.",
    "sigma": "GLOBWAY"
  },
  {
    "netsuite": "Telefuture Belgium N.V.",
    "sigma": "GLOBWAY"
  },
  {
    "netsuite": "Globway B.V.",
    "sigma": "GLOBWAY"
  },
  {
    "netsuite": "Go4Mobility",
    "sigma": "GO4MOBILITY"
  },
  {
    "netsuite": "HUAWEI TECHNOLOGIES (MALAYSIA) SDN BHD",
    "sigma": "HUAWEI"
  },
  {
    "netsuite": "HUAWEI TECHNOLOGIES PHILS. INC.",
    "sigma": "HUAWEI"
  },
  {
    "netsuite": "PT. HUAWEI TECH INVESTMENT",
    "sigma": "HUAWEI"
  },
  {
    "netsuite": "Info2cell.com FZ-LLC",
    "sigma": "I2C"
  },
  {
    "netsuite": "ICT Vietnam Technology and Service Jointstock Company",
    "sigma": "ICT"
  },
  {
    "netsuite": "PT Permata Cipta Rejeki",
    "sigma": "ID_MACROKIOSK"
  },
  {
    "netsuite": "Netsize SA Dutch Branch",
    "sigma": "IPX"
  },
  {
    "netsuite": "Iraqcom Technologies Company",
    "sigma": "IRAQCOM"
  },
  {
    "netsuite": "",
    "sigma": "KC"
  },
  {
    "netsuite": "Mexcomm Sdn Bhd",
    "sigma": "MEXCOMM"
  },
  {
    "netsuite": "mGage Europe Limited",
    "sigma": "MGAGE"
  },
  {
    "netsuite": "Mira Networks (Pty) Limited",
    "sigma": "MIRA"
  },
  {
    "netsuite": "Macro Kiosk (HK) Limited",
    "sigma": "MK"
  },
  {
    "netsuite": "Macro Kiosk Berhad",
    "sigma": "MK"
  },
  {
    "netsuite": "Macro Kiosk Limited",
    "sigma": "MK"
  },
  {
    "netsuite": "MobLife.TV Sdn Bhd",
    "sigma": "MNC"
  },
  {
    "netsuite": "Mobilewiz Corporation",
    "sigma": "MOBILEWIZ"
  },
  {
    "netsuite": "MobiMind",
    "sigma": "MOBIMIND"
  },
  {
    "netsuite": "Mobimind",
    "sigma": "MOBIMIND"
  },
  {
    "netsuite": "Mobivate Limited",
    "sigma": "MOBIVATE"
  },
  {
    "netsuite": "MOBIXONE (PTY) LTD",
    "sigma": "MOBIXONE"
  },
  {
    "netsuite": "Mobile Technology Tomorrow (MT2)",
    "sigma": "MT2"
  },
  {
    "netsuite": "Docomo Digital Germany GmbH",
    "sigma": "NETM"
  },
  {
    "netsuite": "Oxygen8 Communications Australia Pty Ltd",
    "sigma": "OXYGEN8"
  },
  {
    "netsuite": "Oxygen8 East Africa Limited",
    "sigma": "OXYGEN8"
  },
  {
    "netsuite": "Dynamic Mobile Billing Limited",
    "sigma": "OXYGEN8"
  },
  {
    "netsuite": "Oxygen8 Communications South Africa (Pty) Ltd",
    "sigma": "OXYGEN8"
  },
  {
    "netsuite": "Paska",
    "sigma": "PASKA"
  },
  {
    "netsuite": "Paybyme (Not confirm)",
    "sigma": "PAYBYME"
  },
  {
    "netsuite": "Pay Chimp Ltd",
    "sigma": "PAYCHIMP"
  },
  {
    "netsuite": "PAYDASH SINGLE MEMBER PC",
    "sigma": "PAYDASH"
  },
  {
    "netsuite": "Trendtech Ltd",
    "sigma": "PAYGURU"
  },
  {
    "netsuite": "Trend Odeme Kurulusu A.S.",
    "sigma": "PAYGURU"
  },
  {
    "netsuite": "TrendTech Ltd",
    "sigma": "PAYGURU"
  },
  {
    "netsuite": "Siteworx Sdn Bhd",
    "sigma": "SITEWORX"
  },
  {
    "netsuite": "Hubtel Limited",
    "sigma": "SMSGH"
  },
  {
    "netsuite": "TPAY for Value Added Services",
    "sigma": "TPAY"
  },
  {
    "netsuite": "Numbase Limited",
    "sigma": "UU"
  },
  {
    "netsuite": "Zeptomobile Sdn Bhd",
    "sigma": "ZEPTOMOBILE"
  },
  {
    "netsuite": "Amazing Plaza Co. Ltd",
    "sigma": "ZEPTOMOBILE"
  },
  {
    "netsuite": "Sunnetic Co. Ltd",
    "sigma": "ZEPTOMOBILE"
  },
  {
    "netsuite": "Strex SA",
    "sigma": "ECHOVOX"
  },
  {
    "netsuite": "Digital Virgo España, S.A.",
    "sigma": ""
  },
  {
    "netsuite": "HNK Vastgoed B.V.",
    "sigma": ""
  },
  {
    "netsuite": "Hyphen Tech Ventures Sdn Bhd",
    "sigma": ""
  },
  {
    "netsuite": "RBT SAL OFFSHORE",
    "sigma": ""
  },
  {
    "netsuite": "CM.com Netherlands B.V.",
    "sigma": ""
  },
  {
    "netsuite": "GHD INVESTMENT AND TECHNOLOGY JOINT STOCK COMPANY",
    "sigma": ""
  }
].filter(x => !!x.sigma && x.sigma.length > 0 && !!x.netsuite && x.netsuite.length > 0)

export function gw_netsuite_to_sigma(netsuite_gw: string) {
  {
    const found = R.find(p => p.netsuite == netsuite_gw)(gwMap)
    if(!!found) {
      return found.sigma
    }
  }
  {
    const found = R.find(p => new RegExp(p.netsuite, 'ig').test(netsuite_gw))(gwMap)
    return !found ? null : found.sigma
  }
}