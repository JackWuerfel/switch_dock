// file: jest.setup.ts
import '@testing-library/jest-dom'
import 'cross-fetch/polyfill'

const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder


global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    takeRecords() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  };