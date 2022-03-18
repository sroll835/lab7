// eslint-disable-next-line no-undef
const app = express();
require('./src/database.js')

app.use('/',require('./app/routes/UploadImage'))

