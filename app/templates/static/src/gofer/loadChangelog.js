import carry from '../lib/carry'
import changelog from '../carrier/getChangelog'
import {setChangelog} from '../reducer/changelog'
import {dispatch} from '../store'

export default async () => {
	var {body} = await carry(changelog)
	dispatch(setChangelog(body))
}