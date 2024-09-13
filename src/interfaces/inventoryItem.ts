export interface IInventoryItem {
  name: string;
  quantity: number;
}

export interface IInventorty extends IInventoryItem {
  description?: string;
}