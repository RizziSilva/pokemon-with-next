import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HEADER_ROUTES } from 'app-constants'
import { shallow } from 'enzyme'
import { Header } from '../'

describe('Header Tests', () => {
  it('Header options has correct texts', () => {
    const wrapper = shallow(<Header />)
    const headerOptionsElements = wrapper.find('a')

    headerOptionsElements.forEach((node) => {
      const elementText = node.text()
      const elementIsFromHeader = HEADER_ROUTES.some((option) => option.TITLE === elementText)

      expect(elementIsFromHeader).toBe(true)
    })

    expect(headerOptionsElements).toHaveLength(2)
  })

  it('Header options has correct links', () => {
    const wrapper = shallow(<Header />)
    const headerOptionsElements = wrapper.find(Link)

    headerOptionsElements.forEach((node) => {
      const elementPathName = node.props().href.pathname
      const elementIsFromHeader = HEADER_ROUTES.some((option) => option.PATH === elementPathName)

      expect(elementIsFromHeader).toBe(true)
    })

    expect(headerOptionsElements).toHaveLength(3)
  })

  it('Header logo has correct image path and layout props', () => {
    const wrapper = shallow(<Header />)
    const logo = wrapper.find(Image).first()
    const imageSrc = '/images/logoPokemon.png'
    const imageLayout = 'fill'
    const imageProps = logo.props()

    expect(imageProps.src).toBe(imageSrc)
    expect(imageProps.layout).toBe(imageLayout)
  })
})
