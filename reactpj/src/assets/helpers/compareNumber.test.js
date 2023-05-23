import {compareNumber} from './compareNumber'

describe('compareNumber', () =>{
    test( 'should be a function', () =>{
        expect(compareNumber).toBeInstanceOf(Function);
    })

    test( 'Shold return 65 if you give 5 and 60', () =>{
        expect(compareNumber(5, 60)).toBe(65);
    })

    test( 'should be more then 60 if you give 5 and 60', () =>{
        expect(compareNumber(5, 60)).toBeGreaterThan(60);
    })

})