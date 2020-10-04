import { CaseTypes } from '../constants/enums'
import {
  setData,
  setSelectedCountry1,
  setSelectedCountry2,
} from '../actions'
import {
  reducer,
  selectors,
} from '.'

describe('Reducer', () => {
  const mockInitialState = {
    data: undefined,
    worldTotal: undefined,
    countriesList: undefined,
    selectedCountry1: undefined,
    selectedCountry2: undefined,
    selectedCountry1Data: undefined,
    selectedCountry2Data: undefined,
  }

  it('should dispatch to set data', () => {
    const mockData = {
      Global: undefined,
      Countries: undefined,
    }

    expect(reducer(mockInitialState, setData(mockData)))
      .toEqual({
        ...mockInitialState,
        data: mockData,
      })
  })

  it('should dispatch to set first selected country', () => {
    const mockData = 'Mock country 1'

    expect(reducer(mockInitialState, setSelectedCountry1(mockData)))
      .toEqual({
        ...mockInitialState,
        selectedCountry1: mockData,
      })
  })

  it('should dispatch to set second selected country', () => {
    const mockData = 'Mock country 2'

    expect(reducer(mockInitialState, setSelectedCountry2(mockData)))
      .toEqual({
        ...mockInitialState,
        selectedCountry2: mockData,
      })
  })
})

describe('Selector', () => {
  const mockGlobal = {
    NewConfirmed: 123,
    NewDeaths: 123,
    NewRecovered: 123,
    TotalConfirmed: 123,
    TotalDeaths: 123,
    TotalRecovered: 123,
  }
  const mockCountryOne = {
    NewConfirmed: 123,
    NewDeaths: 123,
    NewRecovered: 123,
    TotalConfirmed: 123,
    TotalDeaths: 123,
    TotalRecovered: 123,
    Country: 'Albania',
    CountryCode: 'AL',
    Slug: 'albania',
    Date: '2020-10-02T03:55:53Z',
  }
  const mockCountryTwo = {
    NewConfirmed: 456,
    NewDeaths: 456,
    NewRecovered: 456,
    TotalConfirmed: 456,
    TotalDeaths: 456,
    TotalRecovered: 456,
    Country: 'Australia',
    CountryCode: 'AU',
    Slug: 'australia',
    Date: '2020-10-02T03:55:53Z',
  }
  const mockData = {
    Global: mockGlobal,
    Countries: [
      ...[mockCountryOne],
      ...[mockCountryTwo],
    ],
  }

  describe('data', () => {
    it('should return data', () => {
      const mockInitialState = {
        data: mockData,
      }
      const data = selectors.data(mockInitialState)

      expect(data).toEqual(mockData)
    })
  })

  describe('worldTotal', () => {
    it('should return world total with the correct schema', () => {
      const mockWorldTotal = [
        {
          type: CaseTypes.Confirmed,
          amount: mockData.Global.TotalConfirmed,
        },
        {
          type: CaseTypes.Deaths,
          amount: mockData.Global.TotalDeaths,
        },
        {
          type: CaseTypes.Recovered,
          amount: mockData.Global.TotalRecovered,
        },
      ]
      const mockInitialState = {
        data: mockData,
      }
      const worldTotal = selectors.worldTotal(mockInitialState)

      expect(worldTotal).toEqual(mockWorldTotal)
    })
  })

  describe('countriesList', () => {
    it('should return a list of countries', () => {
      const mockCountriesList = [
        {
          value: mockCountryOne.Slug,
          label: mockCountryOne.Country,
        },
        {
          value: mockCountryTwo.Slug,
          label: mockCountryTwo.Country,
        },
      ]
      const mockInitialState = {
        data: mockData,
      }
      const countriesList = selectors.countriesList(mockInitialState)

      expect(countriesList).toEqual(mockCountriesList)
    })
  })

  describe('selectedCountry1Data', () => {
    it('should return data from the selected country', () => {
      const mockCountryData = {
        name: mockCountryOne.Country,
        list: [
          {
            type: CaseTypes.Confirmed,
            amount: mockCountryOne.NewConfirmed,
            label: 'New confirmed',
          },
          {
            type: CaseTypes.Confirmed,
            amount: mockCountryOne.TotalConfirmed,
            label: 'Total confirmed',
          },
          {
            type: CaseTypes.Deaths,
            amount: mockCountryOne.NewDeaths,
            label: 'New deaths',
          },
          {
            type: CaseTypes.Deaths,
            amount: mockCountryOne.TotalDeaths,
            label: 'Total deaths',
          },
          {
            type: CaseTypes.Recovered,
            amount: mockCountryOne.NewRecovered,
            label: 'New recovered',
          },
          {
            type: CaseTypes.Recovered,
            amount: mockCountryOne.TotalRecovered,
            label: 'Total recovered',
          },
        ],
      }
      const mockInitialState = {
        data: mockData,
        selectedCountry1: mockCountryOne.Slug,
      }
      const selectedCountry1Data = selectors.selectedCountry1Data(mockInitialState)

      expect(selectedCountry1Data).toEqual(mockCountryData)
    })
  })

  describe('selectedCountry2Data', () => {
    it('should return data from the selected country', () => {
      const mockCountryData = {
        name: mockCountryTwo.Country,
        list: [
          {
            type: CaseTypes.Confirmed,
            amount: mockCountryTwo.NewConfirmed,
            label: 'New confirmed',
          },
          {
            type: CaseTypes.Confirmed,
            amount: mockCountryTwo.TotalConfirmed,
            label: 'Total confirmed',
          },
          {
            type: CaseTypes.Deaths,
            amount: mockCountryTwo.NewDeaths,
            label: 'New deaths',
          },
          {
            type: CaseTypes.Deaths,
            amount: mockCountryTwo.TotalDeaths,
            label: 'Total deaths',
          },
          {
            type: CaseTypes.Recovered,
            amount: mockCountryTwo.NewRecovered,
            label: 'New recovered',
          },
          {
            type: CaseTypes.Recovered,
            amount: mockCountryTwo.TotalRecovered,
            label: 'Total recovered',
          },
        ],
      }
      const mockInitialState = {
        data: mockData,
        selectedCountry2: mockCountryTwo.Slug,
      }
      const selectedCountry2Data = selectors.selectedCountry2Data(mockInitialState)

      expect(selectedCountry2Data).toEqual(mockCountryData)
    })
  })
})