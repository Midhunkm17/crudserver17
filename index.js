//impost json server
const jsonserver=require('json-server')

//import cors
const cors=require('cors')

//create jsonserver
const server=jsonserver.create()

const middleware=jsonserver.defaults()

//router
const router=jsonserver.router('cruddb.json')

server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log(`_____Json server started at Port : ${PORT}__` );
})