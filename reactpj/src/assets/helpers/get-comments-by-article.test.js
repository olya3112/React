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


})