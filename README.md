## Framework7-seed
I saw that there is not a well structured seed for Framework7 apps.
So i decided to create this seed.

## Build Tools

This seed use different build tools to build the same project, Hope it will helps you select a suitable build tool.

* `webpack` at origin/master
* `fis3` at [origin/fis3](https://github.com/BelinChung/HiApp/tree/fis3)
* `[DEPRECATED] grunt` at [origin/grunt](https://github.com/BelinChung/HiApp/tree/grunt)

## Requirements

* framework7 `^1.4.0`

## How to use seed

Start using this seed by cloning this repository and installing dependencies
```
$ git clone https://github.com/omarghader/framework7-seed
$ npm install 
```

## Run the project

Framework7-seed use webpack browser sync server to develop, Just run it in repo's root:

```
$ npm run dev
```

WebApp will be available on `http://localhost:3000/`

## Web App Release / PhoneGap App Release

```
$ npm run build
```

The result is available in `www/` folder.

## License

Copyright (c) 2016 Omar Ghader. MIT Licensed, see [LICENSE] for details.
