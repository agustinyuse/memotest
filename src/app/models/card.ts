export class Card {
  private isSelected: boolean;
  private isMatched: boolean;

  constructor(private imageSource: string, private guid: string) {

  }

  getGuid() : string {
    return this.guid;
  }

  getImagePath() : string {
    return this.imageSource;
  }

  getIsSelected() : boolean {
    return this.isSelected;
  }

  select() {
    this.isSelected = true;
  }

  unselect() {
    this.isSelected = false;
  }

  setIsMatched() {
    this.isMatched = true;
  }

  getIsMatched() {
    return this.isMatched;
  }
}
