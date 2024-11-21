import Safety from '@/app/safety/page'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
        get: () => {},
        entries: () => [],
      }),
  }
})

describe('Safety Page', () => {
  it('Safety page should render correctly', () => {
    render(<Safety />)
    const page = screen.getByTestId('safety-page-render')
    expect(page).toBeInTheDocument()
  })
})
