import {getArticles} from './get-articles'

describe('getArticles', () =>{
    test( 'should be a function', () =>{
        expect(getArticles).toBeInstanceOf(Function);
    })

    test( 'Shold be object with articleId = 5', () =>{
        expect(getArticles()).toBeInstanceOf(Object);
    })

    test( 'give articles with articleId = 11',async () => {
        const received = await getArticles();
        expect(received[0].articleId).toBe(11);
    })



})