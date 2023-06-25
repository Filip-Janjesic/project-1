import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public index = async ({ view }:HttpContextContract) => {
        const html = await  view.render('posts/index')
        return html
    }
}
