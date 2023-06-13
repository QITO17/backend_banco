const app = require('./app');
const userRoutes = require('./routes/usersRouter');
const transfersRouter = require('./routes/transfersRouter');

//routes

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/transfers', transfersRouter);
app.listen(3000, () => {
  console.log('Running 🥥🍎❤️ 🍏🍍');
});
