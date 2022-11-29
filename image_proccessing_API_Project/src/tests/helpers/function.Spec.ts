import { add } from '../../server';
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);


describe('should be defined', () => {

    it('add function should be defined', () => {
        expect(add(2,2)).toBeDefined();
    });
});



describe("should be functioned", () => {

    it("add function should be defined", () => {
        const res = add( 2, 2);
        expect(res).toBe(4);
       
    });
    it("test api", async () => {
        const res = await request.get("/");
        
        expect(res.text).toBe('Hello World !');
    });
});