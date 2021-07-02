/**
 * Inactive: no letter visible
 * Active: letter temporarily visible
 * Found: letter permanently visible
 */
export enum CardStatus {
  inactive = 'inactief',
  active = 'actief',
  found = 'gevonden'
}

export class Card {

  public status: CardStatus.inactive | CardStatus.active | CardStatus.found = CardStatus.inactive;

  constructor(public letter: string) {
  }
}
