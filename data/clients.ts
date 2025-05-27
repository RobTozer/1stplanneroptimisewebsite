export type ClientRegion = "North" | "Midlands" | "South" | "Wales"

export interface Client {
  name: string
  type: "Diocese" | "Local Authority" | "Multi Academy Trust"
  region: ClientRegion
  postcode: string
  description?: string
}

// Function to determine region based on postcode
function getRegionFromPostcode(postcode: string): ClientRegion {
  const prefix = postcode.substring(0, 1).toUpperCase()

  // North postcodes
  if (
    [
      "BD",
      "BB",
      "BL",
      "CA",
      "CH",
      "CW",
      "DH",
      "DL",
      "DN",
      "FY",
      "HD",
      "HG",
      "HU",
      "HX",
      "L",
      "LA",
      "LS",
      "M",
      "NE",
      "OL",
      "PR",
      "S",
      "SK",
      "SR",
      "TS",
      "WA",
      "WF",
      "WN",
      "YO",
    ].includes(prefix) ||
    postcode.substring(0, 2).toUpperCase() === "NG" ||
    postcode.substring(0, 2).toUpperCase() === "DE" ||
    postcode.substring(0, 2).toUpperCase() === "ST" ||
    postcode.substring(0, 2).toUpperCase() === "TF"
  ) {
    return "North"
  }

  // Midlands postcodes
  if (
    ["B", "CV", "DY", "LE", "NN", "PE", "WR", "WS", "WV"].includes(prefix) ||
    postcode.substring(0, 2).toUpperCase() === "NG" ||
    postcode.substring(0, 2).toUpperCase() === "DE"
  ) {
    return "Midlands"
  }

  // Wales postcodes
  if (["CF", "LD", "LL", "NP", "SA", "SY"].includes(prefix)) {
    return "Wales"
  }

  // Default to South for all others
  return "South"
}

export const clients: Client[] = [
  // Diocese
  {
    name: "Archdiocese of Birmingham",
    type: "Diocese",
    region: "Midlands",
    postcode: "B46 3EA",
  },
  {
    name: "Archdiocese of Liverpool",
    type: "Diocese",
    region: "North",
    postcode: "L17 1AA",
  },
  {
    name: "Archdiocese of Westminster",
    type: "Diocese",
    region: "South",
    postcode: "SW1P 1QN",
  },
  {
    name: "Diocese of Brentwood",
    type: "Diocese",
    region: "South",
    postcode: "CM15 8AT",
  },
  {
    name: "Diocese of East Anglia",
    type: "Diocese",
    region: "South",
    postcode: "NR14 7SH",
  },
  {
    name: "Diocese of Portsmouth",
    type: "Diocese",
    region: "South",
    postcode: "PO1 3QA",
  },
  {
    name: "Diocese of Shrewsbury",
    type: "Diocese",
    region: "North",
    postcode: "CH43 4UX",
  },

  // Local Authorities
  {
    name: "Birmingham City Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "B4 7DJ",
  },
  {
    name: "Blackpool Council",
    type: "Local Authority",
    region: "North",
    postcode: "FY4 1AF",
  },
  {
    name: "Bristol City Council",
    type: "Local Authority",
    region: "South",
    postcode: "BS1 5TR",
  },
  {
    name: "Buckinghamshire County Council",
    type: "Local Authority",
    region: "South",
    postcode: "HP20 1UA",
  },
  {
    name: "Cambridgeshire County Council",
    type: "Local Authority",
    region: "South",
    postcode: "CB2 3QJ",
  },
  {
    name: "City of Wolverhampton Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "WV1 1SH",
  },
  {
    name: "Coventry City Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "CV1 5RR",
  },
  {
    name: "Darlington Borough Council",
    type: "Local Authority",
    region: "North",
    postcode: "DL1 5QT",
  },
  {
    name: "Derby City Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "DE1 2FS",
  },
  {
    name: "Doncaster Metropolitan Borough Council",
    type: "Local Authority",
    region: "North",
    postcode: "DN1 3BU",
  },
  {
    name: "Dudley Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "DY1 1HZ",
  },
  {
    name: "Durham County Council",
    type: "Local Authority",
    region: "North",
    postcode: "DH1 5UL",
  },
  {
    name: "Hackney Council",
    type: "Local Authority",
    region: "South",
    postcode: "E8 1DY",
  },
  {
    name: "Hertfordshire County Council",
    type: "Local Authority",
    region: "South",
    postcode: "SG1 2FQ",
  },
  {
    name: "Kirklees Council",
    type: "Local Authority",
    region: "North",
    postcode: "HD1 2EY",
  },
  {
    name: "Knowsley Metropolitan Borough Council",
    type: "Local Authority",
    region: "North",
    postcode: "L36 9UX",
  },
  {
    name: "London Borough of Lewisham Council",
    type: "Local Authority",
    region: "South",
    postcode: "SE6 4RU",
  },
  {
    name: "Nottingham City Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "NG2 3NG",
  },
  {
    name: "Peterborough City Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "PE2 8TY",
  },
  {
    name: "Sheffield City Council",
    type: "Local Authority",
    region: "North",
    postcode: "S1 2HH",
  },
  {
    name: "Solihull Metropolitan Borough Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "B91 3QB",
  },
  {
    name: "Suffolk County Council",
    type: "Local Authority",
    region: "South",
    postcode: "NR33 0EQ",
  },
  {
    name: "Tameside Metropolitan Borough Council",
    type: "Local Authority",
    region: "North",
    postcode: "OL6 0GS",
  },
  {
    name: "Telford and Wrekin",
    type: "Local Authority",
    region: "Midlands",
    postcode: "TF3 4JA",
  },
  {
    name: "Warwickshire County Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "CV34 4RL",
  },
  {
    name: "Westmorland and Furness Council",
    type: "Local Authority",
    region: "North",
    postcode: "LA14 2LD",
  },
  {
    name: "Worcestershire Children First",
    type: "Local Authority",
    region: "Midlands",
    postcode: "WR5 2NP",
  },
  {
    name: "Worcestershire County Council",
    type: "Local Authority",
    region: "Midlands",
    postcode: "WR5 2NP",
  },

  // Multi Academy Trusts
  {
    name: "Abbey College, Ramsey",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "PE26 1DG",
  },
  {
    name: "Anthem Schools Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "RG1 4RU",
  },
  {
    name: "Aspire Academy Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "PL25 4FD",
  },
  {
    name: "BMAT",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "CM20 2NR",
  },
  {
    name: "BMAT Education",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "CM20 2NR",
  },
  {
    name: "Cabot Learning Federation",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "BS15 4JT",
  },
  {
    name: "Cambridge Meridian Academies Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "PE28 5TQ",
  },
  {
    name: "Castle Business and Enterprise College",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "WS3 2ED",
  },
  {
    name: "CfBT Schools Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "RG1 4RU",
  },
  {
    name: "Chellaston Academy",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE73 5UB",
  },
  {
    name: "Christ The King Catholic Collegiate",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "ST4 6SP",
  },
  {
    name: "Consilium Academies",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "M30 0BG",
  },
  {
    name: "Diverse Academies Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "DN22 7EA",
  },
  {
    name: "Djanogly Learning Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NG7 7AR",
  },
  {
    name: "Emmanuel Schools Foundation",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "NE24 2SY",
  },
  {
    name: "Esteem Multi-Academy Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NG15 0DT",
  },
  {
    name: "Fairfax Multi Academy Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "B75 7JT",
  },
  {
    name: "Fountains Primary School",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE13 0HB",
  },
  {
    name: "Healing Multi Academy Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "DN41 7QD",
  },
  {
    name: "Landau Forte Charitable Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE1 2LF",
  },
  {
    name: "LEAD Academy Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NG1 5DU",
  },
  {
    name: "Leigh Academies Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "ME2 2SX",
  },
  {
    name: "Leodis Academies Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "WF3 1JQ",
  },
  {
    name: "Maritime Academy Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "DA10 1AL",
  },
  {
    name: "Minerva Learning Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "S9 1XU",
  },
  {
    name: "Nene Education Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NN9 5QF",
  },
  {
    name: "Northern Star Academies Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "BD23 1QN",
  },
  {
    name: "Our Lady of the Magnificat",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "CV32 6NB",
  },
  {
    name: "Peak Multi Academy Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE73 5UB",
  },
  {
    name: "QEGSMAT",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE6 1EP",
  },
  {
    name: "RESPECT Collaboration of Schools",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE24 8AN",
  },
  {
    name: "River Learning Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "OX5 2NT",
  },
  {
    name: "St Benedicts Catholic Academy Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "CR0 2RD",
  },
  {
    name: "St Francis and St Clare Catholic MAC",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "WV10 8BL",
  },
  {
    name: "St Ralph Sherwin Catholic Multi Academy Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "DE1 3TQ",
  },
  {
    name: "Tapton School Academy Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "S10 5RG",
  },
  {
    name: "The Diocese of Westminster Academy Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "HA5 3EP",
  },
  {
    name: "The Evolve Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NG19 6DX",
  },
  {
    name: "The Harmony Trust Ltd",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "OL4 1RR",
  },
  {
    name: "The Learners' Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "S21 4DA",
  },
  {
    name: "The Learning Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "CH3 7AD",
  },
  {
    name: "The Primary First Trust",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "DA11 0DY",
  },
  {
    name: "The Shaw Education Trust",
    type: "Multi Academy Trust",
    region: "North",
    postcode: "ST7 4DL",
  },
  {
    name: "Two Counties Trust",
    type: "Multi Academy Trust",
    region: "Midlands",
    postcode: "NG17 8HP",
  },
  {
    name: "White Horse Federation",
    type: "Multi Academy Trust",
    region: "South",
    postcode: "SN1 2LB",
  },
]

export const regionColors = {
  North: "#4285F4", // Blue
  Midlands: "#EA4335", // Red
  South: "#FBBC05", // Yellow
  Wales: "#34A853", // Green
}

export const typeColors = {
  Diocese: "#9C27B0", // Purple
  "Local Authority": "#2196F3", // Blue
  "Multi Academy Trust": "#FF9800", // Orange
}
