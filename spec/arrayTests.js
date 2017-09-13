(function() {
  'use strict';

  describe('Array Tests For Mose And Bugi', function() {

    describe('Create practiseArray', function() {

      it('it should return a variable called practiseArray', function() {
        expect(Array.isArray(arrays.practiseArray())).to.equal(true);
      });
      it('it should return an array', function() {
        expect(arrays.practiseArray()).to.have.length(0);
      });
    });
    
    describe('Add "Strings"', function() {

      it('it should have the value Mose and Kibugi at index 0', function() {
        expect(arrays.addString()[0]).to.equal('Mose and Kibugi');      
      });
    });

    describe('Reassign Value', function() {

      it('it should overwrite the value stored at index 0', function() {
        expect(arrays.reassignValue()[0]).to.equal('Is is really fun learning to code');      
      });
    });
    describe('Check Length', function() {

     it('it should return the length of the practiseArray array', function() {
       expect(arrays.checkLength()).to.equal(1);      
     });
    });

    describe('Add Friends', function() {

      it('it should have the value friends at index 1', function() {
        expect(arrays.addFriends()[1]).to.equal('friends');      
      });
    });
    describe('Add Three Values', function() {

      it('it should have 5 items in practiseArray', function() {
        expect(arrays.addThreeValues()).to.have.length(5);      
      });
    });

    describe('Remove Last Item', function() {

      it('it should have 4 items in practiseArray', function() {
        expect(arrays.removeLastItem()).to.have.length(4);      
      });
    });

    describe('Remove First Item', function() {

      it('it should have 3 items in practiseArray', function() {
        expect(arrays.removeFirstItem()).to.have.length(3);    
      });
    });

    describe('Add Item to the front of the array', function() {

      it('it should have 4 items in practiseArray', function() {
        expect(arrays.addFirstItem()).to.have.length(4);    
      });
      it('it should have the value Beauty at index 0', function() {
        expect(arrays.addFirstItem()[0]).to.equal('Beauty');      
      });
    });

  });

}());
