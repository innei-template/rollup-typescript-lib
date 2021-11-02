import { getTime } from '~/utils'
export const date = getTime()
const test = () => {
  console.log('hello, rollup')
  console.log(date)
}
export { test, getTime }
