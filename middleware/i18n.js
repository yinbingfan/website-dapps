export default function ({ isHMR, app, store, route, error }) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  let locale = route.path.split('/')[1],
    menu = route.path.split('/')[2]
  if(store.state.locales.indexOf(locale) >=0) {
    if(!menu) {
      store.commit('SET_MEUN_STATE', 'home')
    } else {
      store.commit('SET_MEUN_STATE', menu)
    }

  } else {
    store.commit('SET_MEUN_STATE', 'none')
  }
  if(!locale) {
    locale = defaultLocale
  }
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }

  store.commit('SET_LANG', locale)
  store.commit('SET_DEFAULT_LANG', locale)
  // store.commit('SET_LANGUAGE_ID', locale)
  // console.log('store.state.languageId', store.state.languageId)
  // console.log('store.state.locale',store.state.locale)
  app.i18n.locale = store.state.locale
  app.i18n.fallbackLocale = store.state.locale

}
