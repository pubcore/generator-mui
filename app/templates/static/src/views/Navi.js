import React from 'react'
import T from '../lib/text'
import {
  Pages as PagesIcon, Extension as ExtensionIcon
} from '@material-ui/icons'
import {AppBar, Toolbar, Tabs} from '@material-ui/core'
import {navigate} from '../gofer'
import {useSelector} from 'react-redux'
import naviTabsValue from '../selectors/naviTabsValue'
import LinkTab from './LinkTab'

export default function Navi(){
  return <AppBar position="static">
    <Toolbar variant="dense">
      <img src="img/logo.png" width="60" />
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        value={useSelector(naviTabsValue(['home', 'other']))}
        onChange={(e, value) => navigate({e, value})}
        aria-label="simple tabs example"
      >
        <LinkTab icon={<PagesIcon/>} label={T('Home')} value="home"/>
        <LinkTab icon={<ExtensionIcon/>} label={T('Other page')} value="other" />
      </Tabs>
    </Toolbar>
  </AppBar>
}