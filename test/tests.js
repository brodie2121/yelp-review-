const chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).should();

const User = require('../models/user');

describe('Users model tests', () => {
    //given an email address, do we get a use robject in return
    it('should be a valid user object', async () => {
        const userInstance = new User(null, null, null, 'brodiebrock@gmail.com', null);
        const theUser = await userInstance.getUserByEmail();
        expect(theUser).to.be.an('object');
    });

    it('should NOT be undefined', async () => {
        const userInstance = new User(null, null, null, 'brodiebrock@gmail.com', null);
        const theUser = await userInstance.getUserByEmail();
        expect(theUser.id).to.not.be.an('undefined');
    });

    it('should get a list of all users', async () => {
        const allUsers = await User.getAllUsers(); 
        expect(allUsers).to.not.be.an('undefined');
    })

})


