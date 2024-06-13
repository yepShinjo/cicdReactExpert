/*
test scenario for Leaderboards component
- Leaderboards component
   - should render without crashing and also have store provider so Leaderboards can access the props inside
*/

import { describe, expect, vitest } from 'vitest'
import { Provider } from 'react-redux'
import store from '../store/store'
import Leaderboards from './Leaderboards'
import { render } from '@testing-library/react'

vitest.mock('react-redux', async () => ({
  ...(await vitest.importActual('react-redux')),
  useDispatch: () => vitest.fn()
}))

describe('leaderboards', () => {
  it('should check the leaderboards correctness', async () => {
    const component = render(
            <Provider store={store}>
                <Leaderboards />
            </Provider>
    )
    expect(component).toBeTruthy()
  })
})
