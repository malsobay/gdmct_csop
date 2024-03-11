import {PlayerPersonas} from './playerPersonas.js';

export const CognitiveLoadTasks = {
  preTest:{
    payoff: {
      A: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47, 106: 44 },
      B: { 101: 48, 102: 60, 103: 45, 104: 41, 105: 20, 106: 29 },
      C: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68, 106: 73 },
      D: { 101: 69, 102: 67, 103: 54, 104: 43, 105: 63, 106: 64 },
      E: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45, 106: 12 },
      F: { 101: 50, 102: 45, 103: 11, 104: 60, 105: 23, 106: 79 },
      G: { 101: 58, 102: 39, 103: 29, 104: 75, 105: 51, 106: 34 },
      H: { 101: 79, 102: 10, 103: 65, 104: 14, 105: 69, 106: 67 },
      I: { 101: 41, 102: 19, 103: 67, 104: 57, 105: 58, 106: 55 }
    },
    _id: "1",
    difficulty: "Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    studentPersonas: {
      A: PlayerPersonas.Rashed, 
      B: PlayerPersonas.Carl, 
      C: PlayerPersonas.Rashed, 
      D: PlayerPersonas.Carl, 
      E: PlayerPersonas.Rashed, 
      F: PlayerPersonas.Carl, 
      G: PlayerPersonas.Rashed, 
      H: PlayerPersonas.Carl, 
      I: PlayerPersonas.Rashed},
    rooms: [101, 102, 103, 104, 105, 106],
    constraints: [
      {
        _id: 0,
        type: 1,
        pair: ["A", "D"],
        text: "can't live in the same room"
      },
      {
        _id: 1,
        type: 3,
        pair: ["A", "G"],
        text: "can't live in the same room or be neighbors"
      },
      { _id: 2, type: 2, pair: ["B", "D"], text: "must be neighbors" },
      { _id: 3, type: 2, pair: ["B", "F"], text: "must be neighbors" },
      {
        _id: 4,
        type: 3,
        pair: ["B", "G"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 5,
        type: 1,
        pair: ["E", "F"],
        text: "can't live in the same room"
      },
      {
        _id: 6,
        type: 0,
        pair: ["E", "I"],
        text: "must live in the same room"
      },
      {
        _id: 7,
        type: 1,
        pair: ["F", "H"],
        text: "can't live in the same room"
      }
    ],
    optimal: 554,
    computeTime: 27.93,
    usedIn: "step1",
    study: "pilot2"
  },
  postTest:{
    payoff: {
      A: { 101: 82, 102: 13, 103: 68, 104: 17, 105: 72, 106: 70 },
      B: { 101: 57, 102: 52, 103: 18, 104: 67, 105: 30, 106: 86 },
      C: { 101: 74, 102: 67, 103: 23, 104: 55, 105: 45, 106: 12 },
      D: { 101: 54, 102: 66, 103: 51, 104: 47, 105: 26, 106: 35 },
      E: { 101: 56, 102: 42, 103: 33, 104: 50, 105: 68, 106: 73 },
      F: { 101: 63, 102: 61, 103: 48, 104: 37, 105: 57, 106: 58 },
      G: { 101: 59, 102: 40, 103: 30, 104: 76, 105: 52, 106: 35 },
      H: { 101: 52, 102: 43, 103: 23, 104: 35, 105: 47, 106: 44 },
      I: { 101: 40, 102: 18, 103: 66, 104: 56, 105: 57, 106: 54 }
    },
    _id: "2",
    difficulty: "Hard",
    students: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    studentPersonas: {
      A: PlayerPersonas.Rashed, 
      B: PlayerPersonas.Carl, 
      C: PlayerPersonas.Rashed, 
      D: PlayerPersonas.Carl, 
      E: PlayerPersonas.Rashed, 
      F: PlayerPersonas.Carl, 
      G: PlayerPersonas.Rashed, 
      H: PlayerPersonas.Carl, 
      I: PlayerPersonas.Rashed},
    rooms: [101, 102, 103, 104, 105, 106],
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
        pair: ["B", "C"],
        text: "can't live in the same room"
      },
      { _id: 2, type: 2, pair: ["B", "D"], text: "must be neighbors" },
      {
        _id: 3,
        type: 0,
        pair: ["C", "I"],
        text: "must live in the same room"
      },
      { _id: 4, type: 2, pair: ["D", "F"], text: "must be neighbors" },
      {
        _id: 5,
        type: 3,
        pair: ["D", "G"],
        text: "can't live in the same room or be neighbors"
      },
      {
        _id: 6,
        type: 1,
        pair: ["F", "H"],
        text: "can't live in the same room"
      },
      {
        _id: 7,
        type: 3,
        pair: ["G", "H"],
        text: "can't live in the same room or be neighbors"
      }
    ],
    optimal: 564,
    computeTime: 26.14,
    usedIn: "step1",
    study: "pilot2"
  }
};
