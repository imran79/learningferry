import * as mongoose from 'mongoose';
import Read from '../interfaces/base/Read';
import Write from '../interfaces/base/Write';

class BaseReposiotry<T extends mongoose.Document> implements Read<T>, Write<T>{

    private model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    public create(item: T, callback: (error: any, results: any) => void): void {
        this.model.create(item, callback);
    }

    public update(id: mongoose.Types.ObjectId, item: T, callback: (error: any, results: any) => void): void {
        this.model.update({ _id: id }, item, callback);
    }
    delete(id: string, callback: (error: any, results: any) => void): void {
        this.model.remove({ _id: this.toObjectId(id) }, (err) => callback(err, null));

    }
    findAll(callback: (er: any, reuslts: any) => void): void {
        this.model.find(callback);
    }
    findById(id: string, callback: (er: any, results: T) => void): void {
        this.model.findById(id, callback);
    }

    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}

export default BaseReposiotry
