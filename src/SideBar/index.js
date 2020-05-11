import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const sidebar = {
  width: "100px"

}
const sidebarW = {
  width: "150px",
  height: "250px"

}
const SidebarExampleVisible = () => (
  <Sidebar.Pushable style={sidebarW}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        A.A. Info
      </Menu.Item>
      <Menu.Item as='a'>
        N.A. Info
      </Menu.Item>
      <Menu.Item as='a'>
        Alonon
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic style={sidebar}>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible
