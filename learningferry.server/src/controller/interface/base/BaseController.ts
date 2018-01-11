import IWriteController from '../common/WriteController';
import IReadController from '../common/ReadController';
import BaseBusiness from '../../../app/business/base/interface/BaseBusiness';

interface IBaseController<T extends BaseBusiness<Object>> extends IWriteController<T>, IReadController<T> {


}

export default IBaseController;