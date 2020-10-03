import { IAPICountry } from '../constants/interface'
import { CaseTypes } from '../constants/enums'

export const getInfoListSchema = (data: IAPICountry) => {
  return {
    name: data.Country,
    list: [
      {
        type: CaseTypes.Confirmed,
        amount: data.NewConfirmed,
        label: 'New confirmed',
      },
      {
        type: CaseTypes.Confirmed,
        amount: data.TotalConfirmed,
        label: 'Total confirmed',
      },
      {
        type: CaseTypes.Deaths,
        amount: data.NewDeaths,
        label: 'New deaths',
      },
      {
        type: CaseTypes.Deaths,
        amount: data.TotalDeaths,
        label: 'Total deaths',
      },
      {
        type: CaseTypes.Recovered,
        amount: data.NewRecovered,
        label: 'New recovered',
      },
      {
        type: CaseTypes.Recovered,
        amount: data.TotalRecovered,
        label: 'Total recovered',
      },
    ],
  }
}