import { Interval } from '../constants/enums'
import {
  setData,
  setSelectedInterval,
} from '../actions'
import {
  IPlanPickerState,
  reducer,
  selectors,
} from '.'

const requiredInitialState = {
  selectedInterval: Interval.Weekly,
}

describe('Reducer', () => {
  it('should dispatch to set data', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: undefined,
    }

    expect(reducer(mockInitialState, setData(mockData)))
      .toEqual({
        ...mockInitialState,
        data: mockData,
      })
  })

  it('should dispatch to set selected interval', () => {
    const mockInitialState = {
      ...requiredInitialState,
    }

    expect(reducer(mockInitialState, setSelectedInterval(Interval.Monthly)))
      .toEqual({
        ...mockInitialState,
        selectedInterval: Interval.Monthly,
      })
  })
})

describe('data Selector', () => {
  it('should expect data', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: mockData,
    }
    const data = selectors.data(mockInitialState)
    expect(data).toEqual(mockData)
  })
})

describe('interval Selector', () => {
  it('should expect unique intervals', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
      {
        interval: Interval.Fortnightly,
        paymentCount: 2,
      },
      {
        interval: Interval.Monthly,
        paymentCount: 2,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: mockData,
    }
    const interval = selectors.interval(mockInitialState)
    expect(interval).toEqual([
      Interval.Weekly,
      Interval.Fortnightly,
      Interval.Monthly,
    ])
  })
})

describe('paymentByWeekly Selector', () => {
  it('should expected payments by weekly', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
      {
        interval: Interval.Weekly,
        paymentCount: 4,
      },
      {
        interval: Interval.Monthly,
        paymentCount: 5,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: mockData,
    }
    const paymentByWeekly = selectors.paymentByWeekly(mockInitialState)
    expect(paymentByWeekly).toEqual([
      2,
      4,
    ])
  })
})

describe('paymentByFortnightly Selector', () => {
  it('should expected payments by fortnightly', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
      {
        interval: Interval.Weekly,
        paymentCount: 4,
      },
      {
        interval: Interval.Fortnightly,
        paymentCount: 5,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: mockData,
    }
    const paymentByFortnightly = selectors.paymentByFortnightly(mockInitialState)
    expect(paymentByFortnightly).toEqual([
      5,
    ])
  })
})

describe('paymentByMonthly Selector', () => {
  it('should expected payments by monthly', () => {
    const mockData = [
      {
        interval: Interval.Weekly,
        paymentCount: 2,
      },
      {
        interval: Interval.Monthly,
        paymentCount: 4,
      },
      {
        interval: Interval.Fortnightly,
        paymentCount: 5,
      },
    ]
    const mockInitialState = {
      ...requiredInitialState,
      data: mockData,
    }
    const paymentByMonthly = selectors.paymentByMonthly(mockInitialState)
    expect(paymentByMonthly).toEqual([
      4,
    ])
  })
})

describe('selectedInterval Selector', () => {
  it('should expected selected interval', () => {
    const mockInitialState = {
      ...requiredInitialState,
      selectedInterval: Interval.Monthly,
    }
    const selectedInterval = selectors.selectedInterval(mockInitialState)
    expect(selectedInterval).toEqual(Interval.Monthly)
  })
})