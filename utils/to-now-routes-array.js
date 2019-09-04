const redirects = require('./old-format-redirects').redirects
const fs = require('fs')

const newRoutes = redirects.map(([from, to]) => {
    return {
        src: from,
        status: 301,
        headers: {
            Location: to
        }
    }
})

const stream = fs.createWriteStream('./result/new-routes.js')

stream.write(JSON.stringify(newRoutes, null, 3))

stream.close()




