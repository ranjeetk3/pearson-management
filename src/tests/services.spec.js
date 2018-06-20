import { getPearsonUsers } from '../services/getPearsonUsers';
global.fetch = require('jest-fetch-mock');

test('getPearsonUsers should invoke success response', () => {
   
    const successResponse = jest.fn();
    fetch.mockResponse(JSON.stringify(
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        }), {status: 200});

    return getPearsonUsers(successResponse)
        .then(() => {
            expect(successResponse.mock.calls.length).toBe(1);
            expect(successResponse.mock.calls[0][0].id).toEqual(5);
            expect(successResponse.mock.calls[0][0].first_name).toEqual('Charles');
        });
});