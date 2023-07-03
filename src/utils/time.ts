export const getTime = () => {
  let message = ''
  let date = new Date().getHours()
  if (date >= 0 && date < 6) {
    message = '凌晨好'
  } else if (date >= 6 && date < 9) {
    message = '早上好'
  } else if (date >= 9 && date < 12) {
    message = '上午好'
  } else if (date >= 12 && date < 14) {
    message = '中午好'
  } else if (date >= 14 && date < 18) {
    message = '下午好'
  } else if (date >= 18 && date < 24) {
    message = '晚上好'
  }
  return message
}
