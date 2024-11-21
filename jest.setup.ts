// file: jest.setup.ts
import '@testing-library/jest-dom'
import 'cross-fetch/polyfill'

const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
