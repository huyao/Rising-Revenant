/* Not Autogenerated file. Do edit manually :). */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineClientComponents(world: World) {
  return {
	  
    ClientCameraPosition: (() => {
		const name = "ClientCameraPosition";
		return defineComponent(
		  world,
		  {
			x: RecsType.Number,
			y: RecsType.Number,
			tile_index: RecsType.Number,
		  },
		  {
			metadata: {
			  name: name,
			},
		  }
		);
	  })(),
  
	  ClientClickPosition: (() => {
		const name = "ClientClickPosition";
		return defineComponent(
		  world,
		  {
			xFromOrigin: RecsType.Number,
			yFromOrigin: RecsType.Number,
  
			xFromMiddle: RecsType.Number,
			yFromMiddle: RecsType.Number,
		  },
		  {
			metadata: {
			  name: name,
			},
		  }
		);
	  })(),
  
	  ClientOutpostData: (() => {
		const name = "ClientOutpostData";
		return defineComponent(
		  world,
		  {
			id : RecsType.Number,
			owned: RecsType.Boolean,
			event_effected: RecsType.Boolean,
			selected: RecsType.Boolean,
			visible: RecsType.Boolean,
		  },
		  {
			metadata: {
			  name: name,
			},
		  }
		);
	  })(),
  
	  ClientGameData: (() => {
		const name = "ClientGameData";
		return defineComponent(
		  world,
		  {
			current_game_state : RecsType.Number,
			current_game_id : RecsType.Number,
			current_block_number : RecsType.Number,
			current_game_admin : RecsType.Boolean,
		  },
		  {
			metadata: {
			  name: name,
			},
		  }
		);
	  })(),
  };
}
