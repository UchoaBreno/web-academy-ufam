import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('deve renderizar a marca da loja', () => {
    render(<Navbar />)

    expect(screen.getByText('Vitrine WA')).toBeInTheDocument()
  })

  it('deve renderizar o link para a página inicial', () => {
    render(<Navbar />)

    const link = screen.getByRole('link', {
      name: 'Início'
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('deve renderizar o link para a lista de favoritos', () => {
    render(<Navbar />)

    const link = screen.getByRole('link', {
      name: 'Lista de Favoritos'
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/favorites')
  })

  it('deve renderizar o botão para abrir o menu', () => {
    render(<Navbar />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu'
    })

    expect(button).toBeInTheDocument()
  })

  it('deve possuir os atributos corretos no botão do menu', () => {
    render(<Navbar />)

    const button = screen.getByRole('button', {
      name: 'Abrir menu'
    })

    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('data-bs-toggle', 'collapse')
    expect(button).toHaveAttribute('data-bs-target', '#navbarCollapse')
    expect(button).toHaveAttribute('aria-controls', 'navbarCollapse')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-label', 'Abrir menu')
  })

  it('deve renderizar a estrutura visual principal do navbar', () => {
    const { container } = render(<Navbar />)

    const nav = container.querySelector('nav')
    const navbarBrand = container.querySelector('.navbar-brand')
    const navbarCollapse = container.querySelector('#navbarCollapse')
    const navbarList = container.querySelector('.navbar-nav')

    expect(nav).toBeInTheDocument()
    expect(nav).toHaveClass(
      'navbar',
      'navbar-expand-md',
      'bg-light',
      'border-bottom',
      'border-body',
      'sticky-top'
    )

    expect(navbarBrand).toBeInTheDocument()
    expect(navbarBrand).toHaveClass('navbar-brand')

    expect(navbarCollapse).toBeInTheDocument()
    expect(navbarCollapse).toHaveClass(
      'collapse',
      'navbar-collapse'
    )

    expect(navbarList).toBeInTheDocument()
    expect(navbarList).toHaveClass(
      'navbar-nav',
      'me-auto',
      'mb-2',
      'mb-md-0'
    )
  })

  it('deve renderizar os dois itens de navegação', () => {
    render(<Navbar />)

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(3)

    expect(screen.getByRole('link', {
      name: 'Vitrine WA'
    })).toBeInTheDocument()

    expect(screen.getByRole('link', {
      name: 'Início'
    })).toBeInTheDocument()

    expect(screen.getByRole('link', {
      name: 'Lista de Favoritos'
    })).toBeInTheDocument()
  })

})