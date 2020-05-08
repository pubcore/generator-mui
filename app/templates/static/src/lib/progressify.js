import {dispatch} from '../store'
import {progressStart, progressStop} from '../reducer/progress'
const start = () => dispatch(progressStart()),
  stop = () => dispatch(progressStop())

export default ({promise}) => {
  var started = false
  const dpStart = () => start(),
    dpStop = () => {
    timer && clearTimeout(timer)
    started && stop()
  }

  var timer = setTimeout(() => {
    started = true
    dpStart()
  }, 300)

  return promise.then(
    res => {
      dpStop()
      return res
    },
    err => {
      dpStop()
      return Promise.reject(err)
    }
  )
}
