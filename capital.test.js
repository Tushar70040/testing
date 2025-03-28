const  capital =  require('./capital');
test("mango == Mango",()=>{
    
    expect(capital("mango")).toBe("Mango");
});