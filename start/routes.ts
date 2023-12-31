/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.where('id', Route.matchers.number())

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})



Route.group(function () {
  Route.get('/about',() => {
    return 'About page'
  })

  Route.post('/about', () => {
  return 'About post'
  })
}).prefix('/api')

Route.get('/posts', 'PostsController.index' )

Route.get('/posts/:id?', ({ params, request }) => {
  console.log(request.all())
  const { id } = params
  return 'Posts with id ' + id
})