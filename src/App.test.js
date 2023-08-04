import {render, screen, waitFor} from '@testing-library/react'
import App from './App'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
})


test("received GitHub name from API using mocked network event", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Freeple McGee'}))
    render(<App />)
    const headingEl = await waitFor(() => screen.getByRole('heading', {level: 2}))
    expect(headingEl.textContent).toBe('Freeple McGee')
})


