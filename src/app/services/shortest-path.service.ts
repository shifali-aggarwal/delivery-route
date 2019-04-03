import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShortestPathService {

  paths = {
    delamr: {
      start: {Karnal: 117, Jaipur: 281},
      Jaipur: {finish: 663},
      Karnal: {Ambala: 85},
      Ambala: {Sirhind: 51},
      Sirhind: {Ludhiana: 62},
      Ludhiana: {Jalandhar: 62},
      Jalandhar: {finish: 83},
      finish: {}
    },
    amrdel: {
      start: {Jalandhar: 83},
      Jalandhar: {Ludhiana: 62},
      Ludhiana: {Sirhind: 62},
      Sirhind: {Ambala: 51},
      Ambala: {Karnal: 85},
      Karnal: {finish: 117},
      finish: {}
    },
    deljal: {
      start: {Karnal: 117},
      Karnal: {Ambala: 85},
      Ambala: {Sirhind: 51},
      Sirhind: {Ludhiana: 62},
      Ludhiana: {finish: 62},
      finish: {}
    },
    delmum: {
      start: {Jaipur: 281},
      Jaipur: {Devgarh: 274},
      Devgarh: {Udaipur: 128},
      Udaipur: {Surat: 497},
      Surat: {finish: 281},
      finish: {}
    },
    chashi: {
      start: {Kalka: 29},
      Kalka: {Dharampur: 25},
      Dharampur: {Solan: 17},
      Solan: {finish: 46},
      finish: {}
    },
    chaamr: {
      start: {Phagwara: 123},
      Phagwara: {Jalandhar: 23},
      Jalandhar: {finish: 83},
      finish: {}
    },
    delsur: {
      start: {Jaipur: 281},
      Jaipur: {Devgarh: 274},
      Devgarh: {Udaipur: 128},
      Udaipur: {finish: 497},
      finish: {}
    },
  }

  constructor() { }

  lowestCostNode(costs, processed) {
    return Object.keys(costs).reduce((lowest, node) => {
      if (lowest === null || costs[node] < costs[lowest]) {
        if (!processed.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };

  dijkstra(map) {
    let graph = this.paths[map];
    const costs = Object.assign({finish: Infinity}, graph.start);
  
  
    const parents = {finish: null};
    for (let child in graph.start) {
      parents[child] = 'start';
    }
  
  
    // track nodes that have already been processed
    const processed = [];
  
  
    let node = this.lowestCostNode(costs, processed);
  
  
    while (node) {
      let cost = costs[node];
      let children = graph[node];
      for (let n in children) {
        let newCost = cost + children[n];
        if (!costs[n]) {
          costs[n] = newCost;
          parents[n] = node;
        }
        if (costs[n] > newCost) {
          costs[n] = newCost;
          parents[n] = node;
        }
      }
      processed.push(node);
      node = this.lowestCostNode(costs, processed);
    }
  
  
    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
      optimalPath.push(parent);
      parent = parents[parent];
    }
    optimalPath.reverse();
  
  
    const results = {
      distance: costs.finish,
      path: optimalPath
    };
  
    console.log(results)
    return results;
  };
}
