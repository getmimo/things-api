"use client";
import React, { useEffect, useState } from "react";

interface ResponseViewProps {
  endpoint: string;
}

const ResponseView: React.FC<ResponseViewProps> = ({ endpoint }) => {
  const [data, setData] = useState<string>(`
  {
    "abilities": [
        {
            "ability": {
                "name": "blaze",
                "url": "https://pokedex.mimo.dev/api/ability/66/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "solar-power",
                "url": "https://pokedex.mimo.dev/api/ability/94/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 267,
    "cries": {
        "latest": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/cries/main/cries/pokemon/latest/6.ogg",
        "legacy": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/cries/main/cries/pokemon/legacy/6.ogg"
    },
    "forms": [
        {
            "name": "charizard",
            "url": "https://pokedex.mimo.dev/api/pokemon-form/6/"
        }
    ],
    "game_indices": [
        {
            "game_index": 180,
            "version": {
                "name": "red",
                "url": "https://pokedex.mimo.dev/api/version/1/"
            }
        },
        {
            "game_index": 180,
            "version": {
                "name": "blue",
                "url": "https://pokedex.mimo.dev/api/version/2/"
            }
        },
        {
            "game_index": 180,
            "version": {
                "name": "yellow",
                "url": "https://pokedex.mimo.dev/api/version/3/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "gold",
                "url": "https://pokedex.mimo.dev/api/version/4/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "silver",
                "url": "https://pokedex.mimo.dev/api/version/5/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "crystal",
                "url": "https://pokedex.mimo.dev/api/version/6/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "ruby",
                "url": "https://pokedex.mimo.dev/api/version/7/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "sapphire",
                "url": "https://pokedex.mimo.dev/api/version/8/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "emerald",
                "url": "https://pokedex.mimo.dev/api/version/9/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "firered",
                "url": "https://pokedex.mimo.dev/api/version/10/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "leafgreen",
                "url": "https://pokedex.mimo.dev/api/version/11/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "diamond",
                "url": "https://pokedex.mimo.dev/api/version/12/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "pearl",
                "url": "https://pokedex.mimo.dev/api/version/13/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "platinum",
                "url": "https://pokedex.mimo.dev/api/version/14/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "heartgold",
                "url": "https://pokedex.mimo.dev/api/version/15/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "soulsilver",
                "url": "https://pokedex.mimo.dev/api/version/16/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "black",
                "url": "https://pokedex.mimo.dev/api/version/17/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "white",
                "url": "https://pokedex.mimo.dev/api/version/18/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "black-2",
                "url": "https://pokedex.mimo.dev/api/version/21/"
            }
        },
        {
            "game_index": 6,
            "version": {
                "name": "white-2",
                "url": "https://pokedex.mimo.dev/api/version/22/"
            }
        }
    ],
    "height": 17,
    "held_items": [],
    "id": 6,
    "is_default": true,
    "location_area_encounters": "https://pokedex.mimo.dev/api/pokemon/6/encounters",
    "moves": [
        {
            "move": {
                "name": "mega-punch",
                "url": "https://pokedex.mimo.dev/api/move/5/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fire-punch",
                "url": "https://pokedex.mimo.dev/api/move/7/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "thunder-punch",
                "url": "https://pokedex.mimo.dev/api/move/9/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "scratch",
                "url": "https://pokedex.mimo.dev/api/move/10/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swords-dance",
                "url": "https://pokedex.mimo.dev/api/move/14/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "cut",
                "url": "https://pokedex.mimo.dev/api/move/15/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "wing-attack",
                "url": "https://pokedex.mimo.dev/api/move/17/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fly",
                "url": "https://pokedex.mimo.dev/api/move/19/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mega-kick",
                "url": "https://pokedex.mimo.dev/api/move/25/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "headbutt",
                "url": "https://pokedex.mimo.dev/api/move/29/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "body-slam",
                "url": "https://pokedex.mimo.dev/api/move/34/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "take-down",
                "url": "https://pokedex.mimo.dev/api/move/36/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-edge",
                "url": "https://pokedex.mimo.dev/api/move/38/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "leer",
                "url": "https://pokedex.mimo.dev/api/move/43/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 15,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bite",
                "url": "https://pokedex.mimo.dev/api/move/44/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "growl",
                "url": "https://pokedex.mimo.dev/api/move/45/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 4,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "roar",
                "url": "https://pokedex.mimo.dev/api/move/46/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "ember",
                "url": "https://pokedex.mimo.dev/api/move/52/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 7,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "flamethrower",
                "url": "https://pokedex.mimo.dev/api/move/53/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 46,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 46,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 42,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 42,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 42,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 34,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 47,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 30,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hyper-beam",
                "url": "https://pokedex.mimo.dev/api/move/63/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "submission",
                "url": "https://pokedex.mimo.dev/api/move/66/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "counter",
                "url": "https://pokedex.mimo.dev/api/move/68/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "seismic-toss",
                "url": "https://pokedex.mimo.dev/api/move/69/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "strength",
                "url": "https://pokedex.mimo.dev/api/move/70/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "solar-beam",
                "url": "https://pokedex.mimo.dev/api/move/76/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-rage",
                "url": "https://pokedex.mimo.dev/api/move/82/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 17,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 26,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fire-spin",
                "url": "https://pokedex.mimo.dev/api/move/83/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 55,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 55,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 49,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 49,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 49,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 64,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 56,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 33,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 46,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 46,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 46,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "earthquake",
                "url": "https://pokedex.mimo.dev/api/move/89/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fissure",
                "url": "https://pokedex.mimo.dev/api/move/90/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dig",
                "url": "https://pokedex.mimo.dev/api/move/91/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "toxic",
                "url": "https://pokedex.mimo.dev/api/move/92/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rage",
                "url": "https://pokedex.mimo.dev/api/move/99/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mimic",
                "url": "https://pokedex.mimo.dev/api/move/102/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "double-team",
                "url": "https://pokedex.mimo.dev/api/move/104/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "smokescreen",
                "url": "https://pokedex.mimo.dev/api/move/108/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 10,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 9,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "defense-curl",
                "url": "https://pokedex.mimo.dev/api/move/111/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "reflect",
                "url": "https://pokedex.mimo.dev/api/move/115/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bide",
                "url": "https://pokedex.mimo.dev/api/move/117/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fire-blast",
                "url": "https://pokedex.mimo.dev/api/move/126/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swift",
                "url": "https://pokedex.mimo.dev/api/move/129/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "skull-bash",
                "url": "https://pokedex.mimo.dev/api/move/130/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fury-swipes",
                "url": "https://pokedex.mimo.dev/api/move/154/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 20,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rest",
                "url": "https://pokedex.mimo.dev/api/move/156/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-slide",
                "url": "https://pokedex.mimo.dev/api/move/157/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "slash",
                "url": "https://pokedex.mimo.dev/api/move/163/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 36,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 44,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 41,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 43,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 24,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "substitute",
                "url": "https://pokedex.mimo.dev/api/move/164/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "red-blue",
                        "url": "https://pokedex.mimo.dev/api/version-group/1/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "yellow",
                        "url": "https://pokedex.mimo.dev/api/version-group/2/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "snore",
                "url": "https://pokedex.mimo.dev/api/move/173/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "curse",
                "url": "https://pokedex.mimo.dev/api/move/174/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "protect",
                "url": "https://pokedex.mimo.dev/api/move/182/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "scary-face",
                "url": "https://pokedex.mimo.dev/api/move/184/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 27,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 21,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 39,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "belly-drum",
                "url": "https://pokedex.mimo.dev/api/move/187/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mud-slap",
                "url": "https://pokedex.mimo.dev/api/move/189/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "outrage",
                "url": "https://pokedex.mimo.dev/api/move/200/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sandstorm",
                "url": "https://pokedex.mimo.dev/api/move/201/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "endure",
                "url": "https://pokedex.mimo.dev/api/move/203/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "false-swipe",
                "url": "https://pokedex.mimo.dev/api/move/206/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "swagger",
                "url": "https://pokedex.mimo.dev/api/move/207/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fury-cutter",
                "url": "https://pokedex.mimo.dev/api/move/210/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "steel-wing",
                "url": "https://pokedex.mimo.dev/api/move/211/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "attract",
                "url": "https://pokedex.mimo.dev/api/move/213/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sleep-talk",
                "url": "https://pokedex.mimo.dev/api/move/214/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "return",
                "url": "https://pokedex.mimo.dev/api/move/216/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "frustration",
                "url": "https://pokedex.mimo.dev/api/move/218/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dynamic-punch",
                "url": "https://pokedex.mimo.dev/api/move/223/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-breath",
                "url": "https://pokedex.mimo.dev/api/move/225/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 12,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 12,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 12,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "iron-tail",
                "url": "https://pokedex.mimo.dev/api/move/231/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "metal-claw",
                "url": "https://pokedex.mimo.dev/api/move/232/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 13,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hidden-power",
                "url": "https://pokedex.mimo.dev/api/move/237/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "twister",
                "url": "https://pokedex.mimo.dev/api/move/239/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sunny-day",
                "url": "https://pokedex.mimo.dev/api/move/241/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "crunch",
                "url": "https://pokedex.mimo.dev/api/move/242/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "ancient-power",
                "url": "https://pokedex.mimo.dev/api/move/246/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-smash",
                "url": "https://pokedex.mimo.dev/api/move/249/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokedex.mimo.dev/api/version-group/3/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "crystal",
                        "url": "https://pokedex.mimo.dev/api/version-group/4/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "beat-up",
                "url": "https://pokedex.mimo.dev/api/move/251/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "heat-wave",
                "url": "https://pokedex.mimo.dev/api/move/257/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 59,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 59,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 59,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 71,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "will-o-wisp",
                "url": "https://pokedex.mimo.dev/api/move/261/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "facade",
                "url": "https://pokedex.mimo.dev/api/move/263/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "focus-punch",
                "url": "https://pokedex.mimo.dev/api/move/264/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "helping-hand",
                "url": "https://pokedex.mimo.dev/api/move/270/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "brick-break",
                "url": "https://pokedex.mimo.dev/api/move/280/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "secret-power",
                "url": "https://pokedex.mimo.dev/api/move/290/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "blaze-kick",
                "url": "https://pokedex.mimo.dev/api/move/299/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "blast-burn",
                "url": "https://pokedex.mimo.dev/api/move/307/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "weather-ball",
                "url": "https://pokedex.mimo.dev/api/move/311/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "air-cutter",
                "url": "https://pokedex.mimo.dev/api/move/314/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "overheat",
                "url": "https://pokedex.mimo.dev/api/move/315/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "rock-tomb",
                "url": "https://pokedex.mimo.dev/api/move/317/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "aerial-ace",
                "url": "https://pokedex.mimo.dev/api/move/332/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-claw",
                "url": "https://pokedex.mimo.dev/api/move/337/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokedex.mimo.dev/api/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokedex.mimo.dev/api/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokedex.mimo.dev/api/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokedex.mimo.dev/api/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-dance",
                "url": "https://pokedex.mimo.dev/api/move/349/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "roost",
                "url": "https://pokedex.mimo.dev/api/move/355/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "natural-gift",
                "url": "https://pokedex.mimo.dev/api/move/363/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "tailwind",
                "url": "https://pokedex.mimo.dev/api/move/366/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fling",
                "url": "https://pokedex.mimo.dev/api/move/374/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "flare-blitz",
                "url": "https://pokedex.mimo.dev/api/move/394/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 66,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 66,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 66,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 77,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 75,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "air-slash",
                "url": "https://pokedex.mimo.dev/api/move/403/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-pulse",
                "url": "https://pokedex.mimo.dev/api/move/406/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-rush",
                "url": "https://pokedex.mimo.dev/api/move/407/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "focus-blast",
                "url": "https://pokedex.mimo.dev/api/move/411/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "giga-impact",
                "url": "https://pokedex.mimo.dev/api/move/416/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "shadow-claw",
                "url": "https://pokedex.mimo.dev/api/move/421/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 1,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fire-fang",
                "url": "https://pokedex.mimo.dev/api/move/424/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 28,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 19,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "defog",
                "url": "https://pokedex.mimo.dev/api/move/432/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "captivate",
                "url": "https://pokedex.mimo.dev/api/move/445/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "ominous-wind",
                "url": "https://pokedex.mimo.dev/api/move/466/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokedex.mimo.dev/api/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokedex.mimo.dev/api/version-group/10/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hone-claws",
                "url": "https://pokedex.mimo.dev/api/move/468/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "flame-burst",
                "url": "https://pokedex.mimo.dev/api/move/481/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 32,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "flame-charge",
                "url": "https://pokedex.mimo.dev/api/move/488/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "round",
                "url": "https://pokedex.mimo.dev/api/move/496/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "echoed-voice",
                "url": "https://pokedex.mimo.dev/api/move/497/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "sky-drop",
                "url": "https://pokedex.mimo.dev/api/move/507/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "incinerate",
                "url": "https://pokedex.mimo.dev/api/move/510/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "acrobatics",
                "url": "https://pokedex.mimo.dev/api/move/512/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "inferno",
                "url": "https://pokedex.mimo.dev/api/move/517/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 62,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 54,
                    "move_learn_method": {
                        "name": "level-up",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/1/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "fire-pledge",
                "url": "https://pokedex.mimo.dev/api/move/519/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "bulldoze",
                "url": "https://pokedex.mimo.dev/api/move/523/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-tail",
                "url": "https://pokedex.mimo.dev/api/move/525/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokedex.mimo.dev/api/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokedex.mimo.dev/api/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "lets-go-pikachu-lets-go-eevee",
                        "url": "https://pokedex.mimo.dev/api/version-group/19/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "work-up",
                "url": "https://pokedex.mimo.dev/api/move/526/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "brilliant-diamond-and-shining-pearl",
                        "url": "https://pokedex.mimo.dev/api/version-group/23/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "heat-crash",
                "url": "https://pokedex.mimo.dev/api/move/535/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "hurricane",
                "url": "https://pokedex.mimo.dev/api/move/542/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "confide",
                "url": "https://pokedex.mimo.dev/api/move/590/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "mystical-fire",
                "url": "https://pokedex.mimo.dev/api/move/595/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "power-up-punch",
                "url": "https://pokedex.mimo.dev/api/move/612/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokedex.mimo.dev/api/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokedex.mimo.dev/api/version-group/16/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "brutal-swing",
                "url": "https://pokedex.mimo.dev/api/move/693/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokedex.mimo.dev/api/version-group/18/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "breaking-swipe",
                "url": "https://pokedex.mimo.dev/api/move/784/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "scale-shot",
                "url": "https://pokedex.mimo.dev/api/move/799/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dual-wingbeat",
                "url": "https://pokedex.mimo.dev/api/move/814/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "scorching-sands",
                "url": "https://pokedex.mimo.dev/api/move/815/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "tutor",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/3/"
                    },
                    "version_group": {
                        "name": "sword-shield",
                        "url": "https://pokedex.mimo.dev/api/version-group/20/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "tera-blast",
                "url": "https://pokedex.mimo.dev/api/move/851/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "dragon-cheer",
                "url": "https://pokedex.mimo.dev/api/move/913/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "temper-flare",
                "url": "https://pokedex.mimo.dev/api/move/915/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokedex.mimo.dev/api/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "scarlet-violet",
                        "url": "https://pokedex.mimo.dev/api/version-group/25/"
                    }
                }
            ]
        }
    ],
    "name": "charizard",
    "order": 7,
    "past_abilities": [],
    "past_types": [],
    "species": {
        "name": "charizard",
        "url": "https://pokedex.mimo.dev/api/pokemon-species/6/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/back/6.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/back/shiny/6.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/6.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/shiny/6.png",
        "front_shiny_female": null,
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/dream-world/6.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/home/6.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/home/shiny/6.png",
                "front_shiny_female": null
            },
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/official-artwork/6.png",
                "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png"
            },
            "showdown": {
                "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/showdown/back/6.gif",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/showdown/back/shiny/6.gif",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/showdown/6.gif",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/other/showdown/shiny/6.gif",
                "front_shiny_female": null
            }
        },
        "versions": {
            "generation-i": {
                "red-blue": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/6.png",
                    "back_gray": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/6.png",
                    "back_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/6.png",
                    "front_gray": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/6.png",
                    "front_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/6.png"
                },
                "yellow": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/6.png",
                    "back_gray": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/6.png",
                    "back_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/6.png",
                    "front_gray": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/6.png",
                    "front_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/6.png"
                }
            },
            "generation-ii": {
                "crystal": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/6.png",
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/6.png",
                    "back_shiny_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/6.png",
                    "back_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/6.png",
                    "front_shiny_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/6.png",
                    "front_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/6.png"
                },
                "gold": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/6.png",
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/gold/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/6.png",
                    "front_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/6.png"
                },
                "silver": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/6.png",
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/silver/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/6.png",
                    "front_transparent": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/6.png"
                }
            },
            "generation-iii": {
                "emerald": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/emerald/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/6.png"
                },
                "firered-leafgreen": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/6.png",
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/6.png"
                },
                "ruby-sapphire": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/6.png",
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/6.png",
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/6.png",
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/6.png"
                }
            },
            "generation-iv": {
                "diamond-pearl": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/6.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/6.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/6.png",
                    "front_shiny_female": null
                },
                "heartgold-soulsilver": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/6.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/6.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/6.png",
                    "front_shiny_female": null
                },
                "platinum": {
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/6.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/6.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/platinum/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/6.png",
                    "front_shiny_female": null
                }
            },
            "generation-v": {
                "black-white": {
                    "animated": {
                        "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/6.gif",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/6.gif",
                        "front_shiny_female": null
                    },
                    "back_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/6.png",
                    "back_female": null,
                    "back_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/6.png",
                    "back_shiny_female": null,
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/6.png",
                    "front_shiny_female": null
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/6.png",
                    "front_shiny_female": null
                },
                "x-y": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vi/x-y/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/6.png",
                    "front_shiny_female": null
                }
            },
            "generation-vii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vii/icons/6.png",
                    "front_female": null
                },
                "ultra-sun-ultra-moon": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/6.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/6.png",
                    "front_shiny_female": null
                }
            },
            "generation-viii": {
                "icons": {
                    "front_default": "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/versions/generation-viii/icons/6.png",
                    "front_female": null
                }
            }
        }
    },
    "stats": [
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokedex.mimo.dev/api/stat/1/"
            }
        },
        {
            "base_stat": 84,
            "effort": 0,
            "stat": {
                "name": "attack",
                "url": "https://pokedex.mimo.dev/api/stat/2/"
            }
        },
        {
            "base_stat": 78,
            "effort": 0,
            "stat": {
                "name": "defense",
                "url": "https://pokedex.mimo.dev/api/stat/3/"
            }
        },
        {
            "base_stat": 109,
            "effort": 3,
            "stat": {
                "name": "special-attack",
                "url": "https://pokedex.mimo.dev/api/stat/4/"
            }
        },
        {
            "base_stat": 85,
            "effort": 0,
            "stat": {
                "name": "special-defense",
                "url": "https://pokedex.mimo.dev/api/stat/5/"
            }
        },
        {
            "base_stat": 100,
            "effort": 0,
            "stat": {
                "name": "speed",
                "url": "https://pokedex.mimo.dev/api/stat/6/"
            }
        }
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "fire",
                "url": "https://pokedex.mimo.dev/api/type/10/"
            }
        },
        {
            "slot": 2,
            "type": {
                "name": "flying",
                "url": "https://pokedex.mimo.dev/api/type/3/"
            }
        }
    ],
    "weight": 905
}`);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <code className="bg-pokemon-gray text-white p-2 rounded">response.json</code>
      <pre className="h-96 overflow-scroll bg-pokemon-gray text-white rounded-md">
        {data}
      </pre>
    </>
  );
};

export default ResponseView;
