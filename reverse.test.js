const reverse = require('./reverse');

test("it reverse the string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("world")).toBe("dlrow");

})