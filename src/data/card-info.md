# Card Format

## Schema
```JSON
    {
        "status": <status>,
        "image": <uri>,
        "set": <sets>,
        "type": <types>,
        "name": <string>,
        "requires" : <requirements>,
        "token" : <tokens>,
        "cost": {
            "treasure": <unsigned integer>,
            "potion": <unsigned integer>,
            "debt" : <unsigned integer>
        }
    }
```

### `<status>`
>`"legal" | "removed"`


### `<uri>`
>Fully Qualified Domain Name (FQDN)

### `<sets>`
>`"Intrigue" | "Seaside" | "Alchemy" | "Prosperity" | "Cornucopia" | "Hinterlands" | "Dark Ages" | "Guilds" | "Adventures" | "Empires" | "Nocturne" | "Renaissance" | "Dominion 1st Edition"`

### `<types>`
>`"kingdom" | "spoils" | etc...`

### `<requirements>`
> Unused as of yet, intended to specify special requirements (like and 11th kingdom pile)

### `<tokens>`
> Unused as of yet, tells you if any special tokens are needed for this card:

> `"embargo" | "+1treasure" | "-1treasure" | etc...`


## Example Card
```JSON
    {
        "status": "removed",
        "image": "http://wiki.dominionstrategy.com/images/2/22/Alchemist.jpg",
        "set": "Alchemy",
        "type": "kingdom",
        "name": "Alchemist",
        "requires" : "Spoils",
        "token" : "embargo",
        "cost" : {
            "treasure": 5,
            "potion": 1,
            "debt" : 8
        }
    }
```