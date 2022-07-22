import { getTime } from '~/utils'

import './index.css'

export const date = getTime()
const test = () => {
  console.log('hello, rollup')
  console.log(date)
}
export { test, getTime }
