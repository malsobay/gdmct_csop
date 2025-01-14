import {PlayerPersonas} from './playerPersonas.js';

export const CognitiveLoadTasks = {
  preTest:{
    payoff: {
      A: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47 },
      B: { 101: 48, 102: 60, 103: 45, 104: 41, 105: 20 },
      C: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68 },
      D: { 101: 69, 102: 67, 103: 54, 104: 43, 105: 63 },
      E: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45 },
      F: { 101: 50, 102: 45, 103: 11, 104: 60, 105: 23 },
      G: { 101: 58, 102: 39, 103: 29, 104: 75, 105: 51 },
      H: { 101: 79, 102: 10, 103: 65, 104: 14, 105: 69 },
      I: { 101: 41, 102: 19, 103: 67, 104: 57, 105: 58 }
    },
    _id: "1",
    difficulty: "Hard",
students: ["A", "B", "C", "D", "E", "F"],
studentPersonas: {
A: PlayerPersonas.Carl,
B: PlayerPersonas.James,
C: PlayerPersonas.Jonathan,
D: PlayerPersonas.Tom, 
E: PlayerPersonas.Rashed,
F: PlayerPersonas.Mike},
    rooms: [101, 102, 103, 104, 105],

    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["A", "B"],
        text: "can't live in the same room"
      },
      {
        _id: 1,
        type: 1,
        pair: ["A", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 2,
        type: 1,
        pair: ["C", "B"],
        text: "can't live in the same room"
      },
      {
        _id: 3,
        type: 1,
        pair: ["C", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 4,
        type: 1,
        pair: ["D", "B"],
        text: "can't live in the same room"
      },
      {
        _id: 5,
        type: 1,
        pair: ["D", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 6,
        type: 1,
        pair: ["F", "B"],
        text: "can't live in the same room"
      },
      {
        _id: 7,
        type: 1,
        pair: ["F", "E"],
        text: "can't live in the same room"
      },
    ],
    optimal: 554,
    computeTime: 27.93,
    usedIn: "step1",
    study: "pilot2" 
  },postTest:{
    payoff: {
      A: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47 },
      B: { 101: 48, 102: 60, 103: 45, 104: 41, 105: 20 },
      C: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68 },
      D: { 101: 69, 102: 67, 103: 54, 104: 43, 105: 63 },
      E: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45 },
      F: { 101: 50, 102: 45, 103: 11, 104: 60, 105: 23 },
      G: { 101: 58, 102: 39, 103: 29, 104: 75, 105: 51 },
      H: { 101: 79, 102: 10, 103: 65, 104: 14, 105: 69 },
      I: { 101: 41, 102: 19, 103: 67, 104: 57, 105: 58 }
    },
    _id: "1",
    difficulty: "Hard",
students: ["A", "B", "C", "D", "E", "F"],
studentPersonas: {
  A: PlayerPersonas.Carl,
  B: PlayerPersonas.James,
  C: PlayerPersonas.Jonathan,
  D: PlayerPersonas.Tom, 
  E: PlayerPersonas.Rashed,
  F: PlayerPersonas.Mike},
    rooms: [101, 102, 103, 104, 105],

    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["A", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 1,
        type: 1,
        pair: ["A", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 2,
        type: 1,
        pair: ["F", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 3,
        type: 1,
        pair: ["F", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 4,
        type: 1,
        pair: ["C", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 5,
        type: 1,
        pair: ["C", "E"],
        text: "can't live in the same room"
      },
      {
        _id: 6,
        type: 1,
        pair: ["D", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 7,
        type: 1,
        pair: ["D", "E"],
        text: "can't live in the same room"
      },
    ],
    optimal: 564,
    computeTime: 26.14,
    usedIn: "step1",
    study: "pilot2"
  }
};