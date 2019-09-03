import fs from 'fs';
const PATH = './routes'

export const routes = (app: any) => {
    fs.readdirSync('./src/routes/')
        .filter(f => !f.startsWith('.'))
        .forEach((el) => {
            require(`${PATH}/${el}`)(app)
        })
}
