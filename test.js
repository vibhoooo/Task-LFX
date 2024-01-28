(async () => {
    const chai = await import('chai');
    const expect = chai.expect;
    const processIntegerList = require('./ass');

    describe('processIntegerList function', () => {
        it('should emit an error message if the list length is not a multiple of 10', () => {
            const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            const errorMessage = processIntegerList(inputList);
            expect(errorMessage).to.equal("Error: The list length must be a multiple of 10.");
        });
        it('should return a modified list with items at positions which are a multiple of 2 or 3 removed', () => {
            const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            const modifiedList = processIntegerList(inputList);
            expect(modifiedList).to.deep.equal([2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20]);
        });
    });
})();
