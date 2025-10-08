export const categories = {
    "generalTaxPayers": "General taxpayers",
    "women&seniorCitizens": "Women & Senior Citizens (65+)",
    "peopleWithDisabilities": "People with Disabilities",
    "thirdGenderIndividuals": "Third-Gender Individuals",
    "warWoundedFreedomFighters": "War-wounded Freedom Fighters",
    "parentOfADisabledChild": "Parent of a Disabled Child"
}

export let taxBrackets = [
    { id: 1, limit: 375000, rate: 0, tax: 0 },
    { id: 2, limit: 300000, rate: 0.1, tax: 0 },
    { id: 3, limit: 400000, rate: 0.15, tax: 0 },
    { id: 4, limit: 500000, rate: 0.20, tax: 0 },
    { id: 5, limit: 2000000, rate: 0.25, tax: 0 },
    { id: 6, limit: 3575000, rate: 0.30, tax: 0 }
]

let taxExemptionLimit = {
    "generalTaxPayers": 375000,
    "women&seniorCitizens": 425000,
    "peopleWithDisabilities": 500000,
    "thirdGenderIndividuals": 500000,
    "warWoundedFreedomFighters": 525000,
    "parentOfADisabledChild": 375000
}