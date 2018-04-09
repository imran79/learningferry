import * as mongoose from 'mongoose';
import Read from '../interfaces/base/Read';
import Write from '../interfaces/base/Write';

class BaseReposiotry<T extends mongoose.Document> implements Read<T>, Write<T>{

    private model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    create = async (item: T, callback: (error: any, results: any) => void) => {
        await this.model.create(item, callback);
    }

    update = async (id: mongoose.Types.ObjectId, item: T, callback: (error: any, results: any) => void) => {
        await this.model.update({ _id: id }, item, callback);
    }
    delete = async (id: string, callback: (error: any, results: any) => void) => {
        this.model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));

    }
    findAll = async (callback: (er: any, reuslts: any) => void) => {
        this.model.find(callback);
    }
    findById = async (id: string, callback: (er: any, results: T) => void) => {
        this.model.findById(id, callback);
    }

    private toObjectId = (_id: string): mongoose.Types.ObjectId => {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}

export default BaseReposiotry
