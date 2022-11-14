const db = require('./models/index');
const app = require('./app');
app.listen(3000, () => {
    console.log('Server running on port 3000 !');
});

/* db.instance.sync({force: true}).then(() => {
    console.log('Database connected an synchronized');

}).catch((e) => {
    console.error(e);
}); */