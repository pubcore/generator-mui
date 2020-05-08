import uiText, {registerDefaultText} from '@pubcore/ui-text'
import S from '../store'
import defaultTexts from '../resources/text'

export default (key, defaultText, replacements) =>
  uiText(S('resources.text')||{}, key, defaultText, replacements, {
    envType: S('envType'),
    defaultTexts,
    registerDefaultText: registerDefaultText({
      uri: S('resources.services.text.uri')
    })
  })