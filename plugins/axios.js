
// const log4js = require('log4js')

export default function ({ $axios }) {
    $axios.onRequest(config => {
      try {
          const consola =  require('consola')
          consola.info(`请求 -> url: ${config.url}; param: ${JSON.stringify(config.params)}; time: ${new Date()}`)
        // }
      } catch (error) {
        // continue regardless of error
      }
    })
}
