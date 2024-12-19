// 
const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
const counterHome = createCounter();
const counterAbout = createCounter();

const http = require('http');
const server = http.createServer((reg, res) => {
    console.log('Запрос получен');  
    if (reg.url === '/') {        
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Корневая страница</h1><p>Просмотров: ${counterHome()}</p><a href="http://localhost:4000/about">Ссылка на страницу /about</a>`);
    } else if (reg.url === '/about') {       
        res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Страница about</h1><p>Просмотров: ${counterAbout()}</p><a href="http://localhost:4000">Ссылка на страницу /</a>`);
    } else {
        res.writeHead(404, { 'content-type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница не найдена</h1>');
    }

});

const port = 4000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});



