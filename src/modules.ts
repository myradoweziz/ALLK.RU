import { registerModules } from './router/register-modules'

import contacts from './modules/contacts'
import createPages from './modules/create-pages'
import home from './modules/home'
import positionPromotion from './modules/position-promotion'

registerModules({
  contacts: contacts,
  createPages: createPages,
  home: home,
  positionPromotion: positionPromotion
})
