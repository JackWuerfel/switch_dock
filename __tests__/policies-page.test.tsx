import Policies from '@/app/policies/page'
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

describe('Policies Page', () => {
  it('Policies page should render correctly', () => {
    render(<Policies />)
    const page = screen.getByTestId('policies-page-render')
    expect(page).toBeInTheDocument()
  })
})
