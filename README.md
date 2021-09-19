# Akuma Engine Template Generator

## Getting started

Install library to copy in all platforms
```ssh
npm i -g copyfiles
```

Build engine
```ssh
npm run build
```

Example file `.env` 
```
TEMPLATE_PATH=../projects/myProject/input/backendTemplates
DATA_PATH=../projects/myProject/input/myData/myProject.json
OUTPUT_PATH=../projects/myProject/myBackend
MODE=dev
```

Run engine to create code with `.env`
```ssh
npm start
```

Another way start without `.env` is put in line command like this:
```ssh
npm start --templatePath=../projects/myProject/input/backendTemplates --dataPath=../projects/myProject/input/myData/myProject.json --outputPath=../projects/myProject/myBackend
```
