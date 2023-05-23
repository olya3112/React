import {getArticles} from './get-articles'

describe('getArticles', () =>{
    test( 'should be a function', () =>{
        expect(getArticles).toBeInstanceOf(Function);
    })

    test( 'Shold be object with articleId = 5', () =>{
        expect(getArticles(5)).toBeInstanceOf(Object);
    })

    test( 'give articles with articleId = 11', () =>{
        expect(getArticles(5)[0].articleId).toBe(5);
    })

})