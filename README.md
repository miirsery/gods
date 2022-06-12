# gods

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Deploy
```
docker build -t gods-frontend .
docker run -d -it -p 80:80 --rm --name gods-frontend gods-frontend
```