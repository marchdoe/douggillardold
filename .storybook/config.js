import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'

import { Provider } from 'rebass'

addDecorator((story) => (
  <Provider>
    <div style={{
      padding: 20
    }}>
      {story()}
    </div>
  </Provider>
))

setDefaults({
  inline: true,
  header: false,
  name: 'CRA Kitchen Sink',
  url: 'https://doug-march.com',
  hierarchySeparator: /\/|\./
  // goFullScreen: false,
  // showLeftPanel: true,
  // showDownPanel: true,
  // showSearchBox: false,
  // downPanelInRight: true,
  // sortStoriesByKind: false
})

function loadStories () {
  const req = require.context('../src/components', true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
