export const HEADER_ROUTES = [
  {
    TITLE: 'Home',
    PATH: '/',
  },
  {
    TITLE: 'Cards',
    PATH: '/cards',
  },
]

export const ROUTES = {
  HOME: '/',
  ALL_CARDS: '/cards',
  CARD: '/cards/[name]',
}

export const ROUTES_ALLOWED_PREVIOUS_PATH = {
  ['/cards/[name]']: [ROUTES.ALL_CARDS, ROUTES.CARD],
  ['/cards']: [ROUTES.HOME, ROUTES.ALL_CARDS, ROUTES.CARD, ''],
  ['/']: [ROUTES.ALL_CARDS, ROUTES.CARD, ROUTES.HOME, ''],
}
