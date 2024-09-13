import { ITeamMember } from "../interfaces";

export const initialTeamMembers: ITeamMember[] = [
  {
    name: "John Doe",
    stats: [
      { statName: "STR", value: 4 },
      { statName: "AGI", value: 3 },
      { statName: "MND", value: 2 }
    ],
    level: 1,
    abilities: [
      { name: "Leadership", level: 2 },
      { name: "Tough Punch", level: 0 },
      { name: "Quick Dodge", level: 0 },
      { name: "Critical Hit", level: 2 },
      { name: "Fearless", level: 2 }
    ],
    inventory: [
      {
        name: "WarHammer",
        quantity: 1
      },
      {
        name: "Health Potion",
        quantity: 2
      },
      {
        name: "Rope",
        quantity: 1
      },
      {
        name: "Poisoned Dagger",
        quantity: 1
      }
    ],
    imageUrl: "./assets/paladyn.png"
  },
  {
    name: "Crazy Rita",
    stats: [
      { statName: "STR", value: 2 },
      { statName: "AGI", value: 4 },
      { statName: "MND", value: 2 }
    ],
    level: 1,
    abilities: [
      { name: "Quick Dodge", level: 0 },
      { name: "Sharpshooter", level: 2 },
      { name: "Agile", level: 2 }
    ],
    inventory: [
      {
        name: "Reflex Bow",
        quantity: 1
      },
      {
        name: "Dart",
        quantity: 1
      },
      {
        name: "Throwing Dagger",
        quantity: 1
      }
    ],
    imageUrl: "./assets/elf.png"
  },
  {
    name: "Black Beard",
    stats: [
      { statName: "STR", value: 2 },
      { statName: "AGI", value: 2 },
      { statName: "MND", value: 4 }
    ],
    level: 1,
    abilities: [
      { name: "Steady Mind", level: 2 },
      { name: "Magic Missile", level: 2 }
    ],
    inventory: [
      {
        name: "Arrow of Doom",
        quantity: 1
      },
      {
        name: "Sorcerer's Gloves",
        quantity: 1
      },
      {
        name: "Cristal Shard",
        quantity: 2
      }
    ],
    imageUrl: "./assets/mag.png"
  },
  {
    name: "John Doe",
    stats: [
      { statName: "STR", value: 4 },
      { statName: "AGI", value: 3 },
      { statName: "MND", value: 2 }
    ],
    level: 1,
    abilities: [
      { name: "Leadership", level: 2 },
      { name: "Tough Punch", level: 0 },
      { name: "Quick Dodge", level: 0 },
      { name: "Critical Hit", level: 2 },
      { name: "Fearless", level: 2 }
    ],
    inventory: [
      {
        name: "WarHammer",
        quantity: 1
      },
      {
        name: "Health Potion",
        quantity: 2
      },
      {
        name: "Rope",
        quantity: 1
      },
      {
        name: "Poisoned Dagger",
        quantity: 1
      }
    ],
    imageUrl: "./assets/demon.png"
  }
];