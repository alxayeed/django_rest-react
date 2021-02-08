export default class APIService {

    static updateArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token 6ecbf7a33df9f5c3b05594b3854b8857072be67a'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}