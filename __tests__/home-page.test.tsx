import Home from '@/app/page'
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

describe('Home Page', () => {
  it('Home page should render correctly', () => {
    render(<Home />)
    const page = screen.getByTestId('home-page-render')
    expect(page).toBeInTheDocument()
  })
})
