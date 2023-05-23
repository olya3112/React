import {getComments} from './get-comments-by-article'
import {selectByArticleId} from './get-comments-by-article'
import comments from "../data/comments.json";

describe('getComments', () =>{
    test( 'should be a function', () =>{
        expect(getComments).toBeInstanceOf(Function);
    })


    test( 'return 33 if article_id 33', () =>{
        expect(getComments(33)).toBeInstanceOf(Object);
    })

    test('return comments with articleId = 33', async () => {
        const received = await getComments(33);
        expect(received[0].articleId).toBe(33);
    })

    test('return comments with articleId', async () => {
        const received = await getComments(11);
        expect(received).toStrictEqual( [{ "id": 6,
            "author": "Roman",
            "articleId": 11,
            "countLikes": 5,
            "text": "Short text from Frank + random random random",
            "date": "2023-01-06 13:40:01"
        }]
        );
    })

})