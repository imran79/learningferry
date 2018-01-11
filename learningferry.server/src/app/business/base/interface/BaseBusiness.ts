import Write from '../../common/interface/Write'
import Read from '../../common/interface/Read'

export interface BaseBusiness<T> extends Write<T>, Read<T> {


}

export default BaseBusiness;