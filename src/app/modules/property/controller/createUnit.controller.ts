import { StatusCodes } from 'http-status-codes';
import { myControllerHandler } from '../../../../utils/controller/myControllerHandler.utils';
import sendResponse from '../../../../shared/sendResponse';

export const createUnitController = myControllerHandler(async (req, res) => {
  sendResponse(res, {
    code: StatusCodes.OK,
    message: 'Review Given Successfully',
    data: {},
  });
});
